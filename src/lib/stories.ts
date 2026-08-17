import { photo, type Photo } from "./photos";

export type Story = {
  slug: string;
  title: string;
  meta: string;
  note: string;
  cover: Photo;
  sequence: { caption: string; images: Photo[] }[];
};

/**
 * Album collections drawn from published SM Photography work.
 * Titles describe the work itself — no invented couples, venues or dates.
 */
export const stories: Story[] = [
  {
    slug: "the-wedding-day",
    title: "The Wedding Day",
    meta: "Wedding · Delhi NCR & Jaipur",
    note: "From the last hour of quiet to the last song of the night.",
    cover: photo.ceremony1,
    sequence: [
      { caption: "Before anyone arrives", images: [photo.before2, photo.before1, photo.before3] },
      { caption: "The entry", images: [photo.baraat4, photo.baraat2] },
      { caption: "The rituals", images: [photo.ceremony1, photo.ceremony2, photo.ceremony3] },
      { caption: "And then, everyone", images: [photo.people1, photo.people2] },
    ],
  },
  {
    slug: "the-functions",
    title: "The Functions",
    meta: "Mehndi · Haldi · Sangeet",
    note: "Colour, noise and the people who make a wedding feel like yours.",
    cover: photo.haldi1,
    sequence: [
      { caption: "Mehndi", images: [photo.mehndi1, photo.mehndi2] },
      { caption: "Haldi", images: [photo.haldi1, photo.haldi3, photo.haldi2] },
      { caption: "Sangeet", images: [photo.sangeet2, photo.sangeet1, photo.sangeet3] },
      { caption: "Baraat", images: [photo.baraat1, photo.baraat3] },
    ],
  },
  {
    slug: "before-the-wedding",
    title: "Before the Wedding",
    meta: "Pre-wedding · Portraits",
    note: "Courtyards, arches and two people practising being married.",
    cover: photo.pre1,
    sequence: [
      { caption: "Heritage light", images: [photo.pre1, photo.story1, photo.story2] },
      { caption: "Somewhere in the city", images: [photo.pre2, photo.pre5] },
      { caption: "Portraits", images: [photo.pre4, photo.pre3, photo.story3] },
    ],
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
