import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";

const links = [
  { label: "Stories", to: "/stories" as const },
  { label: "Weddings", href: "/#chapters" },
  { label: "Films", href: "/#films" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", to: "/contact" as const },
];

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid ? "surface-maroon shadow-[0_1px_0_0_var(--gold)]/20" : "bg-transparent"
        }`}
      >
        <div className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            to="/"
            className="meta text-paper transition-opacity hover:opacity-70"
            onClick={() => setOpen(false)}
          >
            SM Photography
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {links.map((l) =>
              "to" in l && l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  className="meta group relative py-1 text-paper/80 transition-colors hover:text-paper"
                  activeProps={{ className: "!text-paper" }}
                >
                  {l.label}
                  <Ornament />
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="meta group relative py-1 text-paper/80 transition-colors hover:text-paper"
                >
                  {l.label}
                  <Ornament />
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(`Hi ${site.name}, I'd like to check availability for our wedding date.`)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="ENQUIRE"
              className="meta hidden border border-gold/60 px-4 py-2.5 text-paper transition-colors hover:bg-gold hover:text-ink md:inline-block"
            >
              Check availability
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="meta text-paper lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* full-screen maroon menu */}
      <div
        className={`surface-maroon fixed inset-0 z-40 transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="relative z-10 flex h-full flex-col justify-center gap-1 px-8"
        >
          {links.map((l, i) =>
            "to" in l && l.to ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="display text-paper text-5xl"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display text-paper text-5xl"
              >
                {l.label}
              </a>
            ),
          )}
          <a
            href={`tel:${site.phonePrimary}`}
            className="meta mt-10 text-gold"
            onClick={() => setOpen(false)}
          >
            {site.phonePrimaryLabel}
          </a>
        </nav>
      </div>
    </>
  );
}

function Ornament() {
  return (
    <span
      aria-hidden
      className="absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-3"
    />
  );
}
