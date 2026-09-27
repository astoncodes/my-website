/** Page section: a small spaced-caps label beside the content (stacked on mobile). */
export default function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="grid grid-cols-1 gap-y-6 border-t border-line py-12 sm:py-16 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-10">
        <h2 id={`${id}-heading`} className="label md:pt-1.5">
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
