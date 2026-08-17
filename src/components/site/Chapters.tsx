import { useEffect, useRef, useState } from "react";
import { photo, type Photo } from "@/lib/photos";
import { MehndiLine, Marigold, GoldRule } from "./Ornaments";

type Chapter = {
  id: string;
  no: string;
  title: string;
  words: string[];
  images: Photo[];
  tone: "paper" | "warm" | "saffron" | "ink" | "maroon";
};

const chapters: Chapter[] = [
  {
    id: "before",
    no: "01",
    title: "Before",
    words: ["Getting ready.", "Details.", "Anticipation."],
    images: [photo.before1, photo.before2, photo.before3],
    tone: "paper",
  },
  {
    id: "mehndi",
    no: "02",
    title: "Mehndi",
    words: ["Colour.", "Hands.", "Laughter."],
    images: [photo.mehndi1, photo.mehndi2],
    tone: "warm",
  },
  {
    id: "haldi",
    no: "03",
    title: "Haldi",
    words: ["Energy.", "Family.", "Chaos."],
    images: [photo.haldi1, photo.haldi2, photo.haldi3],
    tone: "saffron",
  },
  {
    id: "sangeet",
    no: "04",
    title: "Sangeet",
    words: ["Music.", "Dance.", "Movement."],
    images: [photo.sangeet1, photo.sangeet2, photo.sangeet3],
    tone: "ink",
  },
  {
    id: "baraat",
    no: "05",
    title: "Baraat",
    words: ["Celebration."],
    images: [photo.baraat1, photo.baraat2, photo.baraat3, photo.baraat4],
    tone: "maroon",
  },
  {
    id: "ceremony",
    no: "06",
    title: "The Ceremony",
    words: ["Ritual.", "Emotion.", "Family."],
    images: [photo.ceremony1, photo.ceremony2, photo.ceremony3],
    tone: "paper",
  },
  {
    id: "reception",
    no: "07",
    title: "Reception",
    words: ["Energy.", "Lights.", "Celebration."],
    images: [photo.reception1, photo.reception2, photo.reception3, photo.reception4],
    tone: "ink",
  },
];

const toneStyles: Record<Chapter["tone"], string> = {
  paper: "bg-paper text-ink",
  warm: "bg-[oklch(0.9_0.045_72)] text-ink",
  saffron: "bg-[oklch(0.88_0.075_78)] text-ink",
  ink: "surface-ink",
  maroon: "surface-maroon",
};

export function Chapters() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["index"]);
            setActive(i);
          }
        }
      },
      { threshold: 0.5 },
    );
    panels.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = chapters[active]!;

  return (
    <section
      id="chapters"
      aria-label="The chapters of an Indian wedding"
      className={`relative transition-colors duration-1000 ${toneStyles[current.tone]}`}
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* chapter index — sticky on desktop */}
          <div className="pt-24 lg:sticky lg:top-0 lg:h-screen lg:pt-32">
            <p className="meta opacity-60">The Chapters</p>
            <GoldRule className="mt-4 max-w-[180px]" />
            <ol className="mt-8 space-y-3">
              {chapters.map((c, i) => (
                <li key={c.id}>
                  <a
                    href={`#chapter-${c.id}`}
                    className="group flex items-baseline gap-4 py-1 transition-opacity"
                    style={{ opacity: i === active ? 1 : 0.4 }}
                  >
                    <span className="meta text-[10px]">{c.no}</span>
                    <span className="display text-3xl">{c.title}</span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-current transition-all duration-500"
                      style={{ opacity: i === active ? 0.6 : 0 }}
                    />
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-8 hidden max-w-[220px] text-sm leading-relaxed opacity-60 lg:block">
              Scroll to move through the day the way it actually happens — one function at a time.
            </p>
          </div>

          {/* chapter panels */}
          <div>
            {chapters.map((c, i) => (
              <div
                key={c.id}
                id={`chapter-${c.id}`}
                data-index={i}
                ref={(el) => {
                  panels.current[i] = el;
                }}
                className="flex min-h-[92svh] scroll-mt-0 flex-col justify-center py-20"
              >
                <ChapterPanel chapter={c} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterPanel({ chapter }: { chapter: Chapter }) {
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e?.isIntersecting && setShown(true),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const layouts: Record<string, string> = {
    before: "grid gap-4 md:grid-cols-[1.5fr_1fr] md:grid-rows-2",
    mehndi: "grid gap-6 md:grid-cols-2",
    haldi: "grid gap-4 md:grid-cols-3",
    sangeet: "grid gap-3 md:grid-cols-3",
    baraat: "grid gap-3 md:grid-cols-4",
    ceremony: "grid gap-6",
    reception: "grid gap-3 md:grid-cols-2",
  };

  return (
    <div ref={ref} data-shown={shown} className="reveal-up">
      <header className="mb-7 flex flex-wrap items-end gap-x-6 gap-y-2">
        <span className="meta opacity-60">{chapter.no}</span>
        <h2 className="display text-6xl md:text-8xl">
          {chapter.title === "The Ceremony" ? (
            <>
              The <span className="display-italic">Ceremony</span>
            </>
          ) : (
            chapter.title
          )}
        </h2>
        <p className="display-italic text-xl opacity-70">{chapter.words.join(" ")}</p>
      </header>

      {chapter.id === "mehndi" && (
        <MehndiLine className="mb-6 h-8 w-full max-w-md text-[oklch(0.42_0.09_40)]" />
      )}
      {chapter.id === "haldi" && (
        <div aria-hidden className="mb-4 flex gap-4 text-saffron">
          <Marigold size={26} />
          <Marigold size={18} className="mt-3" />
          <Marigold size={22} className="mt-1" />
        </div>
      )}

      <div className={layouts[chapter.id] ?? "grid gap-4 md:grid-cols-2"}>
        {chapter.images.map((img, i) => (
          <figure
            key={img.src}
            data-cursor="VIEW"
            className={`overflow-hidden ${
              chapter.id === "before" && i === 0 ? "md:row-span-2" : ""
            } ${chapter.id === "ceremony" && i === 0 ? "aspect-[16/10]" : ""} ${
              chapter.id === "baraat" && i === 1 ? "md:col-span-2 md:-mt-8" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
            />
          </figure>
        ))}
      </div>

      {chapter.id === "sangeet" && (
        <p className="display mt-10 text-5xl md:text-7xl">
          Then everyone <span className="display-italic text-saffron">danced</span>.
        </p>
      )}
      {chapter.id === "ceremony" && (
        <p className="display mt-10 max-w-xl text-5xl md:text-6xl">
          And then everything got <span className="display-italic">quiet</span>.
        </p>
      )}
      {chapter.id === "reception" && (
        <p className="display mt-10 text-6xl md:text-8xl">
          One more <span className="display-italic text-gold">song</span>.
        </p>
      )}
    </div>
  );
}
