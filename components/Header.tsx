"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/programme", label: "Programme" },
  { href: "/about", label: "About" },
  { href: "/#tracks", label: "Tracks" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-50/85 backdrop-blur-lg border-b border-ink-900/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[88rem] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-emerald-500 flex items-center justify-center">
                <span className="font-display text-cream-50 text-2xl leading-none font-semibold">
                  ʌ
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-ochre-300" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-2xl leading-none text-ink-900">
                NYSC <span className="text-emerald-500">Tech Skills</span>
              </div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-ink-500 mt-1">
                Initiative · 2026
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-lg text-ink-700 hover:text-emerald-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 text-cream-50 text-base tracking-wide hover:bg-emerald-700 transition-colors border border-ink-900 hover:border-emerald-700"
            >
              Register
              <span aria-hidden>→</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-cream-50 border-l border-ink-900/10 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 mb-6">
              ── Navigation
            </div>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-display text-2xl text-ink-900 hover:text-emerald-500 border-b border-ink-900/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 bg-ink-900 text-cream-50 text-sm tracking-wide hover:bg-emerald-700 transition-colors"
            >
              Register Your Interest →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}