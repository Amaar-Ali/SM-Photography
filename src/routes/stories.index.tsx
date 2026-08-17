import { createFileRoute, Link } from "@tanstack/react-router";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CornerBorder, GoldRule, Reveal, ArchClipDefs } from "@/components/site/Ornaments";
import { stories } from "@/lib/stories";

const title = "Wedding Stories — SM Photography";
const description =
  "Albums from real weddings photographed by SM Photography: the wedding day, the functions, and the portraits made before it all began.";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  return (
    <>
      <ArchClipDefs />
      <Cursor />
      <Nav solid />
      <main className="surface-paper pb-28 pt-36 md:pt-48">
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <p className="meta text-[var(--muted-foreground)]">The albums</p>
          <h1 className="display mt-5 text-6xl leading-[0.92] md:text-8xl">
            Stories,
            <br />
            <span className="display-italic">page by page.</span>
          </h1>
          <GoldRule className="mt-10" />

          <div className="mt-16 grid gap-14 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  to="/stories/$slug"
                  params={{ slug: s.slug }}
                  data-cursor="OPEN"
                  className="group block"
                >
                  <figure className="relative overflow-hidden">
                    <img
                      src={s.cover.src}
                      alt={s.cover.alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                    <CornerBorder className="m-3 text-gold opacity-70" />
                  </figure>
                  <p className="meta mt-4 text-[var(--muted-foreground)]">{s.meta}</p>
                  <h2 className="display mt-2 text-3xl">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {s.note}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
