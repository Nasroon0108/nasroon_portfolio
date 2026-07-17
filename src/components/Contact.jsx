import { profile } from "../data";
import { ArrowUpRight, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="font-mono text-xs text-accent">(06)</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Get in touch
          </span>
        </div>

        <h2 className="font-serif font-light leading-[0.9] tracking-tight text-[13vw] md:text-[9vw]">
          <span className="block italic">Let's build</span>
          <span className="block">
            something<span className="text-accent">.</span>
          </span>
        </h2>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <p className="text-bone-dim text-lg md:text-xl leading-relaxed max-w-xl">
              I'm available for full-time engineering roles, freelance
              full-stack builds, and interesting ML/NLP work. The best way to
              reach me is email.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-baseline gap-3 mt-8"
            >
              <span className="font-serif italic text-3xl md:text-5xl hover-underline">
                {profile.email}
              </span>
              <ArrowUpRight
                className="text-accent group-hover:rotate-45 transition-transform"
                size={28}
              />
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 md:pl-8 md:border-l md:border-line">
            <div className="grid grid-cols-1 gap-4">
              <ContactRow
                icon={<Mail size={16} />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone size={16} />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<Linkedin size={16} />}
                label="LinkedIn"
                value="nasroon-fareeha"
                href={profile.linkedin}
              />
              <ContactRow
                icon={<Github size={16} />}
                label="GitHub"
                value="Nasroon0108"
                href={profile.github}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between py-5 border-b border-line hover:border-accent transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="text-muted group-hover:text-accent transition-colors">
          {icon}
        </span>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {label}
          </div>
          <div className="text-base md:text-lg">{value}</div>
        </div>
      </div>
      <ArrowUpRight
        className="text-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
        size={18}
      />
    </a>
  );
}
