export const site = {
  name: "Regalia Vows",
  tagline: "Weddings, composed — and the occasions that follow.",
  description:
    "Regalia Vows composes once-in-a-lifetime weddings and proposals from Dubai, staged across the Emirates and the world. On request, the same hand designs the corporate launches, private galas, brand activations and hospitality openings our clients ask for next.",
  url: "https://regaliavows.com",
  locale: "en-AE",
  city: "Dubai",
  country: "United Arab Emirates",
  contact: {
    email: "concierge@regaliavows.com",
    phone: "+971 4 000 0000",
    whatsapp: "+971 50 000 0000",
    address: "DIFC, Gate Avenue, Dubai, UAE",
  },
  social: {
    instagram: "https://instagram.com/regaliavows",
    pinterest: "https://pinterest.com/regaliavows",
    vimeo: "https://vimeo.com/regaliavows",
  },
} as const;

export type Site = typeof site;
