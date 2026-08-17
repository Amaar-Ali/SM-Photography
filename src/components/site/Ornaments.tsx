import { useEffect, useRef, useState, type ReactNode } from "react";

/** Reveal-on-scroll primitive. Sets data-shown="true" once in view. */
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  mask = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  mask?: boolean;
  as?: "div" | "section" | "figure" | "li" | "p" | "span";
}) {
  const { ref, shown } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${mask ? "reveal-mask" : "reveal-up"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** MOTIF 05 — thin gold rule with a centred diamond. */
export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-3 ${className}`}>
      <span className="thread flex-1" />
      <svg width="9" height="9" viewBox="0 0 9 9" className="shrink-0">
        <path d="M4.5 0 9 4.5 4.5 9 0 4.5Z" fill="var(--gold)" opacity="0.85" />
      </svg>
      <span className="thread flex-1" />
    </div>
  );
}

/** MOTIF 01 — architectural arch used to frame photography. */
export function ArchFrame({
  children,
  className = "",
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "ink";
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="overflow-hidden"
        style={{ clipPath: "url(#sm-arch-clip)", borderRadius: "999px 999px 6px 6px" }}
      >
        {children}
      </div>
      <svg
        aria-hidden
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-[10px]"
      >
        <path
          d="M50 2C22 2 6 22 6 52v86h88V52C94 22 78 2 50 2Z"
          fill="none"
          stroke={tone === "gold" ? "var(--gold)" : "var(--ink)"}
          strokeWidth="0.4"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/** MOTIF 02 — a fine mehndi line that draws itself. */
export function MehndiLine({ className = "" }: { className?: string }) {
  const { ref, shown } = useInView<SVGSVGElement>(0.4);
  return (
    <svg
      ref={ref}
      aria-hidden
      data-shown={shown}
      viewBox="0 0 320 40"
      className={`draw-line overflow-visible ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
    >
      <path d="M2 20c30 0 30-14 52-14s22 28 44 28 24-28 46-28 24 28 46 28 24-14 52-14" />
      <circle cx="160" cy="20" r="3.4" />
      <path d="M160 8.5c4 3.5 4 8 0 11.5M160 31.5c-4-3.5-4-8 0-11.5" />
      <circle cx="6" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="314" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** MOTIF 03 — four-corner invitation border. */
export function CornerBorder({ className = "" }: { className?: string }) {
  const corner = (
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M39 1H9C4.6 1 1 4.6 1 9v30" />
      <path d="M33 7h-2M7 33v-2" opacity="0.6" />
      <circle cx="7" cy="7" r="2" />
    </svg>
  );
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="absolute left-0 top-0">{corner}</span>
      <span className="absolute right-0 top-0 rotate-90">{corner}</span>
      <span className="absolute bottom-0 right-0 rotate-180">{corner}</span>
      <span className="absolute bottom-0 left-0 -rotate-90">{corner}</span>
    </div>
  );
}

/** MOTIF 04 — abstract marigold geometry. */
export function Marigold({ className = "", size = 46 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`petal ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="24"
          cy="14"
          rx="4.2"
          ry="9"
          transform={`rotate(${i * 45} 24 24)`}
          opacity="0.75"
        />
      ))}
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" opacity="0.9" />
    </svg>
  );
}

/** Shared clip path for arch-framed photography. */
export function ArchClipDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <clipPath id="sm-arch-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5 0C0.19 0 0 0.15 0 0.36V1H1V0.36C1 0.15 0.81 0 0.5 0Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
