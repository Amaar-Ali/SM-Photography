import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { photo, type Photo } from "@/lib/photos";
import { GoldRule } from "./Ornaments";

/** Services as published by SM Photography. */
const services: { no: string; title: string; note: string; img: Photo }[] = [
  {
    no: "01",
    title: "Wedding Photography",
    note: "Full-day coverage, candid and traditional.",
    img: photo.ceremony1,
  },
  {
    no: "02",
    title: "Cinematography",
    note: "Teasers and wedding films.",
    img: photo.baraat2,
  },
  {
    no: "03",
    title: "NRI Wedding Photoshoot",
    note: "Weddings brought home from abroad.",
    img: photo.reception1,
  },
  {
    no: "04",
    title: "Ring Ceremony",
    note: "Engagements, start to finish.",
    img: photo.people1,
  },
  {
    no: "05",
    title: "Roka Ceremony",
    note: "The first function, with both families.",
    img: photo.haldi2,
  },
  {
    no: "06",
    title: "Pre-Wedding Stories",
    note: "Portraits before the wedding week.",
    img: photo.pre1,
  },
  {
    no: "07",
    title: "Birthday Celebrations",
    note: "Family events beyond the wedding.",
    img: photo.reception3,
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="surface-paper relative py-28 md:py-36">
      <div className="relative z-10 mx-auto max-w-[1300px] px-5 md:px-10">
        <p className="meta text-[var(--muted-foreground)]">What we capture</p>
        <GoldRule className="mt-6" />

        <div className="relative mt-10">
          <ul className="divide-y divide-[var(--border)]">
            {services.map((s, i) => (
              <li key={s.title}>
                <Link
                  to="/contact"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  data-cursor="ENQUIRE"
                  className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-6 transition-colors hover:text-[var(--maroon)]"
                >
                  <span className="meta w-8 text-[var(--muted-foreground)]">{s.no}</span>
                  <span className="display text-4xl md:text-6xl">{s.title}</span>
                  <span className="ml-auto text-xs text-[var(--muted-foreground)] md:text-sm">
                    {s.note}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* hover preview — desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-1/2 hidden w-[260px] -translate-y-1/2 transition-all duration-500 lg:block"
            style={{
              opacity: active === null ? 0 : 1,
              transform: `translateY(-50%) scale(${active === null ? 0.96 : 1})`,
            }}
          >
            {active !== null && (
              <img
                src={services[active]!.img.src}
                alt=""
                className="aspect-[3/4] w-full object-cover shadow-[0_24px_60px_-30px_oklch(0.28_0.093_16/0.7)]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
