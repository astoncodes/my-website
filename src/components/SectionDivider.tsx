export default function SectionDivider({
  index,
  title,
  solid,
}: {
  index: string;
  title: string;
  solid: string;
}) {
  return (
    <div className="reveal mb-12 overflow-hidden">
      <p className="section-index mb-2">{index}</p>
      <h2 className="divider-type glitchable" aria-label={`${title} ${solid}`}>
        <span aria-hidden="true">/ </span>
        {title} <span className="solid">{solid}</span>
      </h2>
      <div
        className="mt-4 h-px w-full"
        style={{ background: "linear-gradient(90deg, var(--blue), transparent 70%)" }}
      />
    </div>
  );
}
