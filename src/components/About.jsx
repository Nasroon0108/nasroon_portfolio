import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { profile } from "../data";

export default function About() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      id="about"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-6 md:px-10"
    >
      <SectionLabel
        n="01"
        label="Who / What"
        title={
          <>
            I ship <span className="italic">production</span> systems, from
            architecture <span className="italic">to</span> deployment.
          </>
        }
      />

      <div className="grid grid-cols-12 gap-8 lg:gap-14">
        {/* Portrait column */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <figure className="relative group">
            {/* Soft color glow behind the frame */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent-2/20 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Gradient border wrapper */}
            <div className="relative rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-accent/60 via-bone/10 to-accent-2/50 shadow-2xl shadow-accent/10">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-ink-2 aspect-[4/5]">
                {/* Backdrop pattern */}
                <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

                {imgOk ? (
                  <>
                    <img
                      src={profile.photo}
                      alt={`Portrait of ${profile.name}`}
                      onError={() => setImgOk(false)}
                      className="relative z-10 w-full h-full object-cover saturate-[0.85] contrast-105 transition-all duration-700 ease-out group-hover:saturate-125 group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Warm color wash overlay */}
                    <div
                      className="absolute inset-0 z-20 pointer-events-none mix-blend-soft-light opacity-80 group-hover:opacity-40 transition-opacity duration-700"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(232,255,94,0.28) 0%, rgba(255,91,58,0.22) 45%, rgba(10,10,10,0) 80%)",
                      }}
                    />

                    {/* Bottom vignette fade */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 z-20 pointer-events-none bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  </>
                ) : (
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="font-serif italic text-7xl text-accent leading-none">
                      N<span className="text-bone">F</span>
                    </div>
                    <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted max-w-[220px]">
                      Add your photo at{" "}
                      <span className="text-bone">public/photo.jpg</span> to
                      replace this placeholder
                    </div>
                  </div>
                )}

                {/* Corner ticks */}
                <span className="absolute top-4 left-4 w-3 h-3 border-t border-l border-bone/50 z-30" />
                <span className="absolute top-4 right-4 w-3 h-3 border-t border-r border-bone/50 z-30" />
                <span className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-bone/50 z-30" />
                <span className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-bone/50 z-30" />

                {/* Frame index */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.25em] text-bone/80 z-30">
                  FRAME · 001
                </div>

                {/* Signature chip */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-ink/40 border border-bone/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-bone/85">
                    On the record
                  </span>
                </div>
              </div>
            </div>

            {/* Caption strip */}
            <figcaption className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
              <span>{profile.name}</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {profile.location}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Copy + meta column */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-12 gap-8 lg:gap-14">
          <div className="col-span-12 lg:col-span-7 space-y-6 text-bone-dim text-base md:text-lg leading-relaxed">
            <p>
              I'm <span className="text-bone">Nasroon Fareeha</span>, a
              Full-Stack Software Engineer based in {profile.location}. As the
              sole developer of{" "}
              <span className="text-bone">GenX Accounts</span>, I independently
              owned every layer of a multi-tenant accounting platform — from a
              JWT-secured Laravel API to a React 19 SPA with real-time
              dashboards.
            </p>
            <p>
              On the research side, my undergraduate thesis fine-tuned{" "}
              <span className="text-bone italic">DistilBERT</span> for
              aspect-based sentiment analysis on Sri Lankan tourism reviews,
              landing at <span className="text-accent">~95% accuracy</span>{" "}
              across multi-lingual datasets.
            </p>
            <p>
              I care about clean architecture, secure defaults, and code that
              other engineers can pick up on day one.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l lg:border-line">
            <dl className="grid grid-cols-2 gap-y-8 gap-x-4">
              <Meta label="Based in" value={profile.location} />
              <Meta label="Timezone" value="UTC+5:30" />
              <Meta
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <Meta
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              />
              <Meta
                label="LinkedIn"
                value="nasroon-fareeha"
                href={profile.linkedin}
              />
              <Meta label="GitHub" value="Nasroon0108" href={profile.github} />
              <Meta label="Availability" value={profile.availability} />
              <Meta label="Languages" value="En · Ta · Si" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value, href }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5">
        {label}
      </dt>
      <dd className="text-sm md:text-base">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="hover-underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
