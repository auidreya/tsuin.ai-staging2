// The research index. One entry per post; the article pages live under
// app/research/<slug>/. Newest first — the index renders in array order.
export type ResearchPost = {
  slug: string;
  title: string;
  date: string; // display string, e.g. "Oct 21, 2026"
  isoDate: string; // for <time> and sitemap lastModified
  author: string;
  readingTime: string;
  dek: string; // one-line summary for the index and social cards
};

export const RESEARCH_POSTS: ResearchPost[] = [
  {
    slug: "teaching-a-twin-without-making-it-forget",
    title: "Teaching a twin without making it forget",
    date: "Oct 21, 2026",
    isoDate: "2026-10-21",
    author: "Audrey",
    readingTime: "6 min read",
    dek: "What it takes to teach a twin a second thing without wiping out the first: the voice-versus-judgement trade, the 8% mix that fixed it, and the one number between us and a real result.",
  },
];

export function getPost(slug: string): ResearchPost | undefined {
  return RESEARCH_POSTS.find((p) => p.slug === slug);
}
