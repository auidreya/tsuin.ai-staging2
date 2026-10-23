import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/legal-doc";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | tsuin",
  description:
    "The terms for using the tsuin app and website: who can use it, what you own, acceptable use, pricing, and governing law.",
  path: "/terms",
  socialTitle: "tsuin Terms of Use",
});

export default function TermsPage() {
  return <LegalDoc slug="terms" eyebrow="Legal" />;
}
