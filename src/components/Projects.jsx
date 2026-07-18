import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
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
        kicker={`${projects.length} projects — from production SaaS to research prototypes and design studies.`}
      />

      <ul className="border-t border-line">
        {projects.map((p) => {
          const primary = p.demo || p.link;
          return (
            <li
              key={p.idx}
              onMouseEnter={() => setHovered(p.idx)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-b border-line"
            >
              <a
                href={primary || "#"}
                target={primary ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(e) => !primary && e.preventDefault()}
                className="block py-8 md:py-10 transition-colors"
              >
                {/* Row */}
                <div className="grid grid-cols-12 gap-4 items-baseline relative z-10">
                  <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted">
                    {p.idx}
                  </div>

                  <div className="col-span-10 md:col-span-6">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight transition-colors group-hover:text-accent">
                        {p.title}
                      </h3>
                      {p.demo && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 rounded-full px-2 py-0.5">
                          <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block col-span-3 text-sm text-bone-dim">
                    {p.tagline}
                  </div>

                  <div className="hidden md:flex col-span-2 items-center justify-end gap-3 text-muted">
                    <span className="font-mono text-xs">{p.year}</span>
                    <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                      {primary ? <ArrowUpRight size={16} /> : <Github size={14} />}
                    </span>
                  </div>
                </div>

                {/* Expanded detail */}
                <div
                  className={`grid grid-cols-12 gap-4 overflow-hidden transition-all duration-500 ${
                    hovered === p.idx
                      ? "max-h-[600px] opacity-100 mt-6"
                      : "md:max-h-0 md:opacity-0 md:mt-0 max-h-[600px] opacity-100 mt-4"
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

                    {(p.link || p.demo) && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.demo && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(p.demo, "_blank", "noopener");
                            }}
                            className="inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-ink transition-colors cursor-pointer"
                          >
                            <ExternalLink size={12} /> Live demo
                          </span>
                        )}
                        {p.link && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(p.link, "_blank", "noopener");
                            }}
                            className="inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full border border-line hover:border-bone text-bone-dim hover:text-bone transition-colors cursor-pointer"
                          >
                            <Github size={12} /> Source
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {/* View all on GitHub */}
      <div className="mt-14 flex justify-center">
        <a
          href="https://github.com/Nasroon0108"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          <span className="h-px w-10 bg-line group-hover:bg-accent transition-colors" />
          <Github size={14} />
          <span>View all repositories on GitHub</span>
          <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          <span className="h-px w-10 bg-line group-hover:bg-accent transition-colors" />
        </a>
      </div>
    </section>
  );
}
