import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArchClipDefs, GoldRule, MehndiLine, Reveal } from "@/components/site/Ornaments";
import { getStory, stories } from "@/lib/stories";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Story unavailable — SM Photography" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.story.title} — SM Photography`;
    const d = loaderData.story.note;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:image", content: loaderData.story.cover.src },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: loaderData.story.cover.src },
      ],
    };
  },
  notFoundComponent: StoryNotFound,
  component: StoryPage,
});

function StoryNotFound() {
  return (
    <>
      <Nav />
      <main className="surface-paper flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <h1 className="display text-5xl">That story isn’t here</h1>
        <Link to="/stories" className="meta mt-6 border-b border-gold pb-1">
          Back to all stories
        </Link>
      </main>
    </>
  );
}

function StoryPage() {
  const { story } = Route.useLoaderData();
  const next = stories[(stories.findIndex((s) => s.slug === story.slug) + 1) % stories.length]!;

  return (
    <>
      <ArchClipDefs />
      <Cursor />
      <Nav />
      <main>
        <header className="relative h-[80vh] min-h-[520px] overflow-hidden">
          <img
            src={story.cover.src}
            alt={story.cover.alt}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.62]"
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1500px] px-5 pb-14 md:px-10">
            <p className="meta text-gold">{story.meta}</p>
            <h1 className="display text-paper mt-4 text-6xl leading-[0.9] md:text-8xl">
              {story.title}
            </h1>
            <p className="mt-4 max-w-md text-sm text-paper/75">{story.note}</p>
          </div>
        </header>

        <div className="surface-paper relative py-24">
          <div className="relative z-10 mx-auto max-w-[1300px] px-5 md:px-10">
            {story.sequence.map((part, pi) => (
              <section key={part.caption} className="mb-24">
                <div className="flex items-center gap-6">
                  <h2 className="display text-3xl md:text-5xl">{part.caption}</h2>
                  <MehndiLine className="hidden h-6 flex-1 text-[oklch(0.45_0.08_30)] md:block" />
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {part.images.map((img, i) => (
                    <Reveal
                      mask
                      key={img.src}
                      delay={i * 90}
                      className={i === 0 && part.images.length === 3 ? "md:col-span-2" : ""}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading={pi === 0 && i === 0 ? "eager" : "lazy"}
                        className="w-full object-cover"
                        style={{
                          aspectRatio: i === 0 && part.images.length === 3 ? "16/9" : "4/5",
                        }}
                      />
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}

            <GoldRule />
            <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
              <Link to="/stories" className="meta text-[var(--muted-foreground)]">
                ← All stories
              </Link>
              <Link to="/stories/$slug" params={{ slug: next.slug }} className="text-right">
                <span className="meta text-[var(--muted-foreground)]">Next story</span>
                <span className="display mt-2 block text-4xl">{next.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
