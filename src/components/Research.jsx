import SectionLabel from "./SectionLabel";
import { research } from "../data";
import { Sparkles } from "lucide-react";

export default function Research() {
  return (
    <section
      id="research"
      className="relative py-24 md:py-40 border-t border-line bg-ink-2/30"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel
          n="04"
          label="Research / ML"
          title={
            <>
              Teaching machines to <span className="italic">read reviews</span>.
            </>
          }
        />

        {research.map((r, i) => (
          <div
            key={i}
            className="relative border border-line bg-ink p-8 md:p-14 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line font-mono text-[10px] uppercase tracking-widest text-accent mb-6">
                  <Sparkles size={12} />
                  {r.kind}
                </div>
                <div className="font-serif italic text-6xl md:text-8xl text-accent leading-none">
                  95<span className="text-3xl md:text-5xl align-top">%</span>
                </div>
                <div className="mt-3 text-xs font-mono uppercase tracking-widest text-muted">
                  ABSA accuracy · multi-lingual
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l md:border-line">
                <div className="font-mono text-xs text-muted mb-2">
                  {r.org} · {r.period}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
                  {r.title}
                </h3>
                <ul className="space-y-4 text-bone-dim leading-relaxed">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4">
                      <span className="text-accent shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["DistilBERT", "HuggingFace", "TensorFlow", "Keras", "Python", "NLP", "ABSA"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 border border-line rounded-full text-bone-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
