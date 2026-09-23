import Image from "next/image";
import Link from "next/link";
import logo from "@/images/tsuin-black-horizontal-full.webp";

export function Logo({ height, eager = false }: { height: number; eager?: boolean }) {
  return (
    <Link href="/" style={{ display: "flex" }} aria-label="tsuin home">
      <Image
        src={logo}
        alt="tsuin"
        loading={eager ? "eager" : "lazy"}
        sizes={`${Math.ceil((height * logo.width) / logo.height)}px`}
        style={{ height, width: "auto", mixBlendMode: "multiply" }}
      />
    </Link>
  );
}
