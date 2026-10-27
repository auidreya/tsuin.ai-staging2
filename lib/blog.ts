import { SITE_URL } from "./site";

// The blog index. One entry per post; the article pages live under
// app/blog/<slug>/. Newest first — the index renders in array order.
export type BlogPost = {
  slug: string;
  title: string;
  date: string; // display string, e.g. "Oct 21, 2026"
  isoDate: string; // for <time> and sitemap lastModified
  author: string;
  authorRole: string;
  readingTime: string;
  dek: string; // one-line summary for the index and social cards
  image: { url: string; alt: string }; // 1200x630 social card, also used in structured data
  betaLog?: boolean; // part of the closed beta log series
};

// Guest authors get a bio box at the end of their posts and sameAs links in
// the structured data. Keyed by the post's `author` name.
export type BlogAuthor = {
  role: string;
  bio: string;
  links: { label: string; href: string }[];
};

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  "James Chu": {
    role: "Closed beta user, Tsuin",
    bio: "I want my AI twin to augment my thinking instead of reading LLMs spit out generic nonsense.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/jameschuthink/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/james-chu-think-a85b67391/" },
    ],
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tsuin-closed-beta-feels-like-chatgpt-3-5",
    title: "Testing Tsuin in closed beta feels like ChatGPT 3.5",
    date: "Oct 26, 2026",
    isoDate: "2026-10-26",
    author: "James Chu",
    authorRole: "Closed beta user",
    readingTime: "3 min read",
    dek: "Tsuin can't do tasks for me yet, the same way ChatGPT 3.5 couldn't. What it does instead is ask me the question I would ask myself.",
    image: { url: "/blog/og/chatgpt-3-5.jpg", alt: "The human shiba at a desk, talking to the twin shiba on screen" },
    betaLog: true,
  },
  {
    slug: "day-2-training-my-ai-twin",
    title: "Day 2 of training my AI twin as a closed beta user",
    date: "Oct 23, 2026",
    isoDate: "2026-10-23",
    author: "James Chu",
    authorRole: "Closed beta user",
    readingTime: "4 min read",
    dek: "Training my AI twin showed me my own reasoning is a mess. Day two of the closed beta: the bug behind “I don’t know”, and why explaining every correction made me think better.",
    image: { url: "/blog/og/day-2.jpg", alt: "The human shiba and the twin shiba high-five over a glowing network" },
    betaLog: true,
  },
  {
    slug: "day-1-with-my-ai-twin",
    title: "Day 1 experience with the AI Twin as a closed beta user",
    date: "Oct 21, 2026",
    isoDate: "2026-10-21",
    author: "James Chu",
    authorRole: "Closed beta user",
    readingTime: "5 min read",
    dek: "My twin said “I don’t have enough from James on this yet” to almost everything I asked. A closed beta tester's first day: what I expected, what broke, and what I'd tell myself on day one.",
    image: { url: "/blog/og/day-1.jpg", alt: "The twin shiba training at a computer, with the human shiba on screen" },
    betaLog: true,
  },
  {
    slug: "sunway-ilabs-cradle-deep-tech-ventures-lab",
    title: "Our Deep Tech Ventures Lab journey with Sunway iLabs",
    date: "Nov 6, 2025",
    isoDate: "2025-11-06",
    author: "Audrey Aui Yong",
    authorRole: "Founder & CEO, Tsuin AI",
    readingTime: "4 min read",
    dek: "Tsuin AI was one of 20 startups chosen from 69 for the Sunway iLabs and Cradle Startup Deep Tech Ventures Lab. The journey, from launch to the stage, told in photos.",
    image: { url: "/blog/og/sunway.jpg", alt: "The Startup Deep Tech Ventures Lab launch at Sunway iLabs" },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// The closed beta logs, oldest first, for the series box under each log.
export const BETA_LOGS = BLOG_POSTS.filter((p) => p.betaLog).reverse();

// BlogPosting plus a breadcrumb, as one JSON-LD graph for an article page.
export function blogPostingJsonLd(post: BlogPost, description: string) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const bio = BLOG_AUTHORS[post.author];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description,
        image: `${SITE_URL}${post.image.url}`,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        author: {
          "@type": "Person",
          name: post.author,
          ...(bio ? { description: bio.bio, sameAs: bio.links.map((l) => l.href) } : {}),
        },
        publisher: { "@type": "Organization", name: "Tsuin AI Sdn Bhd", url: SITE_URL },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
