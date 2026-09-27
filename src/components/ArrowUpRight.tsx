/** Small "opens elsewhere" arrow, sized to the surrounding text. */
export default function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`ml-[0.3em] inline-block size-[0.62em] shrink-0 align-baseline ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  );
}
