import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Chapters } from "@/components/site/Chapters";
import {
  About,
  CandidAndStatement,
  FromTheAlbum,
  Introduction,
  Quotes,
  ThePeople,
  WhenToStepIn,
} from "@/components/site/Sections";
import { Films } from "@/components/site/Films";
import { Services } from "@/components/site/Services";
import { Enquiry } from "@/components/site/Enquiry";
import { Footer } from "@/components/site/Footer";
import { ArchClipDefs } from "@/components/site/Ornaments";
import { absUrl } from "@/lib/site";

const title = "SM Photography — Wedding Photography & Films, Jaipur & Delhi NCR";
const description =
  "Candid Indian wedding photography and cinematography by SM Photography. Mehndi to reception, told chapter by chapter across Jaipur, Delhi NCR and destination weddings.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absUrl("/") },
      { property: "og:image", content: absUrl("/photos/hero.webp") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absUrl("/photos/hero.webp") },
    ],
    links: [{ rel: "canonical", href: absUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ArchClipDefs />
      <Cursor />
      <Nav overlay />
      <main>
        <Hero />
        <Introduction />
        <Chapters />
        <ThePeople />
        <CandidAndStatement />
        <FromTheAlbum />
        <Films />
        <Services />
        <WhenToStepIn />
        <About />
        <Quotes />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
