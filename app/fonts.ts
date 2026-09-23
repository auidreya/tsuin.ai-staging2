import { Lora, Martian_Mono } from "next/font/google";

// Lora is the human's voice, Martian Mono the twin's. Self-hosted by next/font,
// so there is no request to Google at runtime and no layout shift on swap.
export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const martianMono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian",
});
