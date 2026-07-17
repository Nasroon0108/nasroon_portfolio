import SectionLabel from "./SectionLabel";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-40 border-t border-line bg-ink-2/30"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel
          n="02"
          label="Stack / Tools"
          title={
            <>
              The <span className="italic">arsenal</span>.
            </>
          }
          kicker="Languages, frameworks, and tooling I reach for. Everything below is battle-tested in shipped projects, not just tutorials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {skills.map((s, i) => (
            <div
              key={s.group}
              className="bg-ink p-6 md:p-8 group hover:bg-ink-2 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif text-xl md:text-2xl">{s.group}</h3>
                <span className="font-mono text-[10px] text-muted">
                  0{i + 1}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 border border-line rounded-full text-bone-dim group-hover:border-line/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
