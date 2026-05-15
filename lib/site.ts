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
    email: "Info@Regaliavows.com",
    phone: "+971 56 264 6341",
    whatsapp: "+971 56 264 6341",
    address: "14 66 Street, Al Souq Al Kabeer, Al Fahidi Plaza, Dubai, UAE",
  },
  social: {
    instagram: "https://www.instagram.com/regaliavows_dubai",
    facebook: "https://www.facebook.com/share/1CZoZr1ZPT/",
    threads: "https://www.threads.com/@regaliavows_dubai",
  },
} as const;

export type Site = typeof site;
