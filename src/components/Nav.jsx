import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data";

const links = [
  { id: "about", label: "About", n: "01" },
  { id: "skills", label: "Stack", n: "02" },
  { id: "experience", label: "Work", n: "03" },
  { id: "research", label: "Research", n: "04" },
  { id: "projects", label: "Projects", n: "05" },
  { id: "contact", label: "Contact", n: "06" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-ink/70 border-b border-line" : ""
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-serif italic text-xl md:text-2xl">Nasroon</span>
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group flex items-baseline gap-1.5 text-sm text-bone-dim hover:text-bone transition-colors"
              >
                <span className="font-mono text-[10px] text-muted group-hover:text-accent transition-colors">
                  {l.n}
                </span>
                <span className="hover-underline">{l.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available
          </a>

          <button
            className="md:hidden text-bone p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[70] bg-ink transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-line">
          <span className="font-serif italic text-xl">Nasroon<span className="text-accent">.</span></span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 py-10">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 py-4 border-b border-line/50"
            >
              <span className="font-mono text-xs text-muted">{l.n}</span>
              <span className="font-serif text-3xl">{l.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center gap-2 text-sm font-mono px-4 py-3 rounded-full border border-accent text-accent self-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for hire
          </a>
        </nav>
      </div>
    </>
  );
}
