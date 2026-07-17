import SectionLabel from "./SectionLabel";
import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-6 md:px-10"
    >
      <SectionLabel
        n="03"
        label="Work / Experience"
        title={
          <>
            Building where <span className="italic">it counts</span>.
          </>
        }
      />

      <div className="space-y-16 md:space-y-24">
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-6 md:gap-10 pb-16 border-b border-line last:border-b-0 last:pb-0"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs text-muted mb-1">
                {job.period}
              </div>
              <div className="font-mono text-xs text-muted">
                {job.location}
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-serif text-3xl md:text-4xl">
                  {job.company}
                </h3>
                <span className="hidden md:block h-px flex-1 bg-line self-end mb-3" />
              </div>
              <div className="text-bone-dim mb-2">{job.role}</div>
              <div className="text-sm text-muted italic mb-8">
                {job.subtitle}
              </div>

              <ul className="space-y-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-4 text-bone-dim leading-relaxed">
                    <span className="font-mono text-xs text-accent shrink-0 mt-1.5">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
