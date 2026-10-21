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
    slug: "day-1-with-my-ai-twin",
    title: "Day 1 experience with the AI Twin as a closed beta user",
    date: "Oct 21, 2026",
    isoDate: "2026-10-21",
    author: "James",
    authorRole: "Testing Tsuin",
    readingTime: "5 min read",
    dek: "My twin said “I don’t have enough from James on this yet” to almost everything I asked. A closed beta tester's first day: what I expected, what broke, and what I'd tell myself on day one.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
