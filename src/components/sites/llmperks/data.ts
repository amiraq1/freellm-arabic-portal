export type Cap = "reasoning" | "coding" | "tools" | "vision" | "long" | "open";
export type Tier = "TOP" | "MID" | "LITE";

export interface Model {
  id: string;
  name: string;
  maker: string;
  logo: string | null;
  logoFallback?: string;
  aaIndex: number | null;
  gpqa: number | null;
  context: number; // tokens
  tier: Tier;
  caps: Cap[];
  providers: Provider[];
  href: string;
  isNew?: boolean;
  kind: "text" | "image" | "audio";
  open?: boolean;
}

export interface Provider {
  id: string;
  name: string;
  logo: string;
}

export interface Pick {
  label: string;
  modelId: string;
}

export interface NewModel {
  id: string;
  name: string;
  logo: string | null;
  logoFallback?: string;
  provider: string;
  href: string;
}

// ── Providers ────────────────────────────────────────────────────────────────

export const PROVIDERS: Record<string, Provider> = {
  gemini:      { id: "gemini",      name: "Google AI Studio",         logo: "https://llmperks.com/assets/logos/gemini.svg" },
  groq:        { id: "groq",        name: "Groq",                     logo: "https://llmperks.com/assets/logos/provider-groq.png" },
  openrouter:  { id: "openrouter",  name: "OpenRouter",               logo: "https://llmperks.com/assets/logos/provider-openrouter.png" },
  together:    { id: "together",    name: "Together AI",              logo: "https://llmperks.com/assets/logos/provider-together.png" },
  cloudflare:  { id: "cloudflare",  name: "Cloudflare Workers AI",    logo: "https://llmperks.com/assets/logos/provider-cloudflare.png" },
  nvidia:      { id: "nvidia",      name: "NVIDIA Build",             logo: "https://llmperks.com/assets/logos/provider-nvidia.png" },
  orcarouter:  { id: "orcarouter",  name: "OrcaRouter",               logo: "https://llmperks.com/assets/logos/provider-orcarouter.png" },
  unorouter:   { id: "unorouter",   name: "UnoRouter",                logo: "https://llmperks.com/assets/logos/provider-unorouter.png" },
  nous:        { id: "nous",        name: "Nous Portal",              logo: "https://llmperks.com/assets/logos/provider-nous.png" },
  huggingface: { id: "huggingface", name: "Hugging Face",             logo: "https://llmperks.com/assets/logos/provider-huggingface.png" },
  opencode:    { id: "opencode",    name: "OpenCode Zen",             logo: "https://llmperks.com/assets/logos/opencode.svg" },
  cerebras:    { id: "cerebras",    name: "Cerebras",                 logo: "https://llmperks.com/assets/logos/provider-cerebras.png" },
  mistral:     { id: "mistral",     name: "Mistral",                  logo: "https://llmperks.com/assets/logos/mistral.svg" },
  cohere:      { id: "cohere",      name: "Cohere",                   logo: "https://llmperks.com/assets/logos/cohere.svg" },
};

// ── Models (top 25 from source) ───────────────────────────────────────────────

export const MODELS: Model[] = [
  {
    id: "glm-5-3-flash", name: "GLM 5.3 Flash", maker: "Z.ai (Zhipu AI)",
    logo: "https://llmperks.com/assets/logos/zhipu.svg",
    aaIndex: 41.8, gpqa: 91.2, context: 1_000_000, tier: "MID",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.orcarouter, PROVIDERS.nvidia, PROVIDERS.unorouter, PROVIDERS.opencode],
    href: "/glm/glm-5-3-flash", kind: "text",
  },
  {
    id: "glm-5-3", name: "GLM 5.3", maker: "Z.ai (Zhipu AI)",
    logo: "https://llmperks.com/assets/logos/zhipu.svg",
    aaIndex: 44.8, gpqa: 91.7, context: 1_048_576, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.together],
    href: "/glm/glm-5-3", kind: "text",
  },
  {
    id: "deepseek-v4-1-flash", name: "DeepSeek V4.1 Flash", maker: "DeepSeek",
    logo: "https://llmperks.com/assets/logos/deepseek.png",
    aaIndex: 39.5, gpqa: null, context: 1_000_000, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.orcarouter, PROVIDERS.nvidia, PROVIDERS.unorouter, PROVIDERS.opencode],
    href: "/deepseek/deepseek-v4-1-flash", kind: "text",
  },
  {
    id: "step-5-preview", name: "Step 5 Preview", maker: "StepFun",
    logo: "https://llmperks.com/assets/logos/stepfun.svg",
    aaIndex: 43.7, gpqa: null, context: 1_000_000, tier: "TOP",
    caps: ["tools"],
    providers: [PROVIDERS.nvidia],
    href: "/step/step-5-preview", kind: "text",
  },
  {
    id: "glm-5-3-flash-thinking", name: "GLM 5.3 Flash Thinking", maker: "Z.ai (Zhipu AI)",
    logo: "https://llmperks.com/assets/logos/zhipu.svg",
    aaIndex: 41.8, gpqa: 91.2, context: 1_000_000, tier: "MID",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.unorouter],
    href: "/glm/glm-5-3-flash-thinking", kind: "text",
  },
  {
    id: "gemini-3-8-flash", name: "Gemini 3.8 Flash", maker: "Google",
    logo: "https://llmperks.com/assets/logos/gemini.svg",
    aaIndex: 40.9, gpqa: 95.3, context: 1_048_576, tier: "MID",
    caps: ["vision", "reasoning", "coding", "tools"],
    providers: [PROVIDERS.gemini],
    href: "/gemini/gemini-3-8-flash", kind: "text",
  },
  {
    id: "qwen3-8-27b", name: "Qwen 3.8 27B", maker: "Alibaba Cloud",
    logo: "https://llmperks.com/assets/logos/qwen.svg",
    aaIndex: 33.7, gpqa: 90.5, context: 262_144, tier: "MID",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.groq, PROVIDERS.cloudflare, PROVIDERS.unorouter],
    href: "/qwen/qwen3-8-27b", kind: "text",
  },
  {
    id: "deepseek-v4-flash", name: "DeepSeek V4 Flash", maker: "DeepSeek",
    logo: "https://llmperks.com/assets/logos/deepseek.png",
    aaIndex: 34.3, gpqa: 90.8, context: 1_000_000, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.orcarouter],
    href: "/deepseek/deepseek-v4-flash", kind: "text",
  },
  {
    id: "gemini-3-6-flash", name: "Gemini 3.6 Flash", maker: "Google",
    logo: "https://llmperks.com/assets/logos/gemini.svg",
    aaIndex: 34.0, gpqa: 92.8, context: 1_000_000, tier: "MID",
    caps: ["vision", "reasoning", "coding", "tools"],
    providers: [PROVIDERS.unorouter],
    href: "/gemini/gemini-3-6-flash", kind: "text",
  },
  {
    id: "glm-5-2", name: "GLM 5.2", maker: "Z.ai (Zhipu AI)",
    logo: "https://llmperks.com/assets/logos/zhipu.svg",
    aaIndex: 33.7, gpqa: 89.5, context: 1_048_576, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.together],
    href: "/glm/glm-5-2", kind: "text",
  },
  {
    id: "minimax-m3", name: "MiniMax M3", maker: "MiniMax",
    logo: "https://llmperks.com/assets/logos/minimax.svg",
    aaIndex: 29.2, gpqa: 92.9, context: 1_000_000, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.unorouter],
    href: "/minimax/minimax-m3", kind: "text",
  },
  {
    id: "inkling-small", name: "Inkling Small", maker: "Thinking Machines Lab",
    logo: null, logoFallback: "I",
    aaIndex: 27.8, gpqa: 89.5, context: 1_048_576, tier: "LITE",
    caps: ["reasoning", "open"], open: true,
    providers: [PROVIDERS.openrouter],
    href: "/inkling/inkling-small", kind: "text",
  },
  {
    id: "kimi-k2-6", name: "Kimi K2.6", maker: "Moonshot AI",
    logo: "https://llmperks.com/assets/logos/kimi.svg",
    aaIndex: 27.0, gpqa: 91.1, context: 256_000, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.nvidia],
    href: "/kimi/kimi-k2-6", kind: "text",
  },
  {
    id: "nemotron-3-ultra", name: "Nemotron 3 Ultra", maker: "NVIDIA",
    logo: "https://llmperks.com/assets/logos/nemotron.svg",
    aaIndex: 22.9, gpqa: 86.7, context: 1_048_576, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.openrouter, PROVIDERS.nvidia, PROVIDERS.unorouter],
    href: "/nemotron/nemotron-3-ultra", kind: "text",
  },
  {
    id: "inkling", name: "Inkling", maker: "Thinking Machines Lab",
    logo: null, logoFallback: "I",
    aaIndex: 25.0, gpqa: 87.2, context: 1_048_576, tier: "LITE",
    caps: ["reasoning", "open"], open: true,
    providers: [PROVIDERS.openrouter],
    href: "/inkling/inkling", kind: "text",
  },
  {
    id: "hy3", name: "Hy3", maker: "Tencent",
    logo: null, logoFallback: "H",
    aaIndex: 25.3, gpqa: 89.7, context: 256_000, tier: "LITE",
    caps: ["open"], open: true,
    providers: [PROVIDERS.orcarouter],
    href: "/hunyuan/hy3", kind: "text",
  },
  {
    id: "gemma-4-31b", name: "Gemma 4 31B", maker: "Google DeepMind",
    logo: "https://llmperks.com/assets/logos/gemma.svg",
    aaIndex: 19.0, gpqa: 85.7, context: 262_144, tier: "MID",
    caps: ["vision", "tools", "open"], open: true,
    providers: [PROVIDERS.openrouter, PROVIDERS.together, PROVIDERS.nvidia, PROVIDERS.unorouter],
    href: "/gemma/gemma-4-31b", kind: "text",
  },
  {
    id: "gemini-3-5-flash-lite", name: "Gemini 3.5 Flash Lite", maker: "Google",
    logo: "https://llmperks.com/assets/logos/gemini.svg",
    aaIndex: 22.2, gpqa: 83.8, context: 1_000_000, tier: "LITE",
    caps: ["vision", "reasoning", "coding"],
    providers: [PROVIDERS.unorouter],
    href: "/gemini/gemini-3-5-flash-lite", kind: "text",
  },
  {
    id: "minimax-m2-5", name: "MiniMax M2.5", maker: "MiniMax",
    logo: "https://llmperks.com/assets/logos/minimax.svg",
    aaIndex: 22.8, gpqa: 84.8, context: 204_800, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.unorouter],
    href: "/minimax/minimax-m2-5", kind: "text",
  },
  {
    id: "qwen3-5-397b", name: "Qwen 3.5 397B", maker: "Alibaba Cloud",
    logo: "https://llmperks.com/assets/logos/qwen.svg",
    aaIndex: 21.4, gpqa: 86.1, context: 262_100, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.unorouter],
    href: "/qwen/qwen3-5-397b", kind: "text",
  },
  {
    id: "qwen3-6-27b", name: "Qwen 3.6 27B", maker: "Alibaba Cloud",
    logo: "https://llmperks.com/assets/logos/qwen.svg",
    aaIndex: 21.4, gpqa: 84.2, context: 262_100, tier: "MID",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.unorouter],
    href: "/qwen/qwen3-6-27b", kind: "text",
  },
  {
    id: "gemma-4-26b", name: "Gemma 4 26B A4B", maker: "Google DeepMind",
    logo: "https://llmperks.com/assets/logos/gemma.svg",
    aaIndex: 16.7, gpqa: 79.2, context: 262_144, tier: "MID",
    caps: ["vision", "tools", "open"], open: true,
    providers: [PROVIDERS.openrouter, PROVIDERS.together, PROVIDERS.cloudflare, PROVIDERS.unorouter],
    href: "/gemma/gemma-4-26b", kind: "text",
  },
  {
    id: "glm-4-7", name: "GLM 4.7", maker: "Z.ai (Zhipu AI)",
    logo: "https://llmperks.com/assets/logos/zhipu.svg",
    aaIndex: 22.2, gpqa: 85.9, context: 202_752, tier: "TOP",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.together],
    href: "/glm/glm-4-7", kind: "text",
  },
  {
    id: "qwen3-6-35b", name: "Qwen 3.6 35B", maker: "Alibaba Cloud",
    logo: "https://llmperks.com/assets/logos/qwen.svg",
    aaIndex: 18.2, gpqa: 84.1, context: 262_144, tier: "MID",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.together, PROVIDERS.unorouter],
    href: "/qwen/qwen3-6-35b", kind: "text",
  },
  {
    id: "step-3-7-flash", name: "Step 3.7 Flash", maker: "StepFun",
    logo: "https://llmperks.com/assets/logos/stepfun.svg",
    aaIndex: 19.5, gpqa: 80.9, context: 262_144, tier: "TOP",
    caps: ["reasoning", "tools", "open"], open: true,
    providers: [PROVIDERS.nous],
    href: "/step/step-3-7-flash", kind: "text",
  },
  {
    id: "qwen3-5-35b", name: "Qwen 3.5 35B", maker: "Alibaba Cloud",
    logo: "https://llmperks.com/assets/logos/qwen.svg",
    aaIndex: 18.2, gpqa: 84.1, context: 262_144, tier: "MID",
    caps: ["reasoning", "coding", "tools", "open"], open: true,
    providers: [PROVIDERS.together],
    href: "/qwen/qwen3-5-35b", kind: "text",
  },
];

// ── Best picks ────────────────────────────────────────────────────────────────

export const PICKS: Pick[] = [
  { label: "Best overall",    modelId: "glm-5-3" },
  { label: "Best for coding", modelId: "glm-5-3-flash" },
  { label: "Best for agents", modelId: "deepseek-v4-1-flash" },
  { label: "Longest context", modelId: "llama-4-scout" },
  { label: "Best with vision",modelId: "gemini-3-8-flash" },
  { label: "Fast and capable",modelId: "deepseek-v4-flash" },
];

// ── New models this week ──────────────────────────────────────────────────────

export const NEW_MODELS: NewModel[] = [
  { id: "qwen2-5-vl-72b",             name: "Qwen2.5 VL 72B",               logo: "https://llmperks.com/assets/logos/qwen.svg",    provider: "UnoRouter",    href: "/qwen/qwen2-5-vl-72b" },
  { id: "mistral-small-4-119b",       name: "Mistral Small 4 119B",         logo: "https://llmperks.com/assets/logos/mistral.svg", provider: "UnoRouter",    href: "/mistral/mistral-small-4-119b" },
  { id: "bielik-11b-v3-0",            name: "Bielik 11B V3.0 Instruct",     logo: null, logoFallback: "B",                          provider: "UnoRouter",    href: "/models/bielik-11b-v3-0" },
  { id: "pllum-12b",                  name: "Pllum 12B Instruct",           logo: null, logoFallback: "P",                          provider: "UnoRouter",    href: "/models/pllum-12b" },
  { id: "deepseek-r1-distill-70b",    name: "DeepSeek R1 Distill Llama 70B",logo: "https://llmperks.com/assets/logos/deepseek.png",provider: "UnoRouter",    href: "/deepseek/deepseek-r1-distill-llama-70b" },
  { id: "mistral-large-4-1t-a52b",   name: "Mistral Large 4 1t A52B",      logo: "https://llmperks.com/assets/logos/mistral.svg", provider: "NVIDIA Build", href: "/mistral/mistral-large-4-1t-a52b" },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

export const STATS = [
  { value: "276",       label: "free models" },
  { value: "368",       label: "free endpoints" },
  { value: "16/16",     label: "providers online" },
  { value: "17",        label: "new in 7 days" },
];

export function fmtContext(tokens: number): string {
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(tokens % 1_000_000 === 0 ? 0 : 1)}M`;
  if (tokens >= 1_000) return `${Math.round(tokens / 1_000)}K`;
  return String(tokens);
}
