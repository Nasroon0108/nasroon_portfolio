import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-lg">
            Nasroon<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-xs text-muted">
            © {year} — All good things.
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover-underline">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover-underline">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover-underline">
            Email
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover-underline uppercase tracking-widest"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
