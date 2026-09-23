import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { HumanView } from "./_components/human-view";
import { ThemeSwitch } from "./_components/theme-switch";
import { TwinView } from "./_components/twin-view";

export const metadata = pageMetadata({
  title: "tsuin | Cognitive AI Twin",
  description:
    "tsuin builds Cognitive AI Twin, a personal pre-AGI that captures your thought process and does continual learning. Tsuin Research is researching on personal AGI.",
  path: "/",
  socialDescription:
    "A Cognitive AI Twin is a personal pre-AGI that learns your reasoning and runs on your machine. You bring the intelligence. You keep the asset.",
});

// Design-tool prop from the legacy template (default true).
const ANIMATE_DEMO = true;

const SITE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tsuin.ai/#organization",
      name: "Tsuin AI Sdn Bhd",
      alternateName: ["tsuin", "tsuin.ai", "ツイン"],
      url: "https://www.tsuin.ai/",
      email: "hello@tsuin.ai",
      description:
        "tsuin builds the Cognitive AI Twin: a personal pre-AGI that captures your thinking and continuously learns from you, to become more like you.",
      sameAs: [
        "https://www.linkedin.com/company/tsuin-ai",
        "https://discord.gg/5DyMNFum44",
        "https://www.instagram.com/tsuin.ai/",
        "https://www.reddit.com/r/Tsuin/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tsuin.ai/#website",
      url: "https://www.tsuin.ai/",
      name: "tsuin",
      alternateName: ["tsuin.ai"],
      publisher: { "@id": "https://www.tsuin.ai/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://www.tsuin.ai/#cognitive-ai-twin",
      name: "Cognitive AI Twin",
      alternateName: ["AI twin", "personal digital clone", "personal pre-AGI"],
      description:
        "A Cognitive AI Twin is a personal pre-AGI that captures an individual's reasoning and continuously learns from their own corrections, rather than a shared model trained on everyone. It runs locally, stores its reasoning where its owner can read it, and is owned outright rather than rented.",
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "tsuin glossary",
        url: "https://www.tsuin.ai/manifesto",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.tsuin.ai/#shibasuke",
      name: "Shibasuke 1.0",
      alternateName: "tsuin Cognitive AI Twin",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "Cognitive AI Twin",
      operatingSystem: "Windows, macOS",
      author: { "@id": "https://www.tsuin.ai/#organization" },
      publisher: { "@id": "https://www.tsuin.ai/#organization" },
      about: { "@id": "https://www.tsuin.ai/#cognitive-ai-twin" },
      featureList: [
        "RLPF — Reinforcement Learning from Personal Feedback",
        "Runs locally, no LLM API required",
        "Reasoning stored in your own repository",
        "Can drive Claude Code or other AI tools on request",
      ],
      offers: {
        "@type": "Offer",
        name: "Solo plan — lifetime access",
        price: "500",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: "https://www.tsuin.ai/pricing",
      },
    },
  ],
};

const VIDEO = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://www.tsuin.ai/#video-xVtx0rVtQNI",
  name: "AI Digital Twin Prototype: The Only AI Assistant You'll Ever Need.",
  description:
    "In this Prototype Demo by CEO of Tsuin.ai, we explore an intense emergency scenario in which the CEO of Tsuin.ai, Audrey Aui Yong asked her Digital Twin, Ada to step in to resolve a critical issue during a live deployment. When a sudden code update causes legacy systems to break down, the AI Twin identifies the root cause and guides the team to fix the problem in record time, saving millions in revenue and customer trust.",
  thumbnailUrl: ["https://i.ytimg.com/vi/xVtx0rVtQNI/maxresdefault.jpg"],
  uploadDate: "2024-11-26",
  duration: "PT2M56S",
  embedUrl: "https://www.youtube-nocookie.com/embed/xVtx0rVtQNI",
  contentUrl: "https://www.youtube.com/watch?v=xVtx0rVtQNI",
  publisher: {
    "@id": "https://www.tsuin.ai/#organization",
  },
  isPartOf: {
    "@id": "https://www.tsuin.ai/#website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={SITE_GRAPH} />
      <JsonLd data={VIDEO} />
      <ThemeSwitch human={<HumanView animateDemo={ANIMATE_DEMO} />} twin={<TwinView />} />
    </>
  );
}
