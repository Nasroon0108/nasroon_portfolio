import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { projects } from "../data";

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-6 md:px-10"
    >
      <SectionLabel
        n="05"
        label="Selected Work"
        title={
          <>
            Things I've <span className="italic">shipped</span>.
          </>
        }
      />

      <ul className="border-t border-line">
        {projects.map((p) => (
          <li
            key={p.idx}
            onMouseEnter={() => setHovered(p.idx)}
            onMouseLeave={() => setHovered(null)}
            className="group relative border-b border-line"
          >
            <a
              href={p.link || "#"}
              target={p.link ? "_blank" : undefined}
              rel="noreferrer"
              onClick={(e) => !p.link && e.preventDefault()}
              className="block py-8 md:py-10 transition-colors"
            >
              {/* Row */}
              <div className="grid grid-cols-12 gap-4 items-baseline relative z-10">
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted">
                  {p.idx}
                </div>

                <div className="col-span-10 md:col-span-6">
                  <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                </div>

                <div className="hidden md:block col-span-3 text-sm text-bone-dim">
                  {p.tagline}
                </div>

                <div className="hidden md:flex col-span-2 items-center justify-end gap-3 text-muted">
                  <span className="font-mono text-xs">{p.year}</span>
                  <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                    {p.link ? <ArrowUpRight size={16} /> : <Github size={14} />}
                  </span>
                </div>
              </div>

              {/* Expanded detail on hover / focus (desktop) + always mobile */}
              <div
                className={`grid grid-cols-12 gap-4 overflow-hidden transition-all duration-500 ${
                  hovered === p.idx
                    ? "max-h-[500px] opacity-100 mt-6"
                    : "md:max-h-0 md:opacity-0 md:mt-0 max-h-[500px] opacity-100 mt-4"
                }`}
              >
                <div className="col-span-12 md:col-start-2 md:col-span-6">
                  <p className="text-sm text-bone-dim leading-relaxed mb-4 md:hidden">
                    {p.tagline}
                  </p>
                  <p className="text-sm text-bone-dim leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-2 text-sm text-bone-dim mb-4">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-12 md:col-span-5 md:pl-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">
                    {p.org} · {p.year}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 border border-line rounded-full text-bone-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-6 font-mono text-xs hover-underline text-accent"
                    >
                      <Github size={14} /> View source
                    </a>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
