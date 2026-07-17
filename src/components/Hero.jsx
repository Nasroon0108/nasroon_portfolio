import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile, stats } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 md:pt-28 pb-16 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-accent-2/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-mono text-muted mb-10 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OPEN TO WORK — 2026</span>
          </div>
          <span className="hidden md:inline">/</span>
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span>{profile.location.toUpperCase()}</span>
          </div>
          <span className="hidden md:inline">/</span>
          <div>UTC+5:30</div>
        </div>

        {/* Big headline */}
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-9">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
              className="font-serif font-light leading-[0.9] tracking-tight text-[15vw] md:text-[11vw] lg:text-[9.5vw]"
            >
              <span className="block">
                <span className="italic">Software</span>
                <span className="text-muted"> /</span>
              </span>
              <span className="block">
                Engineer<span className="text-accent">.</span>
              </span>
            </motion.h1>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:pb-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-bone-dim text-sm md:text-base leading-relaxed max-w-sm"
            >
              {profile.summary}
            </motion.p>
          </div>
        </div>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-line pt-8"
        >
          <div>
            <div className="text-xs font-mono text-muted mb-3">CURRENTLY</div>
            <div className="font-serif text-2xl md:text-3xl">
              Full-Stack Intern <span className="italic text-muted">at</span> AI GENERIX
            </div>
          </div>

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 self-start md:self-auto"
          >
            <span className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-line group-hover:border-accent transition-colors">
              <ArrowDownRight
                className="text-bone group-hover:text-accent transition-all group-hover:rotate-12"
                size={22}
              />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
              View <br /> Work
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
              className="bg-ink px-5 py-6 md:py-8"
            >
              <div className="font-serif text-3xl md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
