import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { photo } from "@/lib/photos";
import { site, waLink } from "@/lib/site";
import { Marigold } from "./Ornaments";

/** THE INVITATION — opens like a card, then unfolds into the album. */
export function Hero() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const wrap = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) {
      setStep(7);
      return;
    }
    const timings = [40, 180, 320, 520, 760, 1020, 1240];
    const timers = timings.map((t, i) => window.setTimeout(() => setStep(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const h = window.innerHeight;
        setProgress(Math.min(1, Math.max(0, window.scrollY / h)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const on = (n: number) => step >= n;
  // scroll: the arch widens, the photograph outgrows the frame, maroon burns to paper
  const frameW = 320 + progress * 900;
  const radius = 200 * (1 - progress);

  return (
    <section
      ref={wrap}
      className="surface-maroon silk relative min-h-[100svh] overflow-hidden"
      aria-label="SM Photography — wedding photography and cinematography"
    >
      <div
        aria-hidden
        className="surface-paper pointer-events-none absolute inset-0 z-20"
        style={{ opacity: progress * progress, transition: "opacity 120ms linear" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col items-center justify-center px-5 py-28 text-center">
        <p
          className="meta text-gold transition-all duration-700"
          style={{ opacity: on(2) ? 1 : 0, transform: on(2) ? "none" : "translateY(8px)" }}
        >
          {site.name}
        </p>

        {/* architectural frame + photograph */}
        <div
          className="relative mx-auto mt-8 w-full"
          style={{
            maxWidth: `min(${frameW}px, 92vw)`,
            transition: "max-width 120ms linear",
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: progress > 0.5 ? "16 / 9" : "3 / 4",
              borderRadius: `${radius}px ${radius}px 4px 4px`,
              transition: "aspect-ratio 300ms linear, border-radius 120ms linear",
            }}
          >
            <img
              src={photo.hero.src}
              alt={photo.hero.alt}
              fetchPriority="high"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
              style={{
                clipPath: on(4) ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                transition: "clip-path 900ms cubic-bezier(0.22,1,0.36,1)",
                transform: `scale(${1.06 + progress * 0.12})`,
              }}
            />
          </div>

          <svg
            aria-hidden
            viewBox="0 0 100 133"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -inset-3"
            style={{ opacity: 1 - progress }}
          >
            <path
              d="M50 1C21 1 4 20 4 50v82h92V50C96 20 79 1 50 1Z"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              style={{
                strokeDasharray: 420,
                strokeDashoffset: on(3) ? 0 : 420,
                transition: "stroke-dashoffset 900ms cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </svg>

          <Marigold className="absolute -left-9 top-1/3 hidden text-gold/50 md:block" size={34} />
          <Marigold
            className="absolute -right-9 bottom-1/4 hidden text-saffron/50 md:block"
            size={26}
          />
        </div>

        <h1 className="display mt-10 text-paper text-[13vw] leading-[0.86] sm:text-[9vw] lg:text-[6.4rem]">
          {["For the days", "you'll never", "forget."].map((line, i) => (
            <span
              key={line}
              className="block transition-all duration-700"
              style={{
                opacity: on(5 + Math.min(i, 0)) && step >= 5 + i * 0 ? 1 : 0,
                transform: step >= 5 ? "none" : "translateY(16px)",
                transitionDelay: `${i * 130}ms`,
              }}
            >
              {i === 2 ? (
                <>
                  <span className="display-italic text-gold">forget</span>.
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <p
          className="meta mt-7 text-paper/70 transition-opacity duration-700"
          style={{ opacity: on(6) ? 1 : 0 }}
        >
          Wedding photography · Cinematography · Delhi NCR
        </p>

        <div
          className="mt-9 flex flex-col items-center gap-4 transition-all duration-700 sm:flex-row"
          style={{ opacity: on(7) ? 1 : 0, transform: on(7) ? "none" : "translateY(10px)" }}
        >
          <a
            href="#chapters"
            data-cursor="OPEN"
            className="meta bg-paper px-7 py-4 text-ink transition-colors hover:bg-gold"
          >
            Enter the stories
          </a>
          <a
            href={waLink(`Hi ${site.name}, is our wedding date available?`)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="ENQUIRE"
            className="meta border border-paper/40 px-7 py-4 text-paper transition-colors hover:border-gold hover:text-gold"
          >
            Check availability
          </a>
          <Link to="/stories" className="meta text-paper/60 underline-offset-8 hover:underline">
            From the album →
          </Link>
        </div>
      </div>
    </section>
  );
}
