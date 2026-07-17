import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hasFine, setHasFine] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setHasFine(mq.matches);
    const listener = (e) => setHasFine(e.matches);
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);

  useEffect(() => {
    if (!hasFine) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e) => {
      const t = e.target;
      const isLink = t.closest("a, button, [role='button']");
      if (ringRef.current) {
        ringRef.current.style.width = isLink ? "56px" : "28px";
        ringRef.current.style.height = isLink ? "56px" : "28px";
        ringRef.current.style.borderColor = isLink ? "var(--color-accent)" : "rgba(245,244,239,0.4)";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [hasFine]);

  if (!hasFine) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[80] w-1.5 h-1.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2"
        style={{ transition: "background-color 0.2s" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[80] w-7 h-7 rounded-full border border-bone/40 -translate-x-1/2 -translate-y-1/2"
        style={{ transition: "width 0.25s, height 0.25s, border-color 0.25s" }}
      />
    </>
  );
}
