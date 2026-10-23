import { SITE_URL } from "./site";

// The research note. It lives on /research itself as one page; new findings go
// in as dated updates on that page rather than as separate posts.
export const RESEARCH = {
  title: "Continual Learning for Cognitive AI Twins",
  date: "Oct 21, 2026",
  isoDate: "2026-10-21", // for <time> and sitemap lastModified
  author: "David Fu",
  authorRole: "Chief AI Officer & Co-founder",
  readingTime: "6 min read",
  image: {
    url: "/research/og/teaching-a-twin.png",
    alt: "As training strength rises, the twin's refusals of impossible tasks fall from 27 to 4 out of 60 while voice match climbs",
  },
};

export const RESEARCH_DESCRIPTION =
  "How we teach an AI twin to learn from one person without forgetting: the voice vs judgement trade-off, an 8% replay mix, and when training beats lookup.";

// TechArticle plus a breadcrumb, as one JSON-LD graph.
export function researchJsonLd() {
  const url = `${SITE_URL}/research`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: RESEARCH.title,
        description: RESEARCH_DESCRIPTION,
        image: `${SITE_URL}${RESEARCH.image.url}`,
        datePublished: RESEARCH.isoDate,
        dateModified: RESEARCH.isoDate,
        about: ["Continual learning", "Catastrophic forgetting", "Fine-tuning large language models"],
        author: {
          "@type": "Person",
          name: RESEARCH.author,
          jobTitle: "Chief AI Officer & Co-founder",
          url: `${SITE_URL}/about`,
        },
        publisher: { "@type": "Organization", name: "Tsuin AI Sdn Bhd", url: SITE_URL },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Research", item: url },
        ],
      },
    ],
  };
}
