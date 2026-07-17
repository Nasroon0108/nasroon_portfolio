import SectionLabel from "./SectionLabel";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-6 md:px-10">
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

      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-7 space-y-6 text-bone-dim text-base md:text-lg leading-relaxed">
          <p>
            I'm <span className="text-bone">Nasroon Fareeha</span>, a Full-Stack
            Software Engineer based in {profile.location}. As the sole
            developer of <span className="text-bone">GenX Accounts</span>, I
            independently owned every layer of a multi-tenant accounting
            platform — from a JWT-secured Laravel API to a React 19 SPA with
            real-time dashboards.
          </p>
          <p>
            On the research side, my undergraduate thesis fine-tuned{" "}
            <span className="text-bone italic">DistilBERT</span> for
            aspect-based sentiment analysis on Sri Lankan tourism reviews,
            landing at <span className="text-accent">~95% accuracy</span> across
            multi-lingual datasets.
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
            <Meta label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Meta label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g,"")}`} />
            <Meta label="LinkedIn" value="nasroon-fareeha" href={profile.linkedin} />
            <Meta label="GitHub" value="Nasroon0108" href={profile.github} />
            <Meta label="Availability" value={profile.availability} />
            <Meta label="Languages" value="En · Ta · Si" />
          </dl>
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
          <a href={href} target="_blank" rel="noreferrer" className="hover-underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
