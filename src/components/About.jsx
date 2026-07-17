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
          <figure className="relative">
            <div className="relative overflow-hidden bg-ink-2 border border-line aspect-[4/5]">
              {/* Backdrop pattern in case image is transparent */}
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

              {imgOk ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  onError={() => setImgOk(false)}
                  className="relative z-10 w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 hover:contrast-100 transition-all duration-700 ease-out"
                  loading="lazy"
                />
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
              <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bone/40" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-bone/40" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-bone/40" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bone/40" />

              {/* Frame index */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-bone/70">
                FRAME · 001
              </div>
            </div>

            {/* Caption strip */}
            <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
              <span>{profile.name}</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
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
