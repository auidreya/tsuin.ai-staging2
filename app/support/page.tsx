import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Support | tsuin",
  description:
    "How to reach the tsuin team, report a bug, delete your data, and answers to the questions people ask most about their twin.",
  path: "/support",
  socialTitle: "tsuin Support",
});

export default function SupportPage() {
  return <LegalDoc slug="support" eyebrow="Help" />;
}
