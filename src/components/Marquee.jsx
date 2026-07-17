import { marqueeWords } from "../data";
import { Star } from "lucide-react";

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <section className="relative border-y border-line py-6 md:py-8 overflow-hidden bg-ink">
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-10 px-5 md:px-8">
            <span className="font-serif italic text-3xl md:text-5xl text-bone">{w}</span>
            <Star size={16} className="text-accent shrink-0" fill="currentColor" />
          </div>
        ))}
      </div>
    </section>
  );
}
