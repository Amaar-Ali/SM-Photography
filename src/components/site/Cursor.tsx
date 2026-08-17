import { useEffect, useRef, useState } from "react";

/** Desktop-only album cursor. Disabled on touch and with reduced motion. */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !calm);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let x = -100;
    let y = -100;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      setLabel(target ? ((target as HTMLElement).dataset["cursor"] ?? "") : "");
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
      }
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="meta -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60 bg-ink/70 text-paper backdrop-blur-[2px] transition-all duration-300"
        style={{
          width: label ? 82 : 12,
          height: label ? 82 : 12,
          fontSize: label ? 9 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {label}
      </div>
    </div>
  );
}
