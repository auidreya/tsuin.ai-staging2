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
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "day-2-training-my-ai-twin",
    title: "Day 2 of training my AI twin as a closed beta user",
    date: "Oct 23, 2026",
    isoDate: "2026-10-23",
    author: "James",
    authorRole: "Testing Tsuin",
    readingTime: "4 min read",
    dek: "Training my AI twin showed me my own reasoning is a mess. Day two of the closed beta: the bug behind “I don’t know”, and why explaining every correction made me think better.",
  },
  {
    slug: "day-1-with-my-ai-twin",
    title: "Day 1 experience with the AI Twin as a closed beta user",
    date: "Oct 21, 2026",
    isoDate: "2026-10-21",
    author: "James",
    authorRole: "Testing Tsuin",
    readingTime: "5 min read",
    dek: "My twin said “I don’t have enough from James on this yet” to almost everything I asked. A closed beta tester's first day: what I expected, what broke, and what I'd tell myself on day one.",
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
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
