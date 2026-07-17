import { education, certifications, additional } from "../data";
import { GraduationCap, Award, Heart, Globe } from "lucide-react";

export default function Education() {
  return (
    <section className="relative py-24 md:py-40 border-t border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Education */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs text-accent">(EDU)</span>
              <span className="h-px flex-1 bg-line" />
              <GraduationCap size={16} className="text-muted" />
            </div>
            {education.map((e, i) => (
              <div key={i} className="mb-10">
                <div className="font-mono text-xs text-muted mb-2">
                  {e.period}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-2">
                  {e.degree}
                </h3>
                <div className="text-bone-dim italic">{e.school}</div>
              </div>
            ))}

            <div className="mt-10 pt-10 border-t border-line">
              <div className="flex items-center gap-3 mb-6">
                <Heart size={14} className="text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Volunteering
                </span>
              </div>
              <p className="text-bone-dim leading-relaxed">
                {additional.volunteering}
              </p>

              <div className="mt-8 flex items-center gap-3 mb-4">
                <Globe size={14} className="text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Languages
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {additional.languages.map((l) => (
                  <span
                    key={l}
                    className="text-xs font-mono px-3 py-1 border border-line rounded-full"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-span-12 lg:col-span-6 lg:pl-8 lg:border-l lg:border-line">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs text-accent">(CERT)</span>
              <span className="h-px flex-1 bg-line" />
              <Award size={16} className="text-muted" />
            </div>

            <ul className="space-y-6">
              {certifications.map((c, i) => (
                <li
                  key={i}
                  className="group flex items-baseline gap-6 py-4 border-b border-line last:border-b-0"
                >
                  <span className="font-mono text-xs text-muted w-10">
                    {c.year}
                  </span>
                  <div className="flex-1">
                    <div className="font-serif text-xl md:text-2xl group-hover:text-accent transition-colors">
                      {c.name}
                    </div>
                    <div className="text-sm text-bone-dim italic mt-1">
                      {c.issuer}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-10 border-t border-line">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4">
                Soft Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {additional.soft.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1 border border-line rounded-full text-bone-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
