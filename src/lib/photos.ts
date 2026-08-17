import baraat1 from "@/assets/photos/baraat-1.json";
import baraat2 from "@/assets/photos/baraat-2.json";
import baraat3 from "@/assets/photos/baraat-3.json";
import baraat4 from "@/assets/photos/baraat-4.json";
import before1 from "@/assets/photos/before-1.json";
import before2 from "@/assets/photos/before-2.json";
import before3 from "@/assets/photos/before-3.json";
import candid1 from "@/assets/photos/candid-1.json";
import candid2 from "@/assets/photos/candid-2.json";
import candid3 from "@/assets/photos/candid-3.json";
import candid4 from "@/assets/photos/candid-4.json";
import ceremony1 from "@/assets/photos/ceremony-1.json";
import ceremony2 from "@/assets/photos/ceremony-2.json";
import ceremony3 from "@/assets/photos/ceremony-3.json";
import haldi1 from "@/assets/photos/haldi-1.json";
import haldi2 from "@/assets/photos/haldi-2.json";
import haldi3 from "@/assets/photos/haldi-3.json";
import heroImg from "@/assets/photos/hero.json";
import mehndi1 from "@/assets/photos/mehndi-1.json";
import mehndi2 from "@/assets/photos/mehndi-2.json";
import people1 from "@/assets/photos/people-1.json";
import people2 from "@/assets/photos/people-2.json";
import people3 from "@/assets/photos/people-3.json";
import people4 from "@/assets/photos/people-4.json";
import pre1 from "@/assets/photos/pre-1.json";
import pre2 from "@/assets/photos/pre-2.json";
import pre3 from "@/assets/photos/pre-3.json";
import pre4 from "@/assets/photos/pre-4.json";
import pre5 from "@/assets/photos/pre-5.json";
import reception1 from "@/assets/photos/reception-1.json";
import reception2 from "@/assets/photos/reception-2.json";
import reception3 from "@/assets/photos/reception-3.json";
import reception4 from "@/assets/photos/reception-4.json";
import sangeet1 from "@/assets/photos/sangeet-1.json";
import sangeet2 from "@/assets/photos/sangeet-2.json";
import sangeet3 from "@/assets/photos/sangeet-3.json";
import story1 from "@/assets/photos/story-1.json";
import story2 from "@/assets/photos/story-2.json";
import story3 from "@/assets/photos/story-3.json";

export type Photo = { src: string; alt: string };

const p = (asset: { url: string }, alt: string): Photo => ({ src: asset.url, alt });

export const photo = {
  hero: p(heroImg, "A bride and groom framed by a carved archway after the wedding ceremony"),

  before1: p(before1, "Close detail of a bride's jewellery and hands before the ceremony"),
  before2: p(before2, "A bride waiting quietly in her lehenga before she is called downstairs"),
  before3: p(before3, "A bride walking through an empty hall on the morning of her wedding"),

  mehndi1: p(mehndi1, "A bride laughing as her hands are held during the mehndi function"),
  mehndi2: p(mehndi2, "Friends smearing haldi and colour across a smiling bride's face"),

  haldi1: p(haldi1, "A couple in yellow, covered in haldi, laughing with their families"),
  haldi2: p(haldi2, "Family gathered around the couple during the haldi ceremony"),
  haldi3: p(haldi3, "A guest in a rainbow saree seated under floral decor at the haldi"),

  sangeet1: p(sangeet1, "A couple dancing under stage lights at the sangeet"),
  sangeet2: p(sangeet2, "The bride mid-performance on the sangeet dance floor"),
  sangeet3: p(sangeet3, "Friends singing and laughing together during the celebrations"),

  baraat1: p(baraat1, "Fireworks over the baraat procession outside a palace venue"),
  baraat2: p(baraat2, "The groom's entry surrounded by sparklers and dancing guests"),
  baraat3: p(baraat3, "The groom arriving in procession lit by warm gold light"),
  baraat4: p(baraat4, "The bride's entry under a canopy carried by her family"),

  ceremony1: p(ceremony1, "The bride and groom during the wedding rituals in red and gold"),
  ceremony2: p(ceremony2, "A quiet look exchanged between the couple during the ceremony"),
  ceremony3: p(ceremony3, "The couple standing together in a lamp-lit corridor after the rituals"),

  reception1: p(reception1, "The bride making her reception entrance in a lit ballroom"),
  reception2: p(reception2, "Bridesmaids toasting and laughing at the reception"),
  reception3: p(reception3, "Guests celebrating with sparklers and confetti at the reception"),
  reception4: p(reception4, "Friends of the couple walking in together at the reception"),

  people1: p(people1, "Parents and relatives celebrating with the couple"),
  people2: p(people2, "A large family group portrait taken during the wedding"),
  people3: p(people3, "The family raising their hands together during a function"),
  people4: p(people4, "Guests dancing under floral decor at a wedding function"),

  candid1: p(candid1, "A close, unposed moment between the bride and groom"),
  candid2: p(candid2, "The couple standing together at night after the celebrations"),
  candid3: p(candid3, "The bride in red under dramatic light during the wedding"),
  candid4: p(candid4, "The bride seated in her lehenga surrounded by floral decor"),

  pre1: p(pre1, "A couple on a palace staircase during their pre-wedding shoot"),
  pre2: p(pre2, "A couple on a bicycle beside a red telephone box during a pre-wedding shoot"),
  pre3: p(pre3, "A couple framed by a circular arch during a pre-wedding shoot"),
  pre4: p(pre4, "A bride in red standing before a heritage facade"),
  pre5: p(pre5, "A couple seated by a courtyard pool during their pre-wedding shoot"),

  story1: p(story1, "A couple photographed inside a painted heritage courtyard"),
  story2: p(story2, "A couple seated inside a white arched courtyard"),
  story3: p(story3, "A couple walking through a sunlit arched terrace"),
} satisfies Record<string, Photo>;
