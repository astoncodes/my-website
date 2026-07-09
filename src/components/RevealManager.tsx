"use client";

import { useReveal } from "@/components/hooks";

/** Client-side scroll reveal driver for server-rendered sections. */
export default function RevealManager() {
  useReveal();
  return null;
}
