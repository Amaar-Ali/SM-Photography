import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Enquiry } from "@/components/site/Enquiry";
import { ArchClipDefs, GoldRule } from "@/components/site/Ornaments";
import { site } from "@/lib/site";

const title = "Contact SM Photography — Wedding Enquiries";
const description =
  "Enquire about wedding photography and films with SM Photography. Call +91 70233 36664, email Dasman702@gmail.com, or send your dates on WhatsApp.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ArchClipDefs />
      <Cursor />
      <Nav />
      <main>
        <section className="surface-paper pb-20 pt-36 md:pt-48">
          <div className="relative z-10 mx-auto max-w-[1300px] px-5 md:px-10">
            <p className="meta text-[var(--muted-foreground)]">Contact</p>
            <h1 className="display mt-5 text-6xl leading-[0.92] md:text-8xl">
              Let’s begin
              <br />
              <span className="display-italic">your album.</span>
            </h1>
            <GoldRule className="mt-10" />

            <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="meta text-[var(--muted-foreground)]">Call</dt>
                <dd className="display mt-3 text-2xl">
                  <a href={`tel:${site.phonePrimary}`}>{site.phonePrimaryLabel}</a>
                  <br />
                  <a href={`tel:${site.phoneSecondary}`}>{site.phoneSecondaryLabel}</a>
                </dd>
              </div>
              <div>
                <dt className="meta text-[var(--muted-foreground)]">Email</dt>
                <dd className="display mt-3 break-all text-2xl">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt className="meta text-[var(--muted-foreground)]">Studio</dt>
                <dd className="mt-3 text-sm leading-relaxed">
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {site.address}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="meta text-[var(--muted-foreground)]">Hours</dt>
                <dd className="mt-3 text-sm leading-relaxed">
                  {site.hours}
                  <span className="mt-2 block text-[var(--muted-foreground)]">
                    {site.serviceArea}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
