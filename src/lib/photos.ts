export type Photo = { src: string; alt: string };

const p = (file: string, alt: string): Photo => ({ src: `/photos/${file}`, alt });

export const photo = {
  hero: p("hero.webp", "A bride and groom framed by a carved archway after the wedding ceremony"),

  before1: p("before-1.webp", "Close detail of a bride's jewellery and hands before the ceremony"),
  before2: p(
    "before-2.webp",
    "A bride waiting quietly in her lehenga before she is called downstairs",
  ),
  before3: p(
    "before-3.webp",
    "A bride walking through an empty hall on the morning of her wedding",
  ),

  mehndi1: p("mehndi-1.webp", "A bride laughing as her hands are held during the mehndi function"),
  mehndi2: p("mehndi-2.webp", "Friends smearing haldi and colour across a smiling bride's face"),

  haldi1: p("haldi-1.webp", "A couple in yellow, covered in haldi, laughing with their families"),
  haldi2: p("haldi-2.webp", "Family gathered around the couple during the haldi ceremony"),
  haldi3: p("haldi-3.webp", "A guest in a rainbow saree seated under floral decor at the haldi"),

  sangeet1: p("sangeet-1.webp", "A couple dancing under stage lights at the sangeet"),
  sangeet2: p("sangeet-2.webp", "The bride mid-performance on the sangeet dance floor"),
  sangeet3: p("sangeet-3.webp", "Friends singing and laughing together during the celebrations"),

  baraat1: p("baraat-1.webp", "Fireworks over the baraat procession outside a palace venue"),
  baraat2: p("baraat-2.webp", "The groom's entry surrounded by sparklers and dancing guests"),
  baraat3: p("baraat-3.webp", "The groom arriving in procession lit by warm gold light"),
  baraat4: p("baraat-4.webp", "The bride's entry under a canopy carried by her family"),

  ceremony1: p("ceremony-1.webp", "The bride and groom during the wedding rituals in red and gold"),
  ceremony2: p("ceremony-2.webp", "A quiet look exchanged between the couple during the ceremony"),
  ceremony3: p(
    "ceremony-3.webp",
    "The couple standing together in a lamp-lit corridor after the rituals",
  ),

  reception1: p("reception-1.webp", "The bride making her reception entrance in a lit ballroom"),
  reception2: p("reception-2.webp", "Bridesmaids toasting and laughing at the reception"),
  reception3: p(
    "reception-3.webp",
    "Guests celebrating with sparklers and confetti at the reception",
  ),
  reception4: p("reception-4.webp", "Friends of the couple walking in together at the reception"),

  people1: p("people-1.webp", "Parents and relatives celebrating with the couple"),
  people2: p("people-2.webp", "A large family group portrait taken during the wedding"),
  people3: p("people-3.webp", "The family raising their hands together during a function"),
  people4: p("people-4.webp", "Guests dancing under floral decor at a wedding function"),

  candid1: p("candid-1.webp", "A close, unposed moment between the bride and groom"),
  candid2: p("candid-2.webp", "The couple standing together at night after the celebrations"),
  candid3: p("candid-3.webp", "The bride in red under dramatic light during the wedding"),
  candid4: p("candid-4.webp", "The bride seated in her lehenga surrounded by floral decor"),

  pre1: p("pre-1.webp", "A couple on a palace staircase during their pre-wedding shoot"),
  pre2: p(
    "pre-2.webp",
    "A couple on a bicycle beside a red telephone box during a pre-wedding shoot",
  ),
  pre3: p("pre-3.webp", "A couple framed by a circular arch during a pre-wedding shoot"),
  pre4: p("pre-4.webp", "A bride in red standing before a heritage facade"),
  pre5: p("pre-5.webp", "A couple seated by a courtyard pool during their pre-wedding shoot"),

  story1: p("story-1.webp", "A couple photographed inside a painted heritage courtyard"),
  story2: p("story-2.webp", "A couple seated inside a white arched courtyard"),
  story3: p("story-3.webp", "A couple walking through a sunlit arched terrace"),
} satisfies Record<string, Photo>;
