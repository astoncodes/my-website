import ArrowUpRight from "@/components/ArrowUpRight";

/** Link that opens in a new tab, with a visible arrow and a screen-reader hint. */
export default function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowUpRight />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
