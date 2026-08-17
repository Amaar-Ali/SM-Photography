import { Link } from "@tanstack/react-router";
import { photo } from "@/lib/photos";
import { site, testimonials } from "@/lib/site";
import { stories } from "@/lib/stories";
import { CornerBorder, GoldRule, MehndiLine, Reveal } from "./Ornaments";

/* 11 — INTRODUCTION */
export function Introduction() {
  return (
    <section className="surface-paper relative py-28 md:py-40">
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-10">
        <div>
          <GoldRule className="max-w-[140px]" />
          <Reveal>
            <h2 className="display mt-8 text-5xl leading-[0.95] md:text-7xl">
              Every wedding
              <br />
              has a hundred
              <br />
              <span className="display-italic">stories.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-9 max-w-md text-[15px] leading-[1.9] text-[var(--muted-foreground)]">
              The bride getting ready behind closed doors. The father trying not to cry. Cousins
              taking over the dance floor. The friend who travelled across the country. The hand you
              reach for when everything finally becomes real.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="display mt-10 text-3xl md:text-4xl">
              We’re there for <span className="display-italic">all of them.</span>
            </p>
          </Reveal>
        </div>

        <Reveal mask className="relative">
          <figure className="relative md:-mb-16 md:ml-8">
            <img
              src={photo.candid4.src}
              alt={photo.candid4.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="meta mt-3 text-[var(--muted-foreground)]">
              A minute before the ceremony
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* 20 — THE PEOPLE */
export function ThePeople() {
  return (
    <section className="surface-paper relative py-28 md:py-36">
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <h2 className="display max-w-3xl text-5xl leading-[0.95] md:text-8xl">
            A wedding is never
            <br />
            just <span className="display-italic">two people.</span>
          </h2>
        </Reveal>
        <MehndiLine className="mt-8 h-8 w-full max-w-lg text-[oklch(0.45_0.08_30)]" />

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          <Reveal mask className="md:col-span-7">
            <img
              src={photo.people1.src}
              alt={photo.people1.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <Reveal mask delay={100} className="md:col-span-5 md:mt-14">
            <img
              src={photo.people3.src}
              alt={photo.people3.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal mask delay={60} className="md:col-span-4">
            <img
              src={photo.people4.src}
              alt={photo.people4.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
          <Reveal mask delay={160} className="md:col-span-8 md:-mt-10">
            <img
              src={photo.people2.src}
              alt={photo.people2.alt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>
        </div>

        <p className="mt-12 max-w-lg text-[15px] leading-[1.9] text-[var(--muted-foreground)]">
          Parents, siblings, grandparents, the children running between chairs, the friends who
          arrived a day early. We photograph the relationships in the room, not only the couple in
          the centre of it.
        </p>
      </div>
    </section>
  );
}

/* 21 — CANDID GRID + 22 — SIGNATURE STATEMENT */
export function CandidAndStatement() {
  const items = [
    { label: "The unplanned", img: photo.candid1, cls: "md:col-span-5 md:row-span-2" },
    { label: "The laughter", img: photo.sangeet3, cls: "md:col-span-4 md:mt-16" },
    { label: "The look", img: photo.candid2, cls: "md:col-span-3" },
    { label: "The chaos", img: photo.reception3, cls: "md:col-span-4" },
    { label: "The quiet", img: photo.candid3, cls: "md:col-span-3 md:-mt-10" },
  ];

  return (
    <section className="surface-ink relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <p className="meta text-gold">Candid</p>
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          {items.map((it, i) => (
            <Reveal mask key={it.label} delay={i * 80} className={it.cls}>
              <figure data-cursor="VIEW">
                <img
                  src={it.img.src}
                  alt={it.img.alt}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: i % 2 === 0 ? "3/4" : "4/3" }}
                />
                <figcaption className="meta mt-3 text-paper/50">{it.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-28">
          <h2 className="display text-paper text-[13vw] leading-[0.82] md:text-[9vw]">
            We don’t
            <br />
            photograph
            <br />
            the perfect moment.
          </h2>
          <img
            src={photo.mehndi2.src}
            alt={photo.mehndi2.alt}
            loading="lazy"
            className="pointer-events-none absolute right-0 top-1/4 hidden w-[26%] object-cover md:block"
          />
          <p className="display-italic mt-8 text-3xl text-gold md:text-5xl">
            We photograph the real one.
          </p>
        </div>
      </div>
    </section>
  );
}

/* 23 — FEATURED STORIES */
export function FromTheAlbum() {
  return (
    <section id="stories" className="surface-paper relative py-28 md:py-36">
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-5xl md:text-7xl">
            From the <span className="display-italic">album</span>
          </h2>
          <Link to="/stories" className="meta underline-offset-8 hover:underline">
            All stories →
          </Link>
        </div>
        <GoldRule className="mt-8" />

        <div className="mt-14 space-y-24">
          {stories.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                to="/stories/$slug"
                params={{ slug: s.slug }}
                data-cursor="OPEN"
                className={`group grid items-end gap-6 md:grid-cols-12 ${
                  i % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <figure className="relative md:col-span-8 [direction:ltr]">
                  <img
                    src={s.cover.src}
                    alt={s.cover.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                  />
                  <CornerBorder className="m-3 text-gold opacity-70" />
                </figure>
                <div className="md:col-span-4 [direction:ltr]">
                  <p className="meta text-[var(--muted-foreground)]">{s.meta}</p>
                  <h3 className="display mt-3 text-4xl md:text-5xl">{s.title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {s.note}
                  </p>
                  <span className="meta mt-6 inline-block border-b border-gold pb-1">
                    Open story →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 27 — WHY US */
export function WhenToStepIn() {
  return (
    <section className="surface-maroon silk relative py-28 md:py-40">
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-16 px-5 md:grid-cols-2 md:px-10">
        <Reveal>
          <h2 className="display text-paper text-5xl md:text-7xl">
            We know when
            <br />
            to <span className="display-italic text-gold">step in.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-[1.9] text-paper/70">
            When the room needs direction — the family portrait no one has organised, the light
            that’s about to go, the entry that only happens once.
          </p>
        </Reveal>
        <Reveal delay={140} className="md:mt-28">
          <h2 className="display text-paper text-5xl md:text-7xl">
            And when
            <br />
            to <span className="display-italic text-gold">disappear.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-[1.9] text-paper/70">
            When the moment belongs entirely to you, and the best thing a photographer can do is
            stand further away with a longer lens.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 28 — ABOUT + 30 — TRUST */
export function About() {
  return (
    <section id="about" className="surface-paper relative py-28 md:py-36">
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <Reveal mask>
          <img
            src={photo.ceremony2.src}
            alt={photo.ceremony2.alt}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <div>
          <p className="meta text-[var(--muted-foreground)]">Behind the lens</p>
          <Reveal>
            <h2 className="display mt-5 text-5xl md:text-7xl">
              Simple wedding stories,
              <br />
              <span className="display-italic">inventive yet extraordinary.</span>
            </h2>
          </Reveal>
          <div className="mt-8 max-w-lg space-y-5 text-[15px] leading-[1.95] text-[var(--muted-foreground)]">
            <p>
              SM Photography believes a wedding should be about the couple — not only about customs,
              or what the family wants, or a series of posed pictures under odd lighting.
            </p>
            <p>
              From straightforward coverage to documentary-style albums, we work in a fun, offbeat
              candid style: emotions, genuine moments, and the small unnoticed things that show how
              you actually are — authentic and undisguised.
            </p>
            <p>
              Clear pricing, defined deliverables and a stated delivery date. No hidden charges.
            </p>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
            {[
              ["Based in", "Jaipur"],
              ["Working across", "Delhi NCR & India"],
              ["We shoot", "Photography + Films"],
              ["Studio hours", site.hours],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="meta text-[10px] text-[var(--muted-foreground)]">{k}</dt>
                <dd className="display mt-2 text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 29 — TESTIMONIALS as album quotes */
export function Quotes() {
  return (
    <section className="surface-paper relative border-t border-[var(--border)] py-24">
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-10">
        <p className="meta text-[var(--muted-foreground)]">In their words</p>
        <div className="mt-12 space-y-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="grid gap-5 md:grid-cols-[1fr_220px] md:items-end">
                <blockquote className="display text-2xl leading-snug md:text-4xl">
                  <span className="display-italic text-gold">“</span>
                  {t.quote}
                  <span className="display-italic text-gold">”</span>
                </blockquote>
                <figcaption className="meta text-[var(--muted-foreground)]">
                  {t.name}
                  <span className="mt-2 block text-[10px] tracking-[0.2em] opacity-70">
                    {t.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
