"use client";

import { useEffect, useState } from "react";

/**
 * The page is prerendered, so the server's year is fixed at deploy time.
 * This corrects it in the browser if a new year has started since.
 */
export default function CurrentYear({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
