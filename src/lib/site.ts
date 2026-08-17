/**
 * Verified, publicly published SM Photography information only.
 * Source: smphotography.in (home, about, contact).
 * Nothing here is invented — no awards, counts, ratings or years.
 */

export const site = {
  name: "SM Photography",
  tagline: "Wedding photography · Cinematography",
  serviceArea: "Delhi NCR · Jaipur · Destination",
  phonePrimary: "+917023336664",
  phonePrimaryLabel: "+91 70233 36664",
  phoneSecondary: "+918740822181",
  phoneSecondaryLabel: "+91 87408 22181",
  whatsapp: "917023336664",
  email: "Dasman702@gmail.com",
  hours: "Mon – Sat, 9:00am – 9:00pm",
  address: "3rd Floor, Windsor Plaza, 309 Sansar Chandra Road, Sindhi Camp, Jaipur 302001",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Windsor+Plaza+309+Sansar+Chandra+Road+Sindhi+Camp+Jaipur+302001",
  website: "https://smphotography.in",
  origin: "https://indian-album-unfolding.vercel.app",
} as const;

export const absUrl = (path = "/") => `${site.origin}${path.startsWith("/") ? path : `/${path}`}`;

export const waLink = (text?: string) =>
  `https://api.whatsapp.com/send?phone=${site.whatsapp}${text ? `&text=${encodeURIComponent(text)}` : ""}`;

export const films = [
  {
    title: "Anusha & Angad",
    kind: "Wedding teaser",
    duration: "1:41",
    url: "https://vimeo.com/1081846149",
  },
  {
    title: "Rishbh & Nividita",
    kind: "Ring ceremony teaser",
    duration: "0:57",
    url: "https://vimeo.com/1081847494",
  },
] as const;

/** Reviews published on smphotography.in — quoted verbatim. */
export const testimonials = [
  {
    quote:
      "Our experience was great! Can’t thank you enough for the shots and video you have created for us. It’s a lifetime memory to be cherished forever. Thank you for your love and patience!",
    name: "Neelam & Paresh",
    source: "Published on smphotography.in",
  },
  {
    quote:
      "Having you as a part of our day, all the moments were great. You are a dedicated and hardworking photographer and you also have a great team. You capture everything so beautifully.",
    name: "Sunita & Anuj",
    source: "Published on smphotography.in",
  },
  {
    quote:
      "Very good experience — my guests were very happy with their photos, and the fact that they all got them via a face-recognition link within 2–3 days of the marriage was really commendable.",
    name: "Sujata & Avinash",
    source: "Published on smphotography.in",
  },
] as const;
