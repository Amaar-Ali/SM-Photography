import { photo } from "@/lib/photos";
import { films } from "@/lib/site";
import { Reveal } from "./Ornaments";

const posters = [photo.candid1, photo.baraat3];

export function Films() {
  return (
    <section id="films" className="surface-ink relative py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <h2 className="display text-paper text-5xl md:text-8xl">
            Some stories
            <br />
            should <span className="display-italic text-gold">move.</span>
          </h2>
        </Reveal>
        <p className="mt-6 max-w-md text-sm leading-[1.9] text-paper/60">
          Wedding films shot alongside the photography, cut as teasers you’ll actually rewatch.
          Sound on when you’re ready — nothing plays on its own.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {films.map((f, i) => (
            <Reveal key={f.url} delay={i * 100}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="PLAY"
                className="group block"
              >
                <figure className="relative overflow-hidden">
                  <img
                    src={posters[i]!.src}
                    alt={`Still frame from the film ${f.title}`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover brightness-[0.72] transition-all duration-[1200ms] group-hover:scale-[1.03] group-hover:brightness-90"
                  />
                  <span aria-hidden className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/70 text-paper transition-transform duration-500 group-hover:scale-110">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor">
                        <path d="M0 0l18 10L0 20z" />
                      </svg>
                    </span>
                  </span>
                </figure>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="display text-3xl text-paper">{f.title}</h3>
                  <p className="meta text-paper/50">
                    {f.kind} · {f.duration}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
