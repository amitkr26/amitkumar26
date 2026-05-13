import Link from "next/link";
import { metadata } from "@/data";

const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Embedded", href: "/embedded" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-accent flex items-center justify-center text-background font-bold text-xs">
            AK
          </div>
          <span className="font-bold tracking-widest text-sm uppercase hidden sm:block">
            {metadata.name}
          </span>
        </Link>

        <nav className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest hover:text-accent transition-colors ${
                link.href === "/contact"
                  ? "border border-accent/30 px-4 py-2 hover:bg-accent hover:text-background transition-all"
                  : ""
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
