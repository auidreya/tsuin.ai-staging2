// Fine paper grain over a section. The parent must be position:relative, and
// content above it needs position:relative + z-index:1.
export function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      style={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        zIndex: 0,
        backgroundImage: "var(--texture-paper)",
        opacity: "var(--texture-paper-opacity)",
        mixBlendMode: "var(--texture-paper-blend)" as React.CSSProperties["mixBlendMode"],
      }}
    />
  );
}
