import { useState } from "react";
import { photo } from "@/lib/photos";
import { site, waLink } from "@/lib/site";
import { GoldRule, Reveal } from "./Ornaments";

const functionsList = [
  "Roka",
  "Mehndi",
  "Haldi",
  "Sangeet",
  "Wedding day",
  "Reception",
  "Pre-wedding",
];

export function Enquiry() {
  const [names, setNames] = useState("");
  const [city, setCity] = useState("");
  const [dates, setDates] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState("");

  const toggle = (f: string) =>
    setPicked((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]));

  const message = [
    "Hello SM Photography,",
    names && `We are ${names}.`,
    city && `Wedding city: ${city}.`,
    dates && `Dates: ${dates}.`,
    picked.length ? `Functions: ${picked.join(", ")}.` : "",
    note && `A little about us: ${note}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section id="enquire" className="surface-maroon silk relative overflow-hidden py-28 md:py-40">
      <div className="relative z-10 mx-auto grid max-w-[1300px] gap-16 px-5 md:grid-cols-[1fr_0.85fr] md:px-10">
        <div>
          <p className="meta text-gold">Enquire</p>
          <Reveal>
            <h2 className="display text-paper mt-5 text-5xl leading-[0.95] md:text-7xl">
              Tell us about
              <br />
              <span className="display-italic text-gold">your wedding.</span>
            </h2>
          </Reveal>
          <GoldRule className="mt-8 max-w-[220px]" />

          <div className="mt-10 space-y-7">
            <Field
              label="Who's getting married?"
              value={names}
              onChange={setNames}
              placeholder="Your names"
            />
            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Where?" value={city} onChange={setCity} placeholder="City / venue" />
              <Field label="When?" value={dates} onChange={setDates} placeholder="Dates or month" />
            </div>

            <div>
              <p className="meta text-paper/60">Which functions?</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {functionsList.map((f) => {
                  const on = picked.includes(f);
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggle(f)}
                      aria-pressed={on}
                      className={`meta rounded-full border px-4 py-2 transition-colors ${
                        on
                          ? "border-gold bg-gold/20 text-paper"
                          : "border-paper/25 text-paper/70 hover:border-paper/60"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="meta block text-paper/60" htmlFor="note">
                Anything else
              </label>
              <textarea
                id="note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="How you found us, what matters most to you…"
                className="mt-3 w-full resize-none border-b border-paper/25 bg-transparent pb-3 text-lg text-paper placeholder:text-paper/35 focus:border-gold focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="SEND"
                className="meta inline-flex items-center gap-3 border border-gold bg-gold/15 px-8 py-4 text-paper transition-colors hover:bg-gold/30"
              >
                Send on WhatsApp →
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Wedding enquiry")}&body=${encodeURIComponent(message)}`}
                className="meta text-paper/70 underline-offset-8 hover:text-paper hover:underline"
              >
                Or email us
              </a>
            </div>
          </div>
        </div>

        <Reveal mask delay={120} className="md:pt-24">
          <img
            src={photo.candid2.src}
            alt={photo.candid2.alt}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
          <div className="mt-8 space-y-3 text-sm text-paper/70">
            <p>
              <a href={`tel:${site.phonePrimary}`} className="hover:text-paper">
                {site.phonePrimaryLabel}
              </a>{" "}
              ·{" "}
              <a href={`tel:${site.phoneSecondary}`} className="hover:text-paper">
                {site.phoneSecondaryLabel}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </p>
            <p className="leading-relaxed">{site.address}</p>
            <p className="text-paper/50">{site.hours}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const id = label.replace(/\W+/g, "-").toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="meta block text-paper/60">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-paper/25 bg-transparent pb-3 text-lg text-paper placeholder:text-paper/35 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
