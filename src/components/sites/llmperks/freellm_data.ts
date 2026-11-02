// Extracted dataset from https://freellm.net
export interface FreeLLMModel {
  id: string;
  name: string;
  provider: {
    id: string;
    name: string;
  };
  verified: boolean;
  score: number | null;
  context: string;
  modalities: string[];
  rateLimit: string;
  released: string;
  weeklyTokens: string;
  status: string;
  url: string;
}

export interface FreeLLMProvider {
  id: string;
  name: string;
  url: string;
}

export interface FreeLLMDataset {
  source: string;
  extractedAt: string;
  stats: {
    totalTracked: number;
    freeAndOnline: number;
    providersCount: number;
    noCreditCard: number;
  };
  providers: FreeLLMProvider[];
  models: FreeLLMModel[];
}

export const FREELLM_DATA: FreeLLMDataset = {
  "source": "https://freellm.net",
  "extractedAt": "2026-11-02T14:52:36.086Z",
  "stats": {
    "totalTracked": 535,
    "freeAndOnline": 296,
    "providersCount": 22,
    "noCreditCard": 454
  },
  "providers": [
    {
      "id": "nvidia-nim",
      "name": "NVIDIA NIM",
      "url": "https://freellm.net/providers/nvidia-nim"
    },
    {
      "id": "ollama-cloud",
      "name": "Ollama Cloud",
      "url": "https://freellm.net/providers/ollama-cloud"
    },
    {
      "id": "gonka-broker",
      "name": "Gonka Broker",
      "url": "https://freellm.net/providers/gonka-broker"
    },
    {
      "id": "google-gemini",
      "name": "Google Gemini",
      "url": "https://freellm.net/providers/google-gemini"
    },
    {
      "id": "ovhcloud-ai-endpoints",
      "name": "OVHcloud AI Endpoints",
      "url": "https://freellm.net/providers/ovhcloud-ai-endpoints"
    },
    {
      "id": "opencode",
      "name": "OpenCode Zen",
      "url": "https://freellm.net/providers/opencode"
    },
    {
      "id": "agnes-ai",
      "name": "Agnes AI",
      "url": "https://freellm.net/providers/agnes-ai"
    },
    {
      "id": "modelscope",
      "name": "ModelScope",
      "url": "https://freellm.net/providers/modelscope"
    },
    {
      "id": "llm7-io",
      "name": "LLM7.io",
      "url": "https://freellm.net/providers/llm7-io"
    },
    {
      "id": "cloudflare-workers-ai",
      "name": "Cloudflare Workers AI",
      "url": "https://freellm.net/providers/cloudflare-workers-ai"
    },
    {
      "id": "openrouter",
      "name": "OpenRouter",
      "url": "https://freellm.net/providers/openrouter"
    },
    {
      "id": "kilo-code",
      "name": "Kilo Code",
      "url": "https://freellm.net/providers/kilo-code"
    },
    {
      "id": "z-ai-zhipu-ai",
      "name": "Z AI (Zhipu AI)",
      "url": "https://freellm.net/providers/z-ai-zhipu-ai"
    },
    {
      "id": "cline",
      "name": "Cline",
      "url": "https://freellm.net/providers/cline"
    },
    {
      "id": "mistral-ai",
      "name": "Mistral AI",
      "url": "https://freellm.net/providers/mistral-ai"
    },
    {
      "id": "cohere",
      "name": "Cohere",
      "url": "https://freellm.net/providers/cohere"
    },
    {
      "id": "siliconflow",
      "name": "SiliconFlow",
      "url": "https://freellm.net/providers/siliconflow"
    },
    {
      "id": "aion-labs",
      "name": "Aion Labs",
      "url": "https://freellm.net/providers/aion-labs"
    },
    {
      "id": "chutes-ai",
      "name": "Chutes.ai",
      "url": "https://freellm.net/providers/chutes-ai"
    },
    {
      "id": "glhf-chat",
      "name": "Glhf.chat",
      "url": "https://freellm.net/providers/glhf-chat"
    },
    {
      "id": "groq",
      "name": "Groq",
      "url": "https://freellm.net/providers/groq"
    },
    {
      "id": "grok-xai",
      "name": "Grok (xAI)",
      "url": "https://freellm.net/providers/grok-xai"
    }
  ],
  "models": [
    {
      "id": "nvidia-nim/z-ai-glm-5-3-flash",
      "name": "z-ai/glm-5.3-flash",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 93,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Aug 26, 2026",
      "weeklyTokens": "15.0B",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/z-ai-glm-5-3-flash"
    },
    {
      "id": "nvidia-nim/deepseek-ai-deepseek-v4-1-flash",
      "name": "deepseek-ai/deepseek-v4.1-flash",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 89,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Oct 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/deepseek-ai-deepseek-v4-1-flash"
    },
    {
      "id": "ollama-cloud/deepseek-v4-pro",
      "name": "deepseek-v4-pro",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 89,
      "context": "1.0M",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "Session/weekly limits (unpublished)",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/deepseek-v4-pro"
    },
    {
      "id": "gonka-broker/zai-org-glm-5-3-flash",
      "name": "zai-org/GLM-5.3-Flash",
      "provider": {
        "id": "gonka-broker",
        "name": "Gonka Broker"
      },
      "verified": false,
      "score": 88,
      "context": "400K",
      "modalities": [
        "text",
        "image",
        "video",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "~1M tokens/month (shared, varies by model)",
      "released": "Aug 26, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/gonka-broker/zai-org-glm-5-3-flash"
    },
    {
      "id": "nvidia-nim/minimaxai-minimax-m3-1-flash",
      "name": "minimaxai/minimax-m3.1-flash",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 87,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Oct 19, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/minimaxai-minimax-m3-1-flash"
    },
    {
      "id": "google-gemini/gemini-3-8-flash",
      "name": "Gemini 3.8 Flash",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 87,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "Sep 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-3-8-flash"
    },
    {
      "id": "nvidia-nim/stepfun-ai-step-5-preview",
      "name": "stepfun-ai/step-5-preview",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 87,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Sep 18, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/stepfun-ai-step-5-preview"
    },
    {
      "id": "ovhcloud-ai-endpoints/qwen3-8-27b",
      "name": "Qwen3.8-27B",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": false,
      "score": 86,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Aug 14, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/qwen3-8-27b"
    },
    {
      "id": "opencode/qwen3-8-max",
      "name": "Qwen3.8 Max",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 85,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Sep 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/qwen3-8-max"
    },
    {
      "id": "opencode/glm-5-3",
      "name": "GLM-5.3",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 84,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Aug 18, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/glm-5-3"
    },
    {
      "id": "google-gemini/gemini-3-7-flash",
      "name": "Gemini 3.7 Flash",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 84,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-3-7-flash"
    },
    {
      "id": "agnes-ai/agnes-2-0-flash",
      "name": "agnes-2.0-flash",
      "provider": {
        "id": "agnes-ai",
        "name": "Agnes AI"
      },
      "verified": true,
      "score": 84,
      "context": "256K",
      "modalities": [
        "text",
        "image",
        "reasoning",
        "vision"
      ],
      "rateLimit": "30 RPM",
      "released": "May 25, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/agnes-ai/agnes-2-0-flash"
    },
    {
      "id": "modelscope/qwen-qwen3-8-flash-next",
      "name": "Qwen/Qwen3.8-Flash-Next",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 83,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 26, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/qwen-qwen3-8-flash-next"
    },
    {
      "id": "opencode/glm-5-3-flash",
      "name": "GLM-5.3-Flash",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 83,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Aug 26, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/glm-5-3-flash"
    },
    {
      "id": "llm7-io/deepseek-v4-pro",
      "name": "DeepSeek V4 Pro",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 82,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/deepseek-v4-pro"
    },
    {
      "id": "opencode/kimi-k3",
      "name": "Kimi K3",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 81,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Jul 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/kimi-k3"
    },
    {
      "id": "gonka-broker/deepseek-ai-deepseek-v4-flash-0731",
      "name": "deepseek-ai/DeepSeek-V4-Flash-0731",
      "provider": {
        "id": "gonka-broker",
        "name": "Gonka Broker"
      },
      "verified": false,
      "score": 81,
      "context": "400K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "~1M tokens/month (shared, varies by model)",
      "released": "Jul 31, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/gonka-broker/deepseek-ai-deepseek-v4-flash-0731"
    },
    {
      "id": "cloudflare-workers-ai/cf-deepseek-ai-deepseek-v4-1-flash-1017",
      "name": "@cf/deepseek-ai/deepseek-v4.1-flash-1017",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 80,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-deepseek-ai-deepseek-v4-1-flash-1017"
    },
    {
      "id": "opencode/deepseek-v4-1-flash",
      "name": "DeepSeek V4.1 Flash",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 80,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Oct 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/deepseek-v4-1-flash"
    },
    {
      "id": "modelscope/deepseek-ai-deepseek-v4-1-flash",
      "name": "deepseek-ai/DeepSeek-V4.1-Flash",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 79,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/deepseek-ai-deepseek-v4-1-flash"
    },
    {
      "id": "openrouter/thinkingmachines-inkling-small",
      "name": "Thinking Machines: Inkling Small (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 79,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "audio",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Jul 30, 2026",
      "weeklyTokens": "180.9B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/thinkingmachines-inkling-small"
    },
    {
      "id": "openrouter/nvidia-nemotron-3-5-super-vl",
      "name": "NVIDIA: Nemotron 3.5 Super VL (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 79,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Oct 15, 2026",
      "weeklyTokens": "1.3T",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/nvidia-nemotron-3-5-super-vl"
    },
    {
      "id": "cloudflare-workers-ai/cf-qwen-qwen3-8-27b",
      "name": "@cf/qwen/qwen3.8-27b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 79,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 14, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-qwen-qwen3-8-27b"
    },
    {
      "id": "cloudflare-workers-ai/cf-deepseek-ai-deepseek-v4-pro-0813",
      "name": "@cf/deepseek-ai/deepseek-v4-pro-0813",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 78,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-deepseek-ai-deepseek-v4-pro-0813"
    },
    {
      "id": "opencode/deepseek-v4-pro",
      "name": "DeepSeek V4 Pro",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 78,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/deepseek-v4-pro"
    },
    {
      "id": "modelscope/qwen-qwen3-8-27b",
      "name": "Qwen/Qwen3.8-27B",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 78,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 14, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/qwen-qwen3-8-27b"
    },
    {
      "id": "kilo-code/nvidia-nemotron-3-5-super-vl-free",
      "name": "nvidia/nemotron-3.5-super-vl:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 78,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Oct 15, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/nvidia-nemotron-3-5-super-vl-free"
    },
    {
      "id": "google-gemini/gemini-3-6-flash",
      "name": "Gemini 3.6 Flash",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 78,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "Jul 21, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-3-6-flash"
    },
    {
      "id": "modelscope/deepseek-ai-deepseek-v4-pro",
      "name": "deepseek-ai/DeepSeek-V4-Pro",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 78,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/deepseek-ai-deepseek-v4-pro"
    },
    {
      "id": "modelscope/deepseek-ai-deepseek-v4-pro-0813",
      "name": "deepseek-ai/DeepSeek-V4-Pro-0813",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 78,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/deepseek-ai-deepseek-v4-pro-0813"
    },
    {
      "id": "openrouter/thinkingmachines-inkling",
      "name": "Thinking Machines: Inkling (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 77,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "audio",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Jul 15, 2026",
      "weeklyTokens": "180.9B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/thinkingmachines-inkling"
    },
    {
      "id": "cloudflare-workers-ai/cf-deepseek-ai-deepseek-v4-flash-0731",
      "name": "@cf/deepseek-ai/deepseek-v4-flash-0731",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 77,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 31, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-deepseek-ai-deepseek-v4-flash-0731"
    },
    {
      "id": "opencode/deepseek-v4-flash",
      "name": "DeepSeek V4 Flash",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 77,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jul 31, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/deepseek-v4-flash"
    },
    {
      "id": "modelscope/deepseek-ai-deepseek-v4-flash",
      "name": "deepseek-ai/DeepSeek-V4-Flash",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 76,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 31, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/deepseek-ai-deepseek-v4-flash"
    },
    {
      "id": "llm7-io/glm-5-2",
      "name": "GLM-5.2",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 76,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jun 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/glm-5-2"
    },
    {
      "id": "ollama-cloud/minimax-m3",
      "name": "minimax-m3",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 76,
      "context": "512K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "Session/weekly limits (unpublished)",
      "released": "Jun 1, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/minimax-m3"
    },
    {
      "id": "modelscope/zhipuai-glm-5-2",
      "name": "GLM-5.1",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 75,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jun 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/zhipuai-glm-5-2"
    },
    {
      "id": "opencode/mistral-large-4",
      "name": "Mistral Large 4",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 75,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Oct 6, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/mistral-large-4"
    },
    {
      "id": "opencode/glm-5-2",
      "name": "GLM-5.2",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 72,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jun 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/glm-5-2"
    },
    {
      "id": "openrouter/nvidia-nemotron-3-ultra-550b-a55b",
      "name": "NVIDIA: Nemotron 3 Ultra (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 72,
      "context": "1.0M",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Jun 4, 2026",
      "weeklyTokens": "5.5T",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/nvidia-nemotron-3-ultra-550b-a55b"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-5-super-vl-120b-a12b",
      "name": "Nemotron 3.5 Super VL 120B A12B",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 72,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Oct 15, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-5-super-vl-120b-a12b"
    },
    {
      "id": "google-gemini/gemini-3-5-flash",
      "name": "Gemini 3.5 Flash",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 72,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "15 RPM, 1,500 RPD",
      "released": "May 19, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-3-5-flash"
    },
    {
      "id": "kilo-code/nvidia-nemotron-3-ultra-550b-a55b-free",
      "name": "nvidia/nemotron-3-ultra-550b-a55b:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 71,
      "context": "1.0M",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Jun 4, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/nvidia-nemotron-3-ultra-550b-a55b-free"
    },
    {
      "id": "openrouter/recursive-flint-v1-0",
      "name": "Recursive: Flint (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 70,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Oct 21, 2026",
      "weeklyTokens": "170.6B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/recursive-flint-v1-0"
    },
    {
      "id": "openrouter/xingchen-agi-xing4-0-29b-a4b",
      "name": "XingChen: Xing4.0 29B A4B (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 70,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Oct 16, 2026",
      "weeklyTokens": "64.2B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/xingchen-agi-xing4-0-29b-a4b"
    },
    {
      "id": "nvidia-nim/moonshotai-kimi-k2-6",
      "name": "moonshotai/kimi-k2.6",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 69,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Apr 20, 2026",
      "weeklyTokens": "2.0B",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/moonshotai-kimi-k2-6"
    },
    {
      "id": "llm7-io/minimax-m3",
      "name": "MiniMax-M3",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 69,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Jun 1, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/minimax-m3"
    },
    {
      "id": "kilo-code/recursive-flint-v1-0-free",
      "name": "recursive/flint-v1.0:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 69,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Oct 21, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/recursive-flint-v1-0-free"
    },
    {
      "id": "kilo-code/xingchen-agi-xing4-0-29b-a4b-free",
      "name": "xingchen-agi/xing4.0-29b-a4b:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 69,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Oct 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/xingchen-agi-xing4-0-29b-a4b-free"
    },
    {
      "id": "google-gemini/gemini-3-5-flash-lite",
      "name": "Gemini 3.5 Flash-Lite",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 67,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "Jul 21, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-3-5-flash-lite"
    },
    {
      "id": "openrouter/dots-studio-dots-3-note-preview",
      "name": "Dots Studio: Dots3-Note Preview (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 67,
      "context": "512K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Aug 14, 2026",
      "weeklyTokens": "611.2B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/dots-studio-dots-3-note-preview"
    },
    {
      "id": "openrouter/nvidia-nemotron-3-5-lightning",
      "name": "NVIDIA: Nemotron 3.5 Lightning (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 66,
      "context": "1.0M",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Aug 11, 2026",
      "weeklyTokens": "959.6B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/nvidia-nemotron-3-5-lightning"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-ultra-550b-a55b",
      "name": "Nemotron 3 Ultra 550B A55B",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 66,
      "context": "1.0M",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jun 4, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-ultra-550b-a55b"
    },
    {
      "id": "nvidia-nim/meta-muse-glimmer-30b",
      "name": "Muse Glimmer 30B",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 66,
      "context": "131K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Aug 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/meta-muse-glimmer-30b"
    },
    {
      "id": "ollama-cloud/nemotron-3-ultra",
      "name": "nemotron-3-ultra",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 66,
      "context": "256K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "1 concurrent request, monthly starter credits",
      "released": "Jun 4, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/nemotron-3-ultra"
    },
    {
      "id": "opencode/minimax-m3",
      "name": "MiniMax-M3",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 65,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Jun 1, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/minimax-m3"
    },
    {
      "id": "kilo-code/dots-studio-dots-3-note-preview-free",
      "name": "dots-studio/dots-3-note-preview:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 65,
      "context": "512K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Aug 14, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/dots-studio-dots-3-note-preview-free"
    },
    {
      "id": "ovhcloud-ai-endpoints/qwen3-6-27b",
      "name": "Qwen3.6-27B",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": false,
      "score": 65,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Apr 22, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/qwen3-6-27b"
    },
    {
      "id": "kilo-code/nvidia-nemotron-3-5-lightning-free",
      "name": "nvidia/nemotron-3.5-lightning:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 65,
      "context": "1.0M",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Aug 11, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/nvidia-nemotron-3-5-lightning-free"
    },
    {
      "id": "modelscope/minimax-minimax-m3",
      "name": "MiniMax-M3",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 64,
      "context": "512K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Jun 1, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/minimax-minimax-m3"
    },
    {
      "id": "opencode/glm-5",
      "name": "GLM-5",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 63,
      "context": "205K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Mar 15, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/glm-5"
    },
    {
      "id": "kilo-code/poolside-laguna-s-2-1-free",
      "name": "poolside/laguna-s-2.1:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 63,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Jul 21, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/poolside-laguna-s-2-1-free"
    },
    {
      "id": "kilo-code/poolside-laguna-xs-2-1-free",
      "name": "poolside/laguna-xs-2.1:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 61,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Jul 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/poolside-laguna-xs-2-1-free"
    },
    {
      "id": "openrouter/cohere-north-mini-code",
      "name": "Cohere: North Mini Code (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 61,
      "context": "256K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Jun 9, 2026",
      "weeklyTokens": "149.3B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/cohere-north-mini-code"
    },
    {
      "id": "openrouter/google-gemma-4-31b-it",
      "name": "Google: Gemma 4 31B (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 61,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Apr 2, 2026",
      "weeklyTokens": "578.2M",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/google-gemma-4-31b-it"
    },
    {
      "id": "opencode/qwen3-6-plus",
      "name": "Qwen3.6 Plus",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 60,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/qwen3-6-plus"
    },
    {
      "id": "z-ai-zhipu-ai/glm-4-7-flash",
      "name": "GLM-4.7-Flash",
      "provider": {
        "id": "z-ai-zhipu-ai",
        "name": "Z AI (Zhipu AI)"
      },
      "verified": true,
      "score": 60,
      "context": "200K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "1 concurrent request",
      "released": "Dec 22, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/z-ai-zhipu-ai/glm-4-7-flash"
    },
    {
      "id": "opencode/kimi-k2-6",
      "name": "Kimi K2.6",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 60,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Apr 20, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/kimi-k2-6"
    },
    {
      "id": "openrouter/google-gemma-4-26b-a4b-it",
      "name": "Google: Gemma 4 26B A4B (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 60,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Apr 2, 2026",
      "weeklyTokens": "979.3M",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/google-gemma-4-26b-a4b-it"
    },
    {
      "id": "kilo-code/cohere-north-mini-code-free",
      "name": "cohere/north-mini-code:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 60,
      "context": "256K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Jun 9, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/cohere-north-mini-code-free"
    },
    {
      "id": "gonka-broker/minimaxai-minimax-m2-7",
      "name": "MiniMaxAI/MiniMax-M2.7",
      "provider": {
        "id": "gonka-broker",
        "name": "Gonka Broker"
      },
      "verified": false,
      "score": 60,
      "context": "200K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "~1M tokens/month (shared, varies by model)",
      "released": "Mar 18, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/gonka-broker/minimaxai-minimax-m2-7"
    },
    {
      "id": "ollama-cloud/nemotron-3-super",
      "name": "Nemotron 3 Super 120B A12B",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 60,
      "context": "262K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Mar 11, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/nemotron-3-super"
    },
    {
      "id": "nvidia-nim/poolside-laguna-xs-2-1",
      "name": "poolside/laguna-xs-2.1",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jul 2, 2026",
      "weeklyTokens": "82.8B",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/poolside-laguna-xs-2-1"
    },
    {
      "id": "nvidia-nim/01-ai-yi-large",
      "name": "01-ai/yi-large",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/01-ai-yi-large"
    },
    {
      "id": "nvidia-nim/meta-codellama-70b",
      "name": "meta/codellama-70b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/meta-codellama-70b"
    },
    {
      "id": "nvidia-nim/nvidia-llama3-chatqa-1-5-70b",
      "name": "nvidia/llama3-chatqa-1.5-70b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama3-chatqa-1-5-70b"
    },
    {
      "id": "nvidia-nim/writer-palmyra-fin-70b-32k",
      "name": "writer/palmyra-fin-70b-32k",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/writer-palmyra-fin-70b-32k"
    },
    {
      "id": "nvidia-nim/writer-palmyra-med-70b",
      "name": "writer/palmyra-med-70b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/writer-palmyra-med-70b"
    },
    {
      "id": "nvidia-nim/writer-palmyra-med-70b-32k",
      "name": "writer/palmyra-med-70b-32k",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/writer-palmyra-med-70b-32k"
    },
    {
      "id": "opencode/minimax-m2-5",
      "name": "MiniMax-M2.5",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 59,
      "context": "205K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Feb 12, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/minimax-m2-5"
    },
    {
      "id": "openrouter/liquid-lfm-2-5-2-6b",
      "name": "LiquidAI: LFM2.5-2.6B (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 59,
      "context": "66K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Aug 4, 2026",
      "weeklyTokens": "9.9B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/liquid-lfm-2-5-2-6b"
    },
    {
      "id": "ovhcloud-ai-endpoints/qwen3-5-397b-a17b",
      "name": "Qwen3.5-397B-A17B",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": false,
      "score": 59,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Feb 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/qwen3-5-397b-a17b"
    },
    {
      "id": "opencode/glm-5-1",
      "name": "GLM-5.1",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 59,
      "context": "200K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Apr 7, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/glm-5-1"
    },
    {
      "id": "nvidia-nim/mistralai-mistral-large-4-1t-a52b",
      "name": "mistralai/mistral-large-4-1t-a52b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 59,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 31, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/mistralai-mistral-large-4-1t-a52b"
    },
    {
      "id": "opencode/qwen3-8-flash",
      "name": "Qwen3.8 Flash",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 58,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Aug 26, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/qwen3-8-flash"
    },
    {
      "id": "openrouter/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning",
      "name": "NVIDIA: Nemotron 3 Nano Omni (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 58,
      "context": "256K",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Apr 28, 2026",
      "weeklyTokens": "37.3B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning"
    },
    {
      "id": "modelscope/stepfun-ai-step-3-7-flash",
      "name": "stepfun-ai/Step-3.7-Flash",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 58,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "May 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/stepfun-ai-step-3-7-flash"
    },
    {
      "id": "kilo-code/liquid-lfm-2-5-2-6b-free",
      "name": "liquid/lfm-2.5-2.6b:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 58,
      "context": "64K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Aug 4, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/liquid-lfm-2-5-2-6b-free"
    },
    {
      "id": "kilo-code/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning-free",
      "name": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 57,
      "context": "256K",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Apr 28, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning-free"
    },
    {
      "id": "kilo-code/nvidia-nemotron-3-super-120b-a12b-free",
      "name": "nvidia/nemotron-3-super-120b-a12b:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 56,
      "context": "262K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Mar 11, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/nvidia-nemotron-3-super-120b-a12b-free"
    },
    {
      "id": "cline/cline-free-nemotron-3-5-super-vl",
      "name": "cline-free/nemotron-3.5-super-vl",
      "provider": {
        "id": "cline",
        "name": "Cline"
      },
      "verified": true,
      "score": 56,
      "context": "0",
      "modalities": [
        "text",
        "vision"
      ],
      "rateLimit": "See provider page",
      "released": "Oct 15, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cline/cline-free-nemotron-3-5-super-vl"
    },
    {
      "id": "cloudflare-workers-ai/cf-moonshotai-kimi-k2-7-code",
      "name": "@cf/moonshotai/kimi-k2.7-code",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 55,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Jun 12, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-moonshotai-kimi-k2-7-code"
    },
    {
      "id": "nvidia-nim/ibm-granite-34b-code-instruct",
      "name": "ibm/granite-34b-code-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 55,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/ibm-granite-34b-code-instruct"
    },
    {
      "id": "nvidia-nim/google-gemma-4-31b-it",
      "name": "Gemma 4 31B IT",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 55,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-gemma-4-31b-it"
    },
    {
      "id": "opencode/minimax-m2-7",
      "name": "MiniMax-M2.7",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 54,
      "context": "205K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Mar 18, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/minimax-m2-7"
    },
    {
      "id": "cloudflare-workers-ai/cf-google-gemma-4-26b-a4b-it",
      "name": "@cf/google/gemma-4-26b-a4b-it",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 54,
      "context": "256K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-google-gemma-4-26b-a4b-it"
    },
    {
      "id": "agnes-ai/agnes-1-5-flash",
      "name": "agnes-1.5-flash",
      "provider": {
        "id": "agnes-ai",
        "name": "Agnes AI"
      },
      "verified": true,
      "score": 54,
      "context": "256K",
      "modalities": [
        "text",
        "vision"
      ],
      "rateLimit": "30 RPM",
      "released": "Jun 30, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/agnes-ai/agnes-1-5-flash"
    },
    {
      "id": "cline/cline-free-solar-mini4",
      "name": "Solar Mini 4",
      "provider": {
        "id": "cline",
        "name": "Cline"
      },
      "verified": true,
      "score": 53,
      "context": "0",
      "modalities": [
        "text"
      ],
      "rateLimit": "See provider page",
      "released": "Sep 22, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cline/cline-free-solar-mini4"
    },
    {
      "id": "opencode/kimi-k2-5",
      "name": "Kimi K2.5",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 53,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Jan 27, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/kimi-k2-5"
    },
    {
      "id": "google-gemini/gemma-4-31b-it",
      "name": "Gemma 4 31B IT",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 53,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "Varies by model and account",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemma-4-31b-it"
    },
    {
      "id": "ollama-cloud/gemma4-31b",
      "name": "Gemma 4 31B IT",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 53,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/gemma4-31b"
    },
    {
      "id": "cloudflare-workers-ai/cf-openai-gpt-oss-120b",
      "name": "@cf/openai/gpt-oss-120b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 53,
      "context": "128K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Aug 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-openai-gpt-oss-120b"
    },
    {
      "id": "nvidia-nim/bigcode-starcoder2-15b",
      "name": "bigcode/starcoder2-15b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/bigcode-starcoder2-15b"
    },
    {
      "id": "nvidia-nim/google-deplot",
      "name": "google/deplot",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-deplot"
    },
    {
      "id": "nvidia-nim/google-gemma-2b",
      "name": "google/gemma-2b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-gemma-2b"
    },
    {
      "id": "nvidia-nim/google-recurrentgemma-2b",
      "name": "google/recurrentgemma-2b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-recurrentgemma-2b"
    },
    {
      "id": "nvidia-nim/microsoft-kosmos-2",
      "name": "microsoft/kosmos-2",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/microsoft-kosmos-2"
    },
    {
      "id": "nvidia-nim/microsoft-phi-3-vision-128k-instruct",
      "name": "microsoft/phi-3-vision-128k-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/microsoft-phi-3-vision-128k-instruct"
    },
    {
      "id": "nvidia-nim/microsoft-phi-3-5-moe-instruct",
      "name": "microsoft/phi-3.5-moe-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/microsoft-phi-3-5-moe-instruct"
    },
    {
      "id": "nvidia-nim/mistralai-mixtral-8x22b-v0-1",
      "name": "mistralai/mixtral-8x22b-v0.1",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/mistralai-mixtral-8x22b-v0-1"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-1-nemotron-51b-instruct",
      "name": "nvidia/llama-3.1-nemotron-51b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-1-nemotron-51b-instruct"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-4-340b-instruct",
      "name": "nvidia/nemotron-4-340b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-4-340b-instruct"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-4-340b-reward",
      "name": "nvidia/nemotron-4-340b-reward",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-4-340b-reward"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-parse",
      "name": "nvidia/nemotron-parse",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-parse"
    },
    {
      "id": "nvidia-nim/nvidia-neva-22b",
      "name": "nvidia/neva-22b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-neva-22b"
    },
    {
      "id": "nvidia-nim/nvidia-nvclip",
      "name": "nvidia/nvclip",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nvclip"
    },
    {
      "id": "nvidia-nim/nvidia-riva-translate-4b-instruct",
      "name": "nvidia/riva-translate-4b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-riva-translate-4b-instruct"
    },
    {
      "id": "nvidia-nim/nvidia-vila",
      "name": "nvidia/vila",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-vila"
    },
    {
      "id": "nvidia-nim/writer-palmyra-creative-122b",
      "name": "writer/palmyra-creative-122b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/writer-palmyra-creative-122b"
    },
    {
      "id": "google-gemini/gemma-4-26b-a4b-it",
      "name": "Gemma 4 26B A4B IT",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 52,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "Varies by model and account",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemma-4-26b-a4b-it"
    },
    {
      "id": "mistral-ai/mistral-medium-3-5-128b",
      "name": "Mistral Medium 3.5 (128B)",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 52,
      "context": "256K",
      "modalities": [
        "text",
        "image",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "Apr 30, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/mistral-medium-3-5-128b"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning",
      "name": "Nemotron 3 Nano Omni 30B A3B Reasoning",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "256K",
      "modalities": [
        "audio",
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Apr 28, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning"
    },
    {
      "id": "llm7-io/gemma4-31b",
      "name": "Gemma 4 31B IT",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 52,
      "context": "262K",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/gemma4-31b"
    },
    {
      "id": "cloudflare-workers-ai/cf-nvidia-nemotron-3-120b-a12b",
      "name": "@cf/nvidia/nemotron-3-120b-a12b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 52,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-nvidia-nemotron-3-120b-a12b"
    },
    {
      "id": "cloudflare-workers-ai/cf-baai-bge-large-en-v1-5",
      "name": "@cf/baai/bge-large-en-v1.5",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 52,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-baai-bge-large-en-v1-5"
    },
    {
      "id": "kilo-code/reflection-beam-free",
      "name": "reflection/beam-free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 52,
      "context": "1.0M",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Aug 26, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/reflection-beam-free"
    },
    {
      "id": "nvidia-nim/google-diffusiongemma-26b-a4b-it",
      "name": "google/diffusiongemma-26b-a4b-it",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "8K",
      "modalities": [
        "text",
        "vision"
      ],
      "rateLimit": "",
      "released": "Jun 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-diffusiongemma-26b-a4b-it"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-super-120b-a12b",
      "name": "Nemotron 3 Super 120B A12B",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 52,
      "context": "262K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Mar 11, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-super-120b-a12b"
    },
    {
      "id": "modelscope/nex-agi-nex-n2-5-pro",
      "name": "nex-agi/Nex-N2.5-Pro",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 51,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Sep 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/nex-agi-nex-n2-5-pro"
    },
    {
      "id": "cloudflare-workers-ai/cf-zai-org-glm-4-7-flash",
      "name": "@cf/zai-org/glm-4.7-flash",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Jan 19, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-zai-org-glm-4-7-flash"
    },
    {
      "id": "opencode/qwen3-5-plus",
      "name": "Qwen3.5 Plus",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 51,
      "context": "1.0M",
      "modalities": [
        "reasoning",
        "vision"
      ],
      "rateLimit": "",
      "released": "Feb 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/qwen3-5-plus"
    },
    {
      "id": "ovhcloud-ai-endpoints/qwen3-5-9b",
      "name": "Qwen3.5-9B",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": false,
      "score": 51,
      "context": "262K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Mar 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/qwen3-5-9b"
    },
    {
      "id": "nvidia-nim/adept-fuyu-8b",
      "name": "adept/fuyu-8b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/adept-fuyu-8b"
    },
    {
      "id": "nvidia-nim/aisingapore-sea-lion-7b-instruct",
      "name": "aisingapore/sea-lion-7b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/aisingapore-sea-lion-7b-instruct"
    },
    {
      "id": "nvidia-nim/deepseek-ai-deepseek-coder-6-7b-instruct",
      "name": "deepseek-ai/deepseek-coder-6.7b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/deepseek-ai-deepseek-coder-6-7b-instruct"
    },
    {
      "id": "nvidia-nim/google-codegemma-1-1-7b",
      "name": "google/codegemma-1.1-7b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-codegemma-1-1-7b"
    },
    {
      "id": "nvidia-nim/google-codegemma-7b",
      "name": "google/codegemma-7b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/google-codegemma-7b"
    },
    {
      "id": "nvidia-nim/ibm-granite-3-0-8b-instruct",
      "name": "ibm/granite-3.0-8b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/ibm-granite-3-0-8b-instruct"
    },
    {
      "id": "nvidia-nim/ibm-granite-8b-code-instruct",
      "name": "ibm/granite-8b-code-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/ibm-granite-8b-code-instruct"
    },
    {
      "id": "nvidia-nim/nv-mistralai-mistral-nemo-12b-instruct",
      "name": "nv-mistralai/mistral-nemo-12b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nv-mistralai-mistral-nemo-12b-instruct"
    },
    {
      "id": "nvidia-nim/nvidia-mistral-nemo-minitron-8b-8k-instruct",
      "name": "nvidia/mistral-nemo-minitron-8b-8k-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-mistral-nemo-minitron-8b-8k-instruct"
    },
    {
      "id": "nvidia-nim/zyphra-zamba2-7b-instruct",
      "name": "zyphra/zamba2-7b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 51,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/zyphra-zamba2-7b-instruct"
    },
    {
      "id": "agnes-ai/agnes-image-2-0-flash",
      "name": "agnes-image-2.0-flash",
      "provider": {
        "id": "agnes-ai",
        "name": "Agnes AI"
      },
      "verified": true,
      "score": 51,
      "context": "4K",
      "modalities": [
        "image"
      ],
      "rateLimit": "30 RPM (1K)",
      "released": "Jun 30, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/agnes-ai/agnes-image-2-0-flash"
    },
    {
      "id": "agnes-ai/agnes-image-2-1-flash",
      "name": "agnes-image-2.1-flash",
      "provider": {
        "id": "agnes-ai",
        "name": "Agnes AI"
      },
      "verified": true,
      "score": 51,
      "context": "4K",
      "modalities": [
        "image"
      ],
      "rateLimit": "30 RPM (1K)",
      "released": "Jun 30, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/agnes-ai/agnes-image-2-1-flash"
    },
    {
      "id": "kilo-code/kilo-auto-free",
      "name": "kilo-auto/free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 51,
      "context": "256K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Jan 1, 1970",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/kilo-auto-free"
    },
    {
      "id": "kilo-code/stealth-glyph-cluster",
      "name": "stealth/glyph-cluster",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 51,
      "context": "256K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Aug 26, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/stealth-glyph-cluster"
    },
    {
      "id": "google-gemini/gemini-3-1-flash-lite",
      "name": "Gemini 3.1 Flash-Lite",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 51,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "Mar 3, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-3-1-flash-lite"
    },
    {
      "id": "modelscope/qwen-qwen3-5-397b-a17b",
      "name": "Qwen/Qwen3.5-397B-A17B",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 50,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Feb 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/qwen-qwen3-5-397b-a17b"
    },
    {
      "id": "z-ai-zhipu-ai/glm-4-6v-flash",
      "name": "GLM-4.6V-Flash",
      "provider": {
        "id": "z-ai-zhipu-ai",
        "name": "Z AI (Zhipu AI)"
      },
      "verified": true,
      "score": 50,
      "context": "128K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "1 concurrent request",
      "released": "Sep 30, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/z-ai-zhipu-ai/glm-4-6v-flash"
    },
    {
      "id": "ollama-cloud/gpt-oss-120b",
      "name": "gpt-oss:120b",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 50,
      "context": "128K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "1 concurrent request, monthly starter credits",
      "released": "Aug 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/gpt-oss-120b"
    },
    {
      "id": "modelscope/qwen-qwen3-5-122b-a10b",
      "name": "Qwen/Qwen3.5-122B-A10B",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 49,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Feb 24, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/qwen-qwen3-5-122b-a10b"
    },
    {
      "id": "llm7-io/mistral-nemo-instruct-2407",
      "name": "mistral-Nemo-Instruct-2407",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 49,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "60 RPM, 250 req/hr (free token)",
      "released": "Jul 18, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/mistral-nemo-instruct-2407"
    },
    {
      "id": "nvidia-nim/mistralai-codestral-22b-instruct-v0-1",
      "name": "mistralai/codestral-22b-instruct-v0.1",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 48,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "May 29, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/mistralai-codestral-22b-instruct-v0-1"
    },
    {
      "id": "agnes-ai/agnes-video-v2-0",
      "name": "agnes-video-v2.0",
      "provider": {
        "id": "agnes-ai",
        "name": "Agnes AI"
      },
      "verified": true,
      "score": 48,
      "context": "4K",
      "modalities": [
        "video"
      ],
      "rateLimit": "2 RPM",
      "released": "Jun 30, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/agnes-ai/agnes-video-v2-0"
    },
    {
      "id": "ovhcloud-ai-endpoints/mistral-small-3-2-24b-instruct",
      "name": "Mistral-Small-3.2-24B-Instruct",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": false,
      "score": 48,
      "context": "128K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Jun 20, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/mistral-small-3-2-24b-instruct"
    },
    {
      "id": "nvidia-nim/nvidia-cosmos-reason2-8b",
      "name": "nvidia/cosmos-reason2-8b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 48,
      "context": "131K",
      "modalities": [
        "text",
        "image",
        "video",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Dec 1, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-cosmos-reason2-8b"
    },
    {
      "id": "llm7-io/codestral-latest",
      "name": "codestral-latest",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 48,
      "context": "32K",
      "modalities": [
        "text"
      ],
      "rateLimit": "60 RPM, 250 req/hr (free token)",
      "released": "May 29, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/codestral-latest"
    },
    {
      "id": "cloudflare-workers-ai/cf-zai-org-glm-5-3-flash",
      "name": "@cf/zai-org/glm-5.3-flash",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 48,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 22, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-zai-org-glm-5-3-flash"
    },
    {
      "id": "nvidia-nim/nvidia-ising-calibration-1-5-31b",
      "name": "nvidia/ising-calibration-1.5-31b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 25, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-ising-calibration-1-5-31b"
    },
    {
      "id": "nvidia-nim/nvidia-riva-translate-4b-instruct-v2",
      "name": "nvidia/riva-translate-4b-instruct-v2",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 28, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-riva-translate-4b-instruct-v2"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-5-lightning-30b-a3b",
      "name": "nvidia/nemotron-3.5-lightning-30b-a3b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-5-lightning-30b-a3b"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-parse-2-0",
      "name": "nvidia/nemotron-parse-2.0",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Sep 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-parse-2-0"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-5-bolt-e4b",
      "name": "nvidia/nemotron-3.5-bolt-e4b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 25, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-5-bolt-e4b"
    },
    {
      "id": "openrouter/nvidia-nemotron-3-5-content-safety",
      "name": "NVIDIA: Nemotron 3.5 Content Safety (free)",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 47,
      "context": "128K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Jun 4, 2026",
      "weeklyTokens": "1.9B",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/nvidia-nemotron-3-5-content-safety"
    },
    {
      "id": "mistral-ai/codestral",
      "name": "Codestral",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 47,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "May 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/codestral"
    },
    {
      "id": "modelscope/opencompass-compassjudger-1-32b-instruct",
      "name": "opencompass/CompassJudger-1-32B-Instruct",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/opencompass-compassjudger-1-32b-instruct"
    },
    {
      "id": "modelscope/xgenerationlab-xiyansql-qwencoder-32b-2412",
      "name": "XGenerationLab/XiYanSQL-QwenCoder-32B-2412",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/xgenerationlab-xiyansql-qwencoder-32b-2412"
    },
    {
      "id": "modelscope/xgenerationlab-xiyansql-qwencoder-32b-2504",
      "name": "XGenerationLab/XiYanSQL-QwenCoder-32B-2504",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 47,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/xgenerationlab-xiyansql-qwencoder-32b-2504"
    },
    {
      "id": "ovhcloud-ai-endpoints/qwen2-5-vl-72b-instruct",
      "name": "Qwen2.5-VL-72B-Instruct",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": false,
      "score": 47,
      "context": "32K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Jan 26, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/qwen2-5-vl-72b-instruct"
    },
    {
      "id": "openrouter/google-lyria-3-pro-preview",
      "name": "Google: Lyria 3 Pro Preview",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 47,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "audio"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Mar 30, 2026",
      "weeklyTokens": "240.6M",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/google-lyria-3-pro-preview"
    },
    {
      "id": "openrouter/google-lyria-3-clip-preview",
      "name": "Google: Lyria 3 Clip Preview",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 47,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "audio"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Mar 30, 2026",
      "weeklyTokens": "10.0M",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/google-lyria-3-clip-preview"
    },
    {
      "id": "google-gemini/gemini-2-5-pro",
      "name": "Gemini 2.5 Pro",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 47,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "5 RPM, 50 RPD",
      "released": "Jun 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-2-5-pro"
    },
    {
      "id": "google-gemini/gemini-2-5-flash",
      "name": "Gemini 2.5 Flash",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 46,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "May 20, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-2-5-flash"
    },
    {
      "id": "modelscope/stepfun-ai-step-3-5-flash",
      "name": "stepfun-ai/Step-3.5-Flash",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 46,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Apr 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/stepfun-ai-step-3-5-flash"
    },
    {
      "id": "mistral-ai/mistral-small-4",
      "name": "Mistral Small 4",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 46,
      "context": "256K",
      "modalities": [
        "text"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "Mar 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/mistral-small-4"
    },
    {
      "id": "ollama-cloud/gpt-oss-20b",
      "name": "gpt-oss:20b",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 46,
      "context": "131K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "Session/weekly limits (unpublished)",
      "released": "Aug 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/gpt-oss-20b"
    },
    {
      "id": "cohere/command-r",
      "name": "Command R+",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 46,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "May 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-r"
    },
    {
      "id": "cohere/command-r7b",
      "name": "Command R7B",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 46,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "May 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-r7b"
    },
    {
      "id": "cohere/command-r7b-arabic",
      "name": "Command R7B Arabic",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 46,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "Aug 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-r7b-arabic"
    },
    {
      "id": "kilo-code/nvidia-nemotron-3-5-content-safety-free",
      "name": "nvidia/nemotron-3.5-content-safety:free",
      "provider": {
        "id": "kilo-code",
        "name": "Kilo Code"
      },
      "verified": false,
      "score": 46,
      "context": "128K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "200 req/hr",
      "released": "Jun 2, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/kilo-code/nvidia-nemotron-3-5-content-safety-free"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-4-scout-17b-16e-instruct",
      "name": "@cf/meta/llama-4-scout-17b-16e-instruct",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 46,
      "context": "131K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Apr 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-4-scout-17b-16e-instruct"
    },
    {
      "id": "cloudflare-workers-ai/cf-mistralai-mistral-small-3-1-24b-instruct",
      "name": "@cf/mistralai/mistral-small-3.1-24b-instruct",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 46,
      "context": "128K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Mar 17, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-mistralai-mistral-small-3-1-24b-instruct"
    },
    {
      "id": "siliconflow/xingchenagi-xing4-0-29b",
      "name": "XingChenAGI/Xing4.0-29B",
      "provider": {
        "id": "siliconflow",
        "name": "SiliconFlow"
      },
      "verified": false,
      "score": 46,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "—",
      "released": "Oct 24, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/siliconflow/xingchenagi-xing4-0-29b"
    },
    {
      "id": "siliconflow/abbreviation",
      "name": "Abbreviation",
      "provider": {
        "id": "siliconflow",
        "name": "SiliconFlow"
      },
      "verified": false,
      "score": 46,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "See provider page",
      "released": "May 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/siliconflow/abbreviation"
    },
    {
      "id": "nvidia-nim/ibm-granite-3-0-3b-a800m-instruct",
      "name": "ibm/granite-3.0-3b-a800m-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 45,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/ibm-granite-3-0-3b-a800m-instruct"
    },
    {
      "id": "aion-labs/aion-labs-aion-3-0",
      "name": "aion-labs/aion-3.0",
      "provider": {
        "id": "aion-labs",
        "name": "Aion Labs"
      },
      "verified": false,
      "score": 45,
      "context": "128K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "15 RPM, 20K TPD",
      "released": "May 5, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/aion-labs/aion-labs-aion-3-0"
    },
    {
      "id": "cohere/aya-expanse-32b",
      "name": "Aya Expanse 32B",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 45,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "Oct 24, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/aya-expanse-32b"
    },
    {
      "id": "cloudflare-workers-ai/cf-baai-bge-m3",
      "name": "@cf/baai/bge-m3",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-baai-bge-m3"
    },
    {
      "id": "cloudflare-workers-ai/cf-google-gemma-2b-it-lora",
      "name": "@cf/google/gemma-2b-it-lora",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-google-gemma-2b-it-lora"
    },
    {
      "id": "cloudflare-workers-ai/cf-moonshotai-kimi-k2-6",
      "name": "@cf/moonshotai/kimi-k2.6",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-moonshotai-kimi-k2-6"
    },
    {
      "id": "cloudflare-workers-ai/cf-ibm-granite-granite-4-0-h-micro",
      "name": "@cf/ibm-granite/granite-4.0-h-micro",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-ibm-granite-granite-4-0-h-micro"
    },
    {
      "id": "cloudflare-workers-ai/cf-baai-bge-small-en-v1-5",
      "name": "@cf/baai/bge-small-en-v1.5",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-baai-bge-small-en-v1-5"
    },
    {
      "id": "cloudflare-workers-ai/cf-zai-org-glm-5-2",
      "name": "@cf/zai-org/glm-5.2",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-zai-org-glm-5-2"
    },
    {
      "id": "cloudflare-workers-ai/cf-baai-bge-base-en-v1-5",
      "name": "@cf/baai/bge-base-en-v1.5",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-baai-bge-base-en-v1-5"
    },
    {
      "id": "cloudflare-workers-ai/cf-aisingapore-gemma-sea-lion-v4-27b-it",
      "name": "@cf/aisingapore/gemma-sea-lion-v4-27b-it",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-aisingapore-gemma-sea-lion-v4-27b-it"
    },
    {
      "id": "cloudflare-workers-ai/cf-openai-gpt-oss-20b",
      "name": "@cf/openai/gpt-oss-20b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-openai-gpt-oss-20b"
    },
    {
      "id": "cloudflare-workers-ai/cf-moondream-moondream3-1-9b-a2b",
      "name": "@cf/moondream/moondream3.1-9B-A2B",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-moondream-moondream3-1-9b-a2b"
    },
    {
      "id": "cloudflare-workers-ai/cf-zai-org-glm-5-3",
      "name": "@cf/zai-org/glm-5.3",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 45,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 22, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-zai-org-glm-5-3"
    },
    {
      "id": "modelscope/zhipuai-glm-4-7-flash",
      "name": "GLM-4.7-FlashX",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 45,
      "context": "200K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jan 19, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/zhipuai-glm-4-7-flash"
    },
    {
      "id": "z-ai-zhipu-ai/glm-4-5-flash",
      "name": "GLM-4.5-Flash",
      "provider": {
        "id": "z-ai-zhipu-ai",
        "name": "Z AI (Zhipu AI)"
      },
      "verified": true,
      "score": 45,
      "context": "128K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "1 concurrent request",
      "released": "Jul 28, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/z-ai-zhipu-ai/glm-4-5-flash"
    },
    {
      "id": "aion-labs/aion-labs-aion-3-0-mini",
      "name": "aion-labs/aion-3.0-mini",
      "provider": {
        "id": "aion-labs",
        "name": "Aion Labs"
      },
      "verified": false,
      "score": 44,
      "context": "128K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "15 RPM, 20K TPD",
      "released": "May 14, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/aion-labs/aion-labs-aion-3-0-mini"
    },
    {
      "id": "siliconflow/tencent-hunyuan-mt-7b",
      "name": "tencent/Hunyuan-MT-7B",
      "provider": {
        "id": "siliconflow",
        "name": "SiliconFlow"
      },
      "verified": false,
      "score": 44,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "—",
      "released": "Oct 24, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/siliconflow/tencent-hunyuan-mt-7b"
    },
    {
      "id": "modelscope/medaibase-antangelmed",
      "name": "MedAIBase/AntAngelMed",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/medaibase-antangelmed"
    },
    {
      "id": "modelscope/musepublic-qwen-image-edit",
      "name": "MusePublic/Qwen-Image-Edit",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/musepublic-qwen-image-edit"
    },
    {
      "id": "modelscope/opengvlab-internvl3-5-241b-a28b",
      "name": "OpenGVLab/InternVL3_5-241B-A28B",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/opengvlab-internvl3-5-241b-a28b"
    },
    {
      "id": "modelscope/paddlepaddle-ernie-4-5-21b-a3b-pt",
      "name": "PaddlePaddle/ERNIE-4.5-21B-A3B-PT",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/paddlepaddle-ernie-4-5-21b-a3b-pt"
    },
    {
      "id": "modelscope/paddlepaddle-ernie-4-5-300b-a47b-pt",
      "name": "PaddlePaddle/ERNIE-4.5-300B-A47B-PT",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/paddlepaddle-ernie-4-5-300b-a47b-pt"
    },
    {
      "id": "modelscope/paddlepaddle-ernie-4-5-vl-28b-a3b-pt",
      "name": "PaddlePaddle/ERNIE-4.5-VL-28B-A3B-PT",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/paddlepaddle-ernie-4-5-vl-28b-a3b-pt"
    },
    {
      "id": "modelscope/qwen-qwen-image-edit",
      "name": "Qwen/Qwen-Image-Edit",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/qwen-qwen-image-edit"
    },
    {
      "id": "modelscope/shanghai-ai-laboratory-intern-s1",
      "name": "Shanghai_AI_Laboratory/Intern-S1",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/shanghai-ai-laboratory-intern-s1"
    },
    {
      "id": "modelscope/shanghai-ai-laboratory-intern-s2-preview",
      "name": "Shanghai_AI_Laboratory/Intern-S2-Preview",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/shanghai-ai-laboratory-intern-s2-preview"
    },
    {
      "id": "modelscope/early-access-ea-29b-a4b",
      "name": "early-access/EA-29B-A4B",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 44,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Aug 22, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/early-access-ea-29b-a4b"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-5-content-safety",
      "name": "nvidia/nemotron-3.5-content-safety",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 44,
      "context": "128K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 2, 2026",
      "weeklyTokens": "1.9B",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-5-content-safety"
    },
    {
      "id": "cloudflare-workers-ai/cf-mistral-mistral-7b-instruct-v0-2-lora",
      "name": "@cf/mistral/mistral-7b-instruct-v0.2-lora",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 43,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-mistral-mistral-7b-instruct-v0-2-lora"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-llama-2-7b-chat-hf-lora",
      "name": "@cf/meta-llama/llama-2-7b-chat-hf-lora",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 43,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-llama-2-7b-chat-hf-lora"
    },
    {
      "id": "cloudflare-workers-ai/cf-google-gemma-7b-it-lora",
      "name": "@cf/google/gemma-7b-it-lora",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 43,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-google-gemma-7b-it-lora"
    },
    {
      "id": "cloudflare-workers-ai/cf-daily-co-phonellm-mini-alpha-2",
      "name": "@cf/daily-co/phonellm-mini-alpha-2",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 43,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Oct 16, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-daily-co-phonellm-mini-alpha-2"
    },
    {
      "id": "cohere/aya-vision-32b",
      "name": "Aya Vision 32B",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 43,
      "context": "16K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "20 RPM",
      "released": "Mar 4, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/aya-vision-32b"
    },
    {
      "id": "google-gemini/gemini-2-5-flash-lite",
      "name": "Gemini 2.5 Flash-Lite",
      "provider": {
        "id": "google-gemini",
        "name": "Google Gemini"
      },
      "verified": true,
      "score": 43,
      "context": "1.0M",
      "modalities": [
        "text",
        "image",
        "video",
        "audio",
        "pdf",
        "reasoning"
      ],
      "rateLimit": "—",
      "released": "Jun 17, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/google-gemini/gemini-2-5-flash-lite"
    },
    {
      "id": "nvidia-nim/mistralai-mistral-large-2-instruct",
      "name": "mistralai/mistral-large-2-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 43,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Nov 18, 2024",
      "weeklyTokens": "350.0M",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/mistralai-mistral-large-2-instruct"
    },
    {
      "id": "modelscope/shanghai-ai-laboratory-intern-s1-mini",
      "name": "Shanghai_AI_Laboratory/Intern-S1-mini",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 43,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/shanghai-ai-laboratory-intern-s1-mini"
    },
    {
      "id": "modelscope/nex-agi-nex-n2-5-mini",
      "name": "nex-agi/Nex-N2.5-mini",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 43,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Sep 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/nex-agi-nex-n2-5-mini"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-1-nemotron-ultra-253b-v1",
      "name": "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 43,
      "context": "131K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Apr 7, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-1-nemotron-ultra-253b-v1"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-nano-3-30b-a3b",
      "name": "nvidia/nemotron-nano-3-30b-a3b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 43,
      "context": "131K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Dec 15, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-nano-3-30b-a3b"
    },
    {
      "id": "chutes-ai/deepseek-ai-deepseek-r1",
      "name": "DeepSeek-R1",
      "provider": {
        "id": "chutes-ai",
        "name": "Chutes.ai"
      },
      "verified": false,
      "score": 43,
      "context": "131K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "Community-powered, no hard cap",
      "released": "May 28, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/chutes-ai/deepseek-ai-deepseek-r1"
    },
    {
      "id": "gonka-broker/baai-bge-m3",
      "name": "BAAI/bge-m3",
      "provider": {
        "id": "gonka-broker",
        "name": "Gonka Broker"
      },
      "verified": false,
      "score": 43,
      "context": "8K",
      "modalities": [
        "text"
      ],
      "rateLimit": "~1M tokens/month (shared, varies by model)",
      "released": "Jan 30, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/gonka-broker/baai-bge-m3"
    },
    {
      "id": "cohere/command-a-111b",
      "name": "Command A (111B)",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 43,
      "context": "256K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "Mar 13, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-a-111b"
    },
    {
      "id": "cohere/command-a-reasoning",
      "name": "Command A Reasoning",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 43,
      "context": "256K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "20 RPM",
      "released": "Mar 13, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-a-reasoning"
    },
    {
      "id": "glhf-chat/mistralai-mixtral-8x7b-instruct-v0-1",
      "name": "Mixtral 8x7B",
      "provider": {
        "id": "glhf-chat",
        "name": "Glhf.chat"
      },
      "verified": true,
      "score": 42,
      "context": "33K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Unlimited for free models",
      "released": "Dec 11, 2023",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/glhf-chat/mistralai-mixtral-8x7b-instruct-v0-1"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-1-nemotron-70b-instruct",
      "name": "nvidia/llama-3.1-nemotron-70b-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Oct 15, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-1-nemotron-70b-instruct"
    },
    {
      "id": "groq/whisper-large-v3",
      "name": "whisper-large-v3",
      "provider": {
        "id": "groq",
        "name": "Groq"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM, 2,000 RPD",
      "released": "May 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/groq/whisper-large-v3"
    },
    {
      "id": "groq/whisper-large-v3-turbo",
      "name": "whisper-large-v3-turbo",
      "provider": {
        "id": "groq",
        "name": "Groq"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM, 2,000 RPD",
      "released": "May 10, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/groq/whisper-large-v3-turbo"
    },
    {
      "id": "openrouter/openrouter-free",
      "name": "Free Models Router",
      "provider": {
        "id": "openrouter",
        "name": "OpenRouter"
      },
      "verified": true,
      "score": 42,
      "context": "200K",
      "modalities": [
        "text",
        "image",
        "reasoning"
      ],
      "rateLimit": "200 req/day (free tier)",
      "released": "Feb 1, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/openrouter/openrouter-free"
    },
    {
      "id": "mistral-ai/open-mixtral-8x7b",
      "name": "Mixtral 8x7B",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 42,
      "context": "33K",
      "modalities": [
        "text"
      ],
      "rateLimit": "See provider page",
      "released": "Dec 11, 2023",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/open-mixtral-8x7b"
    },
    {
      "id": "cohere/command-a-218b",
      "name": "Command A+ (218B)",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 42,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "Mar 13, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-a-218b"
    },
    {
      "id": "cohere/command-a-vision",
      "name": "Command A Vision",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 42,
      "context": "128K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "20 RPM",
      "released": "Mar 13, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-a-vision"
    },
    {
      "id": "z-ai-zhipu-ai/glm-4-5-air",
      "name": "GLM-4.5-Air",
      "provider": {
        "id": "z-ai-zhipu-ai",
        "name": "Z AI (Zhipu AI)"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Jul 28, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/z-ai-zhipu-ai/glm-4-5-air"
    },
    {
      "id": "nvidia-nim/openai-gpt-oss-20b",
      "name": "GPT OSS 20B",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Aug 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/openai-gpt-oss-20b"
    },
    {
      "id": "nvidia-nim/ai21labs-jamba-1-5-large-instruct",
      "name": "ai21labs/jamba-1.5-large-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Aug 22, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/ai21labs-jamba-1-5-large-instruct"
    },
    {
      "id": "ovhcloud-ai-endpoints/meta-llama-3-3-70b-instruct",
      "name": "Meta-Llama-3_3-70B-Instruct",
      "provider": {
        "id": "ovhcloud-ai-endpoints",
        "name": "OVHcloud AI Endpoints"
      },
      "verified": true,
      "score": 42,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "2 RPM (anonymous)",
      "released": "Dec 6, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ovhcloud-ai-endpoints/meta-llama-3-3-70b-instruct"
    },
    {
      "id": "opencode/space-bunny-free",
      "name": "space-bunny-free",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 41,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Sep 25, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/space-bunny-free"
    },
    {
      "id": "nvidia-nim/databricks-dbrx-instruct",
      "name": "databricks/dbrx-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 41,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Mar 27, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/databricks-dbrx-instruct"
    },
    {
      "id": "nvidia-nim/meta-llama2-70b",
      "name": "meta/llama2-70b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 41,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Jul 18, 2023",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/meta-llama2-70b"
    },
    {
      "id": "nvidia-nim/mistralai-mistral-7b-instruct-v0-3",
      "name": "mistralai/mistral-7b-instruct-v0.3",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 41,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "May 22, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/mistralai-mistral-7b-instruct-v0-3"
    },
    {
      "id": "nvidia-nim/meta-llama-3-2-11b-vision-instruct",
      "name": "meta/llama-3.2-11b-vision-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 41,
      "context": "131K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Sep 25, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/meta-llama-3-2-11b-vision-instruct"
    },
    {
      "id": "mistral-ai/mistral-large-3",
      "name": "Mistral Large 3",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 41,
      "context": "256K",
      "modalities": [
        "text",
        "pdf"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "Dec 2, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/mistral-large-3"
    },
    {
      "id": "mistral-ai/open-mistral-7b",
      "name": "Mistral 7B",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 41,
      "context": "33K",
      "modalities": [
        "text"
      ],
      "rateLimit": "See provider page",
      "released": "Sep 27, 2023",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/open-mistral-7b"
    },
    {
      "id": "opencode/big-pickle",
      "name": "big-pickle",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 41,
      "context": "N/A",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 28, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/big-pickle"
    },
    {
      "id": "aion-labs/aion-labs-aion-2-0",
      "name": "aion-labs/aion-2.0",
      "provider": {
        "id": "aion-labs",
        "name": "Aion Labs"
      },
      "verified": false,
      "score": 41,
      "context": "128K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "15 RPM, 20K TPD",
      "released": "Dec 21, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/aion-labs/aion-labs-aion-2-0"
    },
    {
      "id": "cloudflare-workers-ai/cf-deepseek-ai-deepseek-r1-distill-qwen-32b",
      "name": "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 41,
      "context": "80K",
      "modalities": [
        "text",
        "reasoning"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Jan 20, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-deepseek-ai-deepseek-r1-distill-qwen-32b"
    },
    {
      "id": "modelscope/meituan-longcat-longcat-flash-lite",
      "name": "meituan-longcat/LongCat-Flash-Lite",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 40,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jan 28, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/meituan-longcat-longcat-flash-lite"
    },
    {
      "id": "cohere/command-a-translate",
      "name": "Command A Translate",
      "provider": {
        "id": "cohere",
        "name": "Cohere"
      },
      "verified": false,
      "score": 40,
      "context": "8K",
      "modalities": [
        "text"
      ],
      "rateLimit": "20 RPM",
      "released": "Mar 13, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cohere/command-a-translate"
    },
    {
      "id": "groq/allam-2-7b",
      "name": "allam-2-7b",
      "provider": {
        "id": "groq",
        "name": "Groq"
      },
      "verified": true,
      "score": 40,
      "context": "8K",
      "modalities": [
        "text"
      ],
      "rateLimit": "",
      "released": "Jan 23, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/groq/allam-2-7b"
    },
    {
      "id": "nvidia-nim/nvidia-embed-qa-4",
      "name": "nvidia/embed-qa-4",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-embed-qa-4"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-2-nemoretriever-1b-vlm-embed-v1",
      "name": "nvidia/llama-3.2-nemoretriever-1b-vlm-embed-v1",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-2-nemoretriever-1b-vlm-embed-v1"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-2-nv-embedqa-1b-v1",
      "name": "nvidia/llama-3.2-nv-embedqa-1b-v1",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-2-nv-embedqa-1b-v1"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-embed-1b",
      "name": "nvidia/nemotron-3-embed-1b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Jul 17, 2026",
      "weeklyTokens": "849.5M",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-embed-1b"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-5-embed-1b",
      "name": "nvidia/nemotron-3.5-embed-1b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Oct 21, 2026",
      "weeklyTokens": "208.6M",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-5-embed-1b"
    },
    {
      "id": "nvidia-nim/nvidia-nemotron-3-5-embed-8b",
      "name": "nvidia/nemotron-3.5-embed-8b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Oct 21, 2026",
      "weeklyTokens": "221.7M",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nemotron-3-5-embed-8b"
    },
    {
      "id": "nvidia-nim/nvidia-nv-embedqa-mistral-7b-v2",
      "name": "nvidia/nv-embedqa-mistral-7b-v2",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-nv-embedqa-mistral-7b-v2"
    },
    {
      "id": "nvidia-nim/snowflake-arctic-embed-l",
      "name": "snowflake/arctic-embed-l",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 40,
      "context": "131K",
      "modalities": [],
      "rateLimit": "Up to 40 RPM",
      "released": "Jun 17, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/snowflake-arctic-embed-l"
    },
    {
      "id": "opencode/nemotron-3-5-lightning-free",
      "name": "Nemotron 3.5 Lightning 30B A3B",
      "provider": {
        "id": "opencode",
        "name": "OpenCode Zen"
      },
      "verified": true,
      "score": 39,
      "context": "262K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Aug 13, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/opencode/nemotron-3-5-lightning-free"
    },
    {
      "id": "llm7-io/gpt-oss-20b",
      "name": "GPT OSS 20B",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 39,
      "context": "131K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Aug 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/gpt-oss-20b"
    },
    {
      "id": "grok-xai/grok-2-mini",
      "name": "Grok-2 Mini",
      "provider": {
        "id": "grok-xai",
        "name": "Grok (xAI)"
      },
      "verified": false,
      "score": 39,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "$25/month free credits, resets monthly",
      "released": "Jun 27, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/grok-xai/grok-2-mini"
    },
    {
      "id": "chutes-ai/meta-llama-meta-llama-3-1-70b-instruct",
      "name": "Llama 3.1 70B",
      "provider": {
        "id": "chutes-ai",
        "name": "Chutes.ai"
      },
      "verified": false,
      "score": 39,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Community-powered, no hard cap",
      "released": "Jul 23, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/chutes-ai/meta-llama-meta-llama-3-1-70b-instruct"
    },
    {
      "id": "mistral-ai/ministral-3-14b",
      "name": "Ministral 3 14B",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 39,
      "context": "256K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "Dec 2, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/ministral-3-14b"
    },
    {
      "id": "ollama-cloud/nemotron-3-nano-30b",
      "name": "Nemotron 3 Nano 30B A3B",
      "provider": {
        "id": "ollama-cloud",
        "name": "Ollama Cloud"
      },
      "verified": true,
      "score": 39,
      "context": "262K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Dec 15, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/ollama-cloud/nemotron-3-nano-30b"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-3-3-70b-instruct-fp8-fast",
      "name": "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 38,
      "context": "24K",
      "modalities": [
        "text"
      ],
      "rateLimit": "10K neurons/day (shared)",
      "released": "Dec 6, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-3-3-70b-instruct-fp8-fast"
    },
    {
      "id": "glhf-chat/meta-llama-meta-llama-3-1-70b-instruct-2",
      "name": "Llama 3.1 70B",
      "provider": {
        "id": "glhf-chat",
        "name": "Glhf.chat"
      },
      "verified": false,
      "score": 38,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "Unlimited for free models",
      "released": "Jul 23, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/glhf-chat/meta-llama-meta-llama-3-1-70b-instruct-2"
    },
    {
      "id": "llm7-io/nemotron-3-nano-30b",
      "name": "Nemotron 3 Nano 30B A3B",
      "provider": {
        "id": "llm7-io",
        "name": "LLM7.io"
      },
      "verified": true,
      "score": 38,
      "context": "262K",
      "modalities": [
        "reasoning"
      ],
      "rateLimit": "",
      "released": "Dec 15, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/llm7-io/nemotron-3-nano-30b"
    },
    {
      "id": "modelscope/minimax-minimax-m1-80k",
      "name": "MiniMax/MiniMax-M1-80k",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 38,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 17, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/minimax-minimax-m1-80k"
    },
    {
      "id": "mistral-ai/ministral-3-8b",
      "name": "Ministral 3 8B",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 37,
      "context": "256K",
      "modalities": [
        "text"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "Dec 2, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/ministral-3-8b"
    },
    {
      "id": "nvidia-nim/nvidia-llama-nemotron-embed-vl-1b-v2",
      "name": "nvidia/llama-nemotron-embed-vl-1b-v2",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 37,
      "context": "131K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Dec 18, 2025",
      "weeklyTokens": "440.9M",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-nemotron-embed-vl-1b-v2"
    },
    {
      "id": "modelscope/paddlepaddle-ernie-4-5-0-3b-pt",
      "name": "PaddlePaddle/ERNIE-4.5-0.3B-PT",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 37,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/paddlepaddle-ernie-4-5-0-3b-pt"
    },
    {
      "id": "cloudflare-workers-ai/cf-qwen-qwen3-30b-a3b-fp8",
      "name": "@cf/qwen/qwen3-30b-a3b-fp8",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 37,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 29, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-qwen-qwen3-30b-a3b-fp8"
    },
    {
      "id": "nvidia-nim/meta-llama-3-2-90b-vision-instruct",
      "name": "meta/llama-3.2-90b-vision-instruct",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 37,
      "context": "8K",
      "modalities": [
        "text",
        "vision"
      ],
      "rateLimit": "",
      "released": "Sep 25, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/meta-llama-3-2-90b-vision-instruct"
    },
    {
      "id": "aion-labs/aion-labs-aion-rp-llama-3-1-8b",
      "name": "aion-labs/aion-rp-llama-3.1-8b",
      "provider": {
        "id": "aion-labs",
        "name": "Aion Labs"
      },
      "verified": false,
      "score": 37,
      "context": "32K",
      "modalities": [
        "text"
      ],
      "rateLimit": "15 RPM, 20K TPD",
      "released": "Feb 4, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/aion-labs/aion-labs-aion-rp-llama-3-1-8b"
    },
    {
      "id": "cloudflare-workers-ai/cf-qwen-qwq-32b",
      "name": "@cf/qwen/qwq-32b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 37,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Mar 5, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-qwen-qwq-32b"
    },
    {
      "id": "modelscope/mistralai-mistral-large-instruct-2407",
      "name": "mistralai/Mistral-Large-Instruct-2407",
      "provider": {
        "id": "modelscope",
        "name": "ModelScope"
      },
      "verified": true,
      "score": 37,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 24, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/modelscope/mistralai-mistral-large-instruct-2407"
    },
    {
      "id": "mistral-ai/ministral-3-3b",
      "name": "Ministral 3 3B",
      "provider": {
        "id": "mistral-ai",
        "name": "Mistral AI"
      },
      "verified": false,
      "score": 36,
      "context": "256K",
      "modalities": [
        "text"
      ],
      "rateLimit": "~1 RPS, 500K TPM",
      "released": "Dec 2, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/mistral-ai/ministral-3-3b"
    },
    {
      "id": "nvidia-nim/meta-llama-guard-4-12b",
      "name": "meta/llama-guard-4-12b",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 36,
      "context": "164K",
      "modalities": [
        "text",
        "image"
      ],
      "rateLimit": "Up to 40 RPM",
      "released": "Apr 29, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/meta-llama-guard-4-12b"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-1-nemoguard-8b-content-safety",
      "name": "nvidia/llama-3.1-nemoguard-8b-content-safety",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 35,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-1-nemoguard-8b-content-safety"
    },
    {
      "id": "cloudflare-workers-ai/cf-qwen-qwen2-5-coder-32b-instruct",
      "name": "@cf/qwen/qwen2.5-coder-32b-instruct",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 35,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Nov 11, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-qwen-qwen2-5-coder-32b-instruct"
    },
    {
      "id": "cline/reflection-beam-free",
      "name": "Beam",
      "provider": {
        "id": "cline",
        "name": "Cline"
      },
      "verified": true,
      "score": 34,
      "context": "0",
      "modalities": [
        "text"
      ],
      "rateLimit": "See provider page",
      "released": "Oct 21, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cline/reflection-beam-free"
    },
    {
      "id": "cline/nvidia-nemotron-3-5-lightning-free",
      "name": "Nemotron 3.5 Lightning",
      "provider": {
        "id": "cline",
        "name": "Cline"
      },
      "verified": true,
      "score": 34,
      "context": "0",
      "modalities": [
        "text"
      ],
      "rateLimit": "See provider page",
      "released": "Oct 21, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cline/nvidia-nemotron-3-5-lightning-free"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-3-2-3b-instruct",
      "name": "@cf/meta/llama-3.2-3b-instruct",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 34,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Sep 25, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-3-2-3b-instruct"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-3-1-8b-instruct-fp8",
      "name": "@cf/meta/llama-3.1-8b-instruct-fp8",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 33,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 23, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-3-1-8b-instruct-fp8"
    },
    {
      "id": "nvidia-nim/mistralai-mistral-large-3-675b-instruct-2512",
      "name": "mistralai/mistral-large-3-675b-instruct-2512",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 33,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jul 24, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/mistralai-mistral-large-3-675b-instruct-2512"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-1-nemotron-safety-guard-8b-v3",
      "name": "Llama 3.1 Nemotron Safety Guard 8B v3",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 33,
      "context": "128K",
      "modalities": [
        "text"
      ],
      "rateLimit": "",
      "released": "Oct 28, 2025",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-1-nemotron-safety-guard-8b-v3"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-guard-3-8b",
      "name": "@cf/meta/llama-guard-3-8b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 32,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-guard-3-8b"
    },
    {
      "id": "cloudflare-workers-ai/cf-qwen-qwen3-embedding-0-6b",
      "name": "@cf/qwen/qwen3-embedding-0.6b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 32,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-qwen-qwen3-embedding-0-6b"
    },
    {
      "id": "cloudflare-workers-ai/cf-pfnet-plamo-embedding-1b",
      "name": "@cf/pfnet/plamo-embedding-1b",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 32,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-pfnet-plamo-embedding-1b"
    },
    {
      "id": "cloudflare-workers-ai/cf-google-embeddinggemma-300m",
      "name": "@cf/google/embeddinggemma-300m",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 32,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-google-embeddinggemma-300m"
    },
    {
      "id": "cloudflare-workers-ai/cf-meta-llama-3-2-1b-instruct",
      "name": "@cf/meta/llama-3.2-1b-instruct",
      "provider": {
        "id": "cloudflare-workers-ai",
        "name": "Cloudflare Workers AI"
      },
      "verified": true,
      "score": 32,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Sep 25, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/cloudflare-workers-ai/cf-meta-llama-3-2-1b-instruct"
    },
    {
      "id": "grok-xai/grok-2",
      "name": "Grok-2",
      "provider": {
        "id": "grok-xai",
        "name": "Grok (xAI)"
      },
      "verified": false,
      "score": 31,
      "context": "131K",
      "modalities": [
        "text"
      ],
      "rateLimit": "$25/month free credits, resets monthly",
      "released": "Dec 12, 2024",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/grok-xai/grok-2"
    },
    {
      "id": "nvidia-nim/nvidia-llama-3-1-nemoguard-8b-topic-control",
      "name": "nvidia/llama-3.1-nemoguard-8b-topic-control",
      "provider": {
        "id": "nvidia-nim",
        "name": "NVIDIA NIM"
      },
      "verified": true,
      "score": 30,
      "context": "8K",
      "modalities": [],
      "rateLimit": "",
      "released": "Jun 29, 2026",
      "weeklyTokens": "—",
      "status": "Online",
      "url": "https://freellm.net/models/nvidia-nim/nvidia-llama-3-1-nemoguard-8b-topic-control"
    }
  ]
};
