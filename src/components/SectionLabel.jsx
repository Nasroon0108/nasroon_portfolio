export default function SectionLabel({ n, label, title, kicker }) {
  return (
    <div className="mb-12 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-accent">({n})</span>
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {label}
        </span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-4xl">
        {title}
      </h2>
      {kicker && (
        <p className="mt-6 max-w-2xl text-bone-dim text-base md:text-lg leading-relaxed">
          {kicker}
        </p>
      )}
    </div>
  );
}
