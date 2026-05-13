"use client";
import Link from "next/link";
import { useState } from "react";
import { metadata } from "@/data";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Embedded", href: "/embedded" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => setMenuOpen(false)}>
          <div className="w-8 h-8 bg-accent flex items-center justify-center text-background font-bold text-xs">
            AK
          </div>
          <span className="font-bold tracking-widest text-sm uppercase hidden sm:block">
            {metadata.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] lg:text-xs uppercase tracking-widest hover:text-accent transition-colors whitespace-nowrap ${
                link.href === "/contact"
                  ? "border border-accent/30 px-3 lg:px-4 py-2 hover:bg-accent hover:text-background transition-all"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-5 h-[1.5px] bg-slate-400 transition-transform ${menuOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-slate-400 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-slate-400 transition-transform ${menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? "max-h-80 border-t border-slate-800" : "max-h-0"}`}>
        <nav className="flex flex-col px-4 py-4 space-y-3 bg-background/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs uppercase tracking-widest py-2 hover:text-accent transition-colors ${
                link.href === "/contact" ? "text-accent" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
