import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { GoldRule } from "./Ornaments";

export function Footer() {
  return (
    <footer className="surface-ink relative py-16">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <GoldRule />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="display text-paper text-4xl">{site.name}</p>
            <p className="meta mt-3 text-paper/50">{site.serviceArea}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/" className="meta text-paper/70 hover:text-paper">
              Home
            </Link>
            <Link to="/stories" className="meta text-paper/70 hover:text-paper">
              Stories
            </Link>
            <Link to="/contact" className="meta text-paper/70 hover:text-paper">
              Contact
            </Link>
            <a
              href={site.website}
              target="_blank"
              rel="noopener noreferrer"
              className="meta text-paper/70 hover:text-paper"
            >
              smphotography.in
            </a>
          </nav>
        </div>
        <p className="meta mt-12 text-[10px] text-paper/35">
          © {new Date().getFullYear()} {site.name}. All photographs belong to the studio.
        </p>
      </div>
    </footer>
  );
}
