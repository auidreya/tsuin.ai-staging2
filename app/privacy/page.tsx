import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | tsuin",
  description:
    "What the tsuin app collects (voice recordings, transcripts, commit data), which AI vendors process it, where it is stored, and how to delete it.",
  path: "/privacy",
  socialTitle: "tsuin Privacy Policy",
});

export default function PrivacyPage() {
  return <LegalDoc slug="privacy" eyebrow="Legal" />;
}
