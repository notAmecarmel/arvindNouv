export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        fontFamily: "var(--font-serif)",
        fontSize: "1rem",
        color: "var(--stone-dark)",
      }}
    >
      Loading...
    </div>
  );
}
