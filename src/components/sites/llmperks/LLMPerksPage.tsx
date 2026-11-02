"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import "./llmperks.css";
import {
  MODELS, PICKS, NEW_MODELS, STATS, fmtContext,
  type Model, type Cap, type Tier,
} from "./data";

// ─── Brand SVG ────────────────────────────────────────────────────────────────
function BrandMark() {
  return (
    <svg className="lp-brand-mark" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="#3730C4"/>
      <path fill="#fff" d="M16 5.1 18.55 13.45 26.9 16 18.55 18.55 16 26.9 13.45 18.55 5.1 16 13.45 13.45Z"/>
    </svg>
  );
}

// ─── Search icon ──────────────────────────────────────────────────────────────
function SearchIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7"/>
      <path d="m20 20-3.5-3.5"/>
    </svg>
  );
}

// ─── Arrow right icon ─────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

// ─── Telegram icon ─────────────────────────────────────────────────────────────
function TelegramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M21.9 4.4 18.7 19.6c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 13.3l-4.8-1.5c-1-.3-1.1-1 .2-1.5l18.8-7.2c.9-.3 1.6.2 1.4 1.3Z"/>
    </svg>
  );
}

// ─── Provider logo ────────────────────────────────────────────────────────────
function ProviderLogo({ logo, name }: { logo: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="lp-prov-logo" src={logo} alt={name} title={name} width="24" height="24" loading="lazy" />
  );
}

// ─── Model logo ───────────────────────────────────────────────────────────────
function ModelLogo({ logo, fallback, size = 28 }: { logo: string | null; fallback?: string; size?: number }) {
  if (logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="lp-logo" src={logo} alt="" width={size} height={size} loading="lazy" />;
  }
  return <span className="lp-logo-fallback" style={{ width: size, height: size }}>{fallback ?? "?"}</span>;
}

// ─── Capability badges ────────────────────────────────────────────────────────
const CAP_LABELS: Record<Cap, string> = {
  reasoning: "Reasoning", coding: "Coding", tools: "Tool use",
  vision: "Vision", long: "Long context", open: "Open weights",
};
const CAP_CLASS: Record<Cap, string> = {
  reasoning: "lp-cap-reasoning", coding: "lp-cap-coding", tools: "lp-cap-tools",
  vision: "lp-cap-vision", long: "lp-cap-long", open: "lp-cap-open",
};

function Caps({ caps }: { caps: Cap[] }) {
  return (
    <div className="lp-m-caps">
      {caps.map(c => (
        <span key={c} className={`lp-cap ${CAP_CLASS[c]}`}>{CAP_LABELS[c]}</span>
      ))}
    </div>
  );
}

// ─── Score bar ────────────────────────────────────────────────────────────────
function ScoreBar({ value, max = 50 }: { value: number; max?: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <span className="lp-score">
      <span className="lp-score-bar"><span className="lp-score-fill" style={{ width: `${pct}%` }} /></span>
      {value.toFixed(1)}
    </span>
  );
}

// ─── Tier bar ─────────────────────────────────────────────────────────────────
const TIER_LABELS: Record<Tier, string> = { TOP: "Frontier", MID: "Mid-size", LITE: "Small" };
const TIER_PCT: Record<Tier, string> = { TOP: "100%", MID: "62%", LITE: "30%" };

function TierBar({ tier }: { tier: Tier }) {
  return (
    <span className="lp-tier">
      <span className="lp-tier-bar"><span className="lp-tier-fill" style={{ width: TIER_PCT[tier] }} /></span>
      {TIER_LABELS[tier]}
    </span>
  );
}

// ─── Provider stack ───────────────────────────────────────────────────────────
function ProviderStack({ providers }: { providers: Model["providers"] }) {
  const shown = providers.slice(0, 3);
  const rest = providers.length - shown.length;
  return (
    <span className="lp-prov-stack">
      {shown.map(p => <ProviderLogo key={p.id} logo={p.logo} name={p.name} />)}
      {rest > 0 && <span className="lp-prov-more">+{rest}</span>}
    </span>
  );
}

// ─── Topbar ───────────────────────────────────────────────────────────────────
function Topbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <header className="lp-topbar">
      <div className="lp-container lp-topbar-inner">
        <a href="https://llmperks.com/" className="lp-brand" aria-label="LLM Perks — Home" target="_blank" rel="noopener noreferrer">
          <BrandMark />
          <span>LLM Perks</span>
        </a>
        <nav className="lp-nav" aria-label="Menu">
          <a href="https://llmperks.com/" className="lp-nav-link active" target="_blank" rel="noopener noreferrer">
            Free APIs <span className="lp-nav-count">276</span>
          </a>
          <a href="https://llmperks.com/software" className="lp-nav-link" target="_blank" rel="noopener noreferrer">Free software</a>
          <a href="https://llmperks.com/credits" className="lp-nav-link" target="_blank" rel="noopener noreferrer">AI credits</a>
          <a href="https://llmperks.com/subscriptions" className="lp-nav-link" target="_blank" rel="noopener noreferrer">Subscription ROI</a>
          <a href="https://llmperks.com/infrastructure" className="lp-nav-link" target="_blank" rel="noopener noreferrer">Infrastructure</a>
          <a href="https://llmperks.com/blog" className="lp-nav-link" target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
        <div className="lp-topbar-end">
          <a
            href="/v5.html"
            className="lp-portal-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#ffffff",
              background: "linear-gradient(135deg, #059669 0%, #0284c7 100%)",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(5, 150, 105, 0.35)",
              transition: "transform 0.15s ease, opacity 0.15s ease",
            }}
            title="الانتقال إلى بوابة واجهات LLM المجانية الموحدة (v5.0)"
          >
            <span>بوابة واجهات LLM (عربي)</span>
            <span style={{ fontSize: "11px", background: "rgba(255,255,255,0.25)", padding: "1px 6px", borderRadius: "10px" }}>v5.0</span>
          </a>
          <a className="lp-tg-btn" href="https://t.me/freellms_bot" target="_blank" rel="noopener noreferrer" title="Telegram App">
            <TelegramIcon />
            <span>Telegram App</span>
          </a>
          <button className="lp-icon-btn" onClick={toggleTheme} aria-label="Toggle theme" type="button">
            {theme === "dark"
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
            }
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ query, onQuery }: { query: string; onQuery: (v: string) => void }) {
  const taskChips = [
    { label: "AI agents", href: "/for/ai-agents" },
    { label: "Coding", href: "/for/coding" },
    { label: "Reasoning", href: "/for/reasoning" },
    { label: "Long context", href: "/for/long-context" },
    { label: "Vision (image input)", href: "/for/vision" },
    { label: "Image generation", href: "/for/image" },
    { label: "Video generation", href: "/for/video" },
    { label: "Music and audio", href: "/for/music" },
    { label: "Frontier models", href: "/for/frontier" },
    { label: "Open-weight models", href: "/for/open-weights" },
  ];

  return (
    <section className="lp-hero">
      <div className="lp-container">
        <div className="lp-eyebrow">
          <span className="lp-dot-ok" />
          Live index · updated 3 h ago
        </div>
        <h1 className="lp-h1">Free LLM APIs</h1>
        <p className="lp-lead">
          A live catalog of free AI APIs for current DeepSeek, Qwen, Nemotron, Mistral, Llama, Gemini, and other models. Compare providers, context windows, and limits before connecting Cursor, VS Code, Cline, Open WebUI, or your own application.
        </p>
        <form className="lp-hero-search" onSubmit={e => e.preventDefault()}>
          <label className="lp-search" style={{ flex: "1 1 auto" }}>
            <span className="lp-search-icon"><SearchIcon size={18} /></span>
            <input
              type="search" placeholder="Try: DeepSeek, Qwen Coder, 1M context…"
              autoComplete="off" value={query}
              onChange={e => onQuery(e.target.value)}
            />
          </label>
          <button className="lp-btn lp-btn-primary" type="submit">Search</button>
        </form>
        <div className="lp-chips">
          {taskChips.map(c => (
            <a key={c.href} className="lp-chip" href={`https://llmperks.com${c.href}`} target="_blank" rel="noopener noreferrer">{c.label}</a>
          ))}
        </div>
        <div className="lp-stats">
          {STATS.map(s => (
            <div key={s.label} className="lp-stat">
              <div className="lp-stat-value">
                {s.value.includes("/")
                  ? <>{s.value.split("/")[0]}<small>/{s.value.split("/")[1]}</small></>
                  : s.value
                }
              </div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Best picks ────────────────────────────────────────────────────────────────
function BestPicks() {
  const pickModels = PICKS.map(p => {
    const m = MODELS.find(m => m.id === p.modelId);
    return m ? { ...m, pickLabel: p.label } : null;
  }).filter(Boolean) as (Model & { pickLabel: string })[];

  return (
    <section className="lp-container lp-section">
      <div className="lp-section-head">
        <div>
          <h2 className="lp-section-title">Best free models right now</h2>
          <p className="lp-section-sub">Auto-picked by benchmarks, size, and number of free providers.</p>
        </div>
      </div>
      <div className="lp-pick-grid">
        {pickModels.map(m => (
          <a key={m.id} className="lp-pick" href={`https://llmperks.com${m.href}`} target="_blank" rel="noopener noreferrer">
            <div className="lp-pick-label">{m.pickLabel}</div>
            <div className="lp-pick-model">
              <ModelLogo logo={m.logo} fallback={m.logoFallback} />
              <div style={{ flex: 1 }}>
                <div className="lp-pick-name">{m.name}</div>
                <div className="lp-pick-maker">{m.maker}</div>
              </div>
              <div className="lp-pick-score">
                <b>{m.aaIndex?.toFixed(1) ?? "—"}</b>
                <span>AA index</span>
              </div>
            </div>
            <div className="lp-pick-meta">
              <span className="lp-badge lp-badge-good">{m.providers.length} {m.providers.length === 1 ? "provider" : "providers"}</span>
              <span className="lp-badge">{fmtContext(m.context)} context</span>
              {m.open && <span className="lp-badge">Open weights</span>}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── New models ────────────────────────────────────────────────────────────────
function NewModels() {
  return (
    <section className="lp-container lp-section">
      <div className="lp-section-head">
        <div><h2 className="lp-section-title">New free models this week</h2></div>
        <a className="lp-link" href="https://llmperks.com/new" target="_blank" rel="noopener noreferrer">All new →</a>
      </div>
      <div className="lp-new-strip">
        {NEW_MODELS.map(m => (
          <a key={m.id} className="lp-new-item" href={`https://llmperks.com${m.href}`} target="_blank" rel="noopener noreferrer">
            <ModelLogo logo={m.logo} fallback={m.logoFallback} />
            <div><b>{m.name}</b><small>{m.provider}</small></div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Catalog table ────────────────────────────────────────────────────────────
type SortKey = "name" | "aaIndex" | "gpqa" | "context" | "tier" | "providers";
type SortDir = "asc" | "desc";

const TIER_ORDER: Record<Tier, number> = { TOP: 3, MID: 2, LITE: 1 };
const CAP_FILTER_OPTIONS = ["all", "kind:text", "cap:coding", "cap:reasoning", "cap:vision", "open", "kind:image", "kind:audio"] as const;
const CAP_FILTER_LABELS: Record<string, string> = {
  "all": "All", "kind:text": "Text", "cap:coding": "Coding",
  "cap:reasoning": "Reasoning", "cap:vision": "Vision",
  "open": "Open weights", "kind:image": "Images", "kind:audio": "Audio",
};
const TIER_FILTER_OPTIONS = ["all", "TOP", "MID", "LITE"] as const;
const TIER_FILTER_LABELS: Record<string, string> = { "all": "All", "TOP": "Frontier", "MID": "Mid-size", "LITE": "Small" };
const DEFAULT_SHOW = 25;

function CatalogTable({ query }: { query: string }) {
  const [capFilter, setCapFilter] = useState<string>("all");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [localQ, setLocalQ] = useState(query);
  const [sortKey, setSortKey] = useState<SortKey>("aaIndex");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => { setLocalQ(query); }, [query]);

  const handleSort = useCallback((key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("desc"); }
  }, [sortKey]);

  const filtered = useMemo(() => {
    let list = [...MODELS];
    const q = localQ.trim().toLowerCase();
    if (q) {
      list = list.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.maker.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.providers.some(p => p.name.toLowerCase().includes(q))
      );
    }
    if (capFilter !== "all") {
      if (capFilter === "open") list = list.filter(m => m.open);
      else if (capFilter.startsWith("cap:")) {
        const cap = capFilter.slice(4) as Cap;
        list = list.filter(m => m.caps.includes(cap));
      } else if (capFilter.startsWith("kind:")) {
        const kind = capFilter.slice(5) as Model["kind"];
        list = list.filter(m => m.kind === kind);
      }
    }
    if (tierFilter !== "all") {
      list = list.filter(m => m.tier === tierFilter);
    }
    list.sort((a, b) => {
      let va: number, vb: number;
      switch (sortKey) {
        case "name":      va = a.name.localeCompare(b.name); vb = 0; break;
        case "aaIndex":   va = a.aaIndex ?? -1; vb = b.aaIndex ?? -1; break;
        case "gpqa":      va = a.gpqa ?? -1; vb = b.gpqa ?? -1; break;
        case "context":   va = a.context; vb = b.context; break;
        case "tier":      va = TIER_ORDER[a.tier]; vb = TIER_ORDER[b.tier]; break;
        case "providers": va = a.providers.length; vb = b.providers.length; break;
        default:          va = 0; vb = 0;
      }
      if (sortKey === "name") return sortDir === "asc" ? va : -va;
      return sortDir === "asc" ? va - vb : vb - va;
    });
    return list;
  }, [localQ, capFilter, tierFilter, sortKey, sortDir]);

  const displayed = showAll ? filtered : filtered.slice(0, DEFAULT_SHOW);

  function SortTh({ colKey, label, className }: { colKey: SortKey; label: string; className?: string }) {
    const active = sortKey === colKey;
    return (
      <th className={`${active ? "sorted" : ""} ${className ?? ""}`} onClick={() => handleSort(colKey)}>
        {label} <span className="sort">{active ? (sortDir === "asc" ? "↑" : "↓") : "↕"}</span>
      </th>
    );
  }

  return (
    <section className="lp-container lp-section" id="catalog">
      <div className="lp-section-head">
        <div>
          <h2 className="lp-section-title">All free models</h2>
          <p className="lp-section-sub">One row per model; the model card lists every free provider, limits, and code examples.</p>
        </div>
      </div>
      <div className="lp-toolbar">
        <label className="lp-toolbar-search">
          <span className="lp-toolbar-search-icon"><SearchIcon size={16} /></span>
          <input
            type="search" placeholder="Search model, provider, ID…" autoComplete="off"
            value={localQ} onChange={e => setLocalQ(e.target.value)}
          />
        </label>
        <div className="lp-toolbar-group">
          {CAP_FILTER_OPTIONS.map(v => (
            <button key={v} type="button"
              className={`lp-toolbar-chip ${capFilter === v ? "active" : ""}`}
              onClick={() => setCapFilter(v)}>
              {CAP_FILTER_LABELS[v]}
            </button>
          ))}
        </div>
        <div className="lp-toolbar-group">
          <span className="lp-toolbar-label">Size</span>
          {TIER_FILTER_OPTIONS.map(v => (
            <button key={v} type="button"
              className={`lp-toolbar-chip ${tierFilter === v ? "active" : ""}`}
              onClick={() => setTierFilter(v)}>
              {TIER_FILTER_LABELS[v]}
            </button>
          ))}
        </div>
        <span className="lp-result-count">{filtered.length} found</span>
      </div>

      <div className="lp-table-wrap">
        <div className="lp-table-scroll">
          <table className="lp-table">
            <thead>
              <tr>
                <th className="lp-col-num">#</th>
                <SortTh colKey="name" label="Model" />
                <SortTh colKey="aaIndex" label="AA Index" />
                <SortTh colKey="gpqa" label="GPQA" className="lp-right" />
                <SortTh colKey="context" label="Context" className="lp-right" />
                <SortTh colKey="tier" label="Size" />
                <SortTh colKey="providers" label="Free at" />
                <th />
              </tr>
            </thead>
            <tbody>
              {displayed.map((m, i) => (
                <tr key={m.id}>
                  <td className="lp-col-num">{i + 1}</td>
                  <td className="lp-cell-main" data-label="Model">
                    <div className="lp-m-cell">
                      <ModelLogo logo={m.logo} fallback={m.logoFallback} />
                      <div>
                        <a className="lp-m-name" href={`https://llmperks.com${m.href}`} target="_blank" rel="noopener noreferrer">{m.name}</a>
                        <div className="lp-m-sub">{m.maker}</div>
                        <Caps caps={m.caps} />
                      </div>
                    </div>
                  </td>
                  <td data-label="AA Index">
                    {m.aaIndex !== null
                      ? <ScoreBar value={m.aaIndex} />
                      : <span className="lp-na">—</span>}
                  </td>
                  <td className="lp-right lp-nowrap" data-label="GPQA">
                    {m.gpqa !== null ? `${Math.round(m.gpqa)}%` : <span className="lp-na">—</span>}
                  </td>
                  <td className="lp-right lp-nowrap" data-label="Context">{fmtContext(m.context)}</td>
                  <td data-label="Size"><TierBar tier={m.tier} /></td>
                  <td data-label="Free at"><ProviderStack providers={m.providers} /></td>
                  <td className="lp-cell-go">
                    <a className="lp-row-go" href={`https://llmperks.com${m.href}`} target="_blank" rel="noopener noreferrer" aria-label={m.name}>
                      <ArrowIcon />
                    </a>
                  </td>
                </tr>
              ))}
              {displayed.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ padding: "34px 20px", textAlign: "center", color: "var(--text-muted)" }}>
                    No models match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {!showAll && filtered.length > DEFAULT_SHOW && (
          <div className="lp-show-more">
            <button className="lp-show-more-btn" type="button" onClick={() => setShowAll(true)}>
              Show {filtered.length - DEFAULT_SHOW} more models
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: "Free APIs", links: [
      { label: "All free models", href: "/" },
      { label: "Frontier models", href: "/for/frontier" },
      { label: "Open-weight models", href: "/for/open-weights" },
      { label: "New models", href: "/new" },
      { label: "By provider", href: "/providers" },
    ]},
    { title: "Free software", links: [
      { label: "AI coding agents", href: "/software/agents" },
      { label: "AI code editors", href: "/software/ide" },
      { label: "Chat interfaces", href: "/software/chat-ui" },
      { label: "Local LLM runners", href: "/software/local-llm" },
      { label: "All free software", href: "/software" },
    ]},
    { title: "AI credits", links: [
      { label: "All AI credits", href: "/credits" },
      { label: "Signup credits", href: "/credits/signup" },
      { label: "Startup grants", href: "/credits/startup" },
      { label: "Student plans", href: "/credits/student" },
      { label: "No card required", href: "/credits/no-card" },
    ]},
    { title: "More", links: [
      { label: "Subscription ROI", href: "/subscriptions" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ]},
  ];

  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer-grid">
          <div>
            <a href="https://llmperks.com/" className="lp-brand" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", marginBottom: 0 }}>
              <BrandMark />
              <span>LLM Perks</span>
            </a>
            <p className="lp-footer-about">
              A live catalog of free AI APIs, software, and credits — refreshed every 4 hours. Track which models go free and where.
            </p>
            <a className="lp-footer-tg" href="https://t.me/freellms_bot" target="_blank" rel="noopener noreferrer">
              <span className="lp-footer-tg-icon"><TelegramIcon /></span>
              Telegram App
            </a>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div className="lp-footer-title">{col.title}</div>
              {col.links.map(l => (
                <a key={l.href} className="lp-footer-link" href={`https://llmperks.com${l.href}`} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="lp-footer-legal">
          <p>© 2026 LLM Perks. Data updated every 4 hours from provider APIs.</p>
          <p>This is a faithful recreation of <a href="https://llmperks.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>llmperks.com</a> built with the <a href="https://github.com/JCodesMore/ai-website-cloner-template" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>ai-website-cloner-template</a>. All data and original design belong to LLM Perks.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function LLMPerksPage() {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");

  const toggleTheme = useCallback(() => {
    setTheme(t => t === "light" ? "dark" : "light");
  }, []);

  return (
    <div className="lp" data-lp-theme={theme}>
      <Topbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero query={query} onQuery={setQuery} />
        <BestPicks />
        <NewModels />
        <CatalogTable query={query} />
      </main>
      <Footer />
    </div>
  );
}
