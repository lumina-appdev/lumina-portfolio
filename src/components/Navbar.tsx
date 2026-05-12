"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-gray-900">
          Sprout Studio
          <span className="ml-1.5 text-xs font-normal text-gray-400">by Lumina Software</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {(["#services", "#work", "#contact"] as const).map((href) => {
            const label = href.slice(1).charAt(0).toUpperCase() + href.slice(2);
            return (
              <a key={href} href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-sm font-medium bg-sprout text-white px-4 py-1.5 rounded-sm hover:bg-sprout-dark transition-colors"
          >
            Let&apos;s talk
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-500 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-4">
          {["#services", "#work", "#contact"].map((href) => {
            const label = href.slice(1).charAt(0).toUpperCase() + href.slice(2);
            return (
              <a key={href} href={href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-sm font-medium bg-sprout text-white px-4 py-2 rounded-sm text-center"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
