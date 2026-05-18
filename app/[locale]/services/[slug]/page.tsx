import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/lib/i18n/navigation";
import { PageHero } from "@/components/sections/PageHero";
import {
  PhilosophyBlock,
  SignaturesGrid,
  ProcessTimeline,
} from "@/components/sections/DetailBlocks";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { breadcrumbLd, faqPageLd, jsonLd, serviceLd, localeAlternates, urlForLocale, type FaqItem } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";
import type { Href } from "@/lib/i18n/navigation";

type ServiceEntry = {
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  philosophy: string;
  image: string;
  signatures: readonly { title: string; body: string }[];
  process: readonly { step: string; title: string; body: string }[];
  inclusions: readonly string[];
  investment: string;
  video?: string;
  contactHref?: Href;
  faqs?: readonly FaqItem[];
};

const data: Record<string, ServiceEntry> = {
  weddings: {
    eyebrow: "Service I",
    title: "Bespoke Weddings.",
    shortTitle: "Bespoke Weddings",
    description:
      "Two to seven-day celebrations across the UAE — palaces, private islands, desert estates and rooftop ballrooms.",
    philosophy:
      "A Regalia Vows wedding is not produced — it is composed. We meet a couple once the engagement is sealed, sit together at the studio, and listen for the single thread that should run through every ceremony, supper, sunrise and last dance. Everything that follows — the venue, the florists, the calligraphers, the choreography of two cultures meeting at one altar — is woven only after that thread is found. Two families. One signature. Anywhere in the world.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=70",
    signatures: [
      { title: "Cultural Choreography", body: "Hindu, Christian, Catholic, Muslim, Sikh, Persian and inter-faith ceremonies — designed with elders and clergy, never templated." },
      { title: "Floral Architecture", body: "Our atelier in Al Quoz hand-blocks every installation; nothing is rented twice, no two arches alike." },
      { title: "Sartorial Direction", body: "Liaison with the couple's couturiers — Sabyasachi, Elie Saab, Schiaparelli, Tarun Tahiliani — so the dress lives inside the room, not in spite of it." },
      { title: "Archival Book", body: "Every commission closes with a leather-bound monograph: film stills, calligraphed timeline, the speeches, the menu cards. One copy each family." },
    ],
    process: [
      { step: "I", title: "Introduction", body: "A private meeting at the studio or by video. We listen. There is no deck, no pitch — only the question of whether we are right for one another." },
      { step: "II", title: "Treatment", body: "Within eight weeks: a hand-bound document. Visual direction, ceremony architecture, guest journey and the team we propose to assemble." },
      { step: "III", title: "Composition", body: "Twelve to eighteen months of design, sourcing, rehearsals and quiet revisions. One senior director carries the file end-to-end." },
      { step: "IV", title: "Staging", body: "Two senior producers and a discreet crew on the ground — from the first welcome dinner through the farewell brunch." },
    ],
    inclusions: [
      "Signature design treatment & creative direction",
      "Venue scouting & negotiation across the GCC",
      "Floral, fashion & set design",
      "Multi-cultural ceremony choreography",
      "Guest concierge & multilingual hosting",
      "Cinematography & archival book",
      "Optional honeymoon planning (see Service VI)",
    ],
    investment: "From AED 750,000 · Production from AED 1.8M",
    faqs: [
      { q: "What does a Regalia Vows wedding commission cost?", a: "Bespoke weddings begin at AED 750,000 for design and direction; full production typically opens from AED 1.8M. Every commission is custom-priced after the first studio meeting and the treatment that follows." },
      { q: "How far in advance should we book?", a: "Twelve to eighteen months is our usual lead time. We accept a limited number of commissions per season so that one senior director can carry each file end-to-end." },
      { q: "Do you plan multi-cultural and inter-faith weddings in Dubai?", a: "Yes. We have composed Hindu, Christian, Catholic, Muslim, Sikh, Persian and inter-faith ceremonies in the UAE — designed with elders and clergy rather than templated." },
      { q: "Where in the UAE do you stage weddings?", a: "Palaces, private islands, desert estates and rooftop ballrooms across Dubai, Abu Dhabi, Ras Al Khaimah and the wider GCC. Venue scouting and negotiation are included as standard." },
      { q: "What is delivered at the end of the commission?", a: "Every wedding closes with a leather-bound archival monograph — film stills, the calligraphed timeline, the speeches and the menu cards — with one copy for each family." },
    ],
  },
  proposals: {
    eyebrow: "Service II",
    title: "Cinematic Proposals.",
    shortTitle: "Cinematic Proposals",
    description:
      "A single perfect moment, engineered as a film. Helicopter approaches, private skyline takeovers, surprise musicians.",
    philosophy:
      "The proposal is the only moment of the entire marriage at which the other person is not yet a collaborator. Everything has to be felt, not consulted. Regalia Vows treats the proposal as a single-take film: location, music, lighting, weather, vendor entrances, and the precise second the ring leaves the pocket. We work in absolute secrecy with the proposer, and the rest of the world only hears about it once the answer is yes.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=70",
    signatures: [
      { title: "Concept Treatment", body: "A storyboard, a music cue, a script for every vendor. The proposer rehearses only once — privately, with the director." },
      { title: "Secret Logistics", body: "Routes, transfers, hidden crew positions. Our suppliers sign under NDA before they hear the location." },
      { title: "Skyline & Sand", body: "Helicopter approaches, private yachts, desert plateaus, rooftop takeovers — held under our standing permits." },
      { title: "Reveal Concierge", body: "Once she says yes, the second team activates: jeweller, sommelier, chef, photographer, and the family who has been waiting twenty minutes away." },
    ],
    process: [
      { step: "I", title: "First Call", body: "Discreet introduction. We discuss her, him, them, and the moment as you have imagined it." },
      { step: "II", title: "Treatment", body: "Three concept films, three locations, three music cues. You choose one. We disappear with it." },
      { step: "III", title: "Build", body: "Four to twelve weeks of permits, rehearsals, supplier confirmations and weather-window planning." },
      { step: "IV", title: "The Moment", body: "We stage. We capture. Within forty-eight hours, a private film and a stills gallery are in your hands." },
    ],
    inclusions: [
      "Concept treatment & secret logistics",
      "Location securing (rooftops, deserts, yachts)",
      "Film & still photography crew",
      "Florals, lighting, score",
      "Surprise vendor concierge (jeweller, sommelier, chef)",
      "Post-moment celebration handoff",
    ],
    investment: "From AED 95,000",
    faqs: [
      { q: "How much does a cinematic proposal in Dubai cost?", a: "Regalia Vows proposals begin at AED 95,000. The figure covers concept treatment, secret logistics, location securing, film and stills crew, florals, lighting, score and the post-moment celebration handoff." },
      { q: "How long does it take to plan a proposal?", a: "Four to twelve weeks of build is typical — long enough to secure permits, rehearse vendor entrances and plan a weather window, short enough that secrecy holds." },
      { q: "Can you secure private rooftops, helicopters or desert locations?", a: "Yes. Skyline takeovers, helicopter approaches, private yachts and desert plateaus are held under our standing permits, with all suppliers signed under NDA before the location is named." },
      { q: "What is delivered after the moment?", a: "Within forty-eight hours of the proposal, a private film and a stills gallery are in your hands. The second team activates immediately with jeweller, sommelier, chef and waiting family." },
    ],
  },
  "destination-weddings": {
    eyebrow: "Service III",
    title: "Destination Weddings.",
    shortTitle: "Destination Weddings",
    description:
      "We open passports together. Regalia Vows flies with the couple and stages the celebration on location.",
    philosophy:
      "A destination wedding is a wedding plus a journey — and most agencies under-build the journey. Regalia Vows arrives at the destination weeks in advance, learns the local vendors by name, walks the cathedral with the parish, tastes the menu in the chef's kitchen, and pre-rigs every guest transfer. By the time the couple's flight lands, the wedding is already in rehearsal. Our clients have married in Como, Marrakech, Hampi, Tuscany, the Amalfi coast and the Hatta cliffs.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=70",
    signatures: [
      { title: "Twin Studios", body: "Regalia Vows directors travel; our second studio is the destination itself. We embed for ten to twenty days on the ground." },
      { title: "Local Vendor Curation", body: "Quality-controlled long-lists for each city we operate in — florists, bands, calligraphers, transport, security." },
      { title: "Guest Logistics", body: "Visas, immigration letters, hotel blocks, group transfers, dietary briefs and a printed guest folio for every traveller." },
      { title: "Legal & Cultural", body: "Civil paperwork, parish liaison, family elders' protocol — managed in the local language by our destination counsel." },
    ],
    process: [
      { step: "I", title: "Compass Call", body: "We discuss the geography. By the end of the meeting, we know the country, the season and the family logic." },
      { step: "II", title: "Recce", body: "A four-to-seven-day visit — director and producer on the ground, walking venues and meeting local partners." },
      { step: "III", title: "Composition", body: "Twelve to eighteen months managed across two time zones with weekly status calls and quarterly Dubai-studio reviews." },
      { step: "IV", title: "Travel & Stage", body: "We land before the family, set the table, and stay until the last farewell is waved at the airport." },
    ],
    inclusions: [
      "International venue scouting & contracts",
      "Local vendor curation & quality control",
      "Customs, visa & guest logistics",
      "On-ground production team for two weeks",
      "Cultural & legal ceremony compliance",
      "Travel concierge for VIP guests",
      "Optional honeymoon planning (see Service VI)",
    ],
    investment: "From AED 1.2M · plus travel & venue",
    faqs: [
      { q: "Where have you staged destination weddings?", a: "Recent commissions have married in Como, Marrakech, Hampi, Tuscany, the Amalfi coast and the Hatta cliffs. We open passports together — the country, the season and the family logic are settled in the first meeting." },
      { q: "What is the investment for a destination wedding?", a: "From AED 1.2M for design, direction and on-ground production, plus travel and venue costs paid directly to suppliers. Each commission is custom-scoped after the recce." },
      { q: "Do you handle guest visas, transfers and legal paperwork?", a: "Yes. Visas, immigration letters, hotel blocks, group transfers, dietary briefs and a printed guest folio for every traveller are included, alongside civil paperwork and parish or elders’ liaison managed in the local language." },
      { q: "How long are you on the ground at the destination?", a: "Director and producer embed for ten to twenty days before the wedding. By the time the couple’s flight lands, the wedding is already in rehearsal." },
    ],
  },
  "private-events": {
    eyebrow: "Service IV",
    title: "Private Events.",
    shortTitle: "Private Events",
    description:
      "Engagements, vow renewals, anniversary galas and the after-party that becomes the legend.",
    philosophy:
      "The private events that get retold are not the loudest — they are the most exact. The right hour, the right room, the right thirty people, the right last song. Regalia Vows composes engagements, vow renewals and milestone nights with the same architecture we bring to a wedding: a single narrative, a single director, a single hand on every cue. The afterparty becomes the story precisely because it was never the spectacle.",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1800&q=70",
    signatures: [
      { title: "Single-Night Composition", body: "Engagements, vow renewals, anniversaries and birthdays — one night, one director, one signature." },
      { title: "Talent Booking", body: "DJs, string ensembles, private performers and after-hours surprises drawn from a vetted, NDA-signed roster." },
      { title: "F&B Curation", body: "Tasting menus designed alongside the principal's chef of choice — never a hotel default." },
      { title: "Production & Technical", body: "Lighting, audio, scenography and rigging owned in-house. No subcontracted last-minute surprises." },
    ],
    process: [
      { step: "I", title: "First Meeting", body: "At the studio or in your home. We learn the household, the guests, the moment to be made." },
      { step: "II", title: "Treatment", body: "Within three weeks: a concept document, talent shortlist, menu, music and a clear budget." },
      { step: "III", title: "Build", body: "Six to ten weeks of design, sourcing and rehearsal — managed by one senior producer." },
      { step: "IV", title: "The Night", body: "We arrive at noon, leave at dawn. The house wakes the next morning as if nothing had happened — except the story." },
    ],
    inclusions: [
      "Concept & creative direction",
      "Venue, florals, fashion & set",
      "Talent booking (DJs, ensembles, performers)",
      "Production & technical direction",
      "Catering & beverage curation",
      "Guest experience design",
    ],
    investment: "From AED 250,000",
    video: "/videos/private-event.mp4",
    faqs: [
      { q: "What kinds of private events do you compose?", a: "Engagements, vow renewals, anniversary galas, milestone birthdays and the after-party that becomes the legend. One night, one director, one signature." },
      { q: "What is the minimum investment?", a: "Private events begin at AED 250,000, custom-scoped after a first meeting at the studio or in your home." },
      { q: "How much notice do you need?", a: "Six to ten weeks of build is typical once the treatment is approved, with a single senior producer carrying the file from first meeting to dawn the morning after." },
    ],
  },
  "corporate-and-private": {
    eyebrow: "Service V",
    title: "Corporate & Private Events.",
    shortTitle: "Corporate & Private",
    description:
      "Brand launches, galas, conferences and family-office commissions — the same craft Regalia Vows brings to a wedding, applied to the moments a brand or a private office wants to remember.",
    philosophy:
      "Most corporate events are budgets with a deadline. We treat ours as commissions with a thesis. Whether it is the launch of a new fragrance, the AGM of a family office or the keynote of a sovereign-backed conference, Regalia Vows sits with the principal, listens for the sentence the evening must leave behind, and composes everything around that sentence — venue, set, talent, F&B, press. The result is an evening the guests cannot fully describe afterwards, only repeat.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=70",
    signatures: [
      { title: "Discretion", body: "Most corporate commissions are never published. NDAs are signed before the brief is opened." },
      { title: "Senior-Led", body: "A Regalia Vows director owns the file from the first call through the post-event report." },
      { title: "Protocol & Press", body: "Royal-protocol-trained ushers, managed press pen and a stage manager experienced in Davos, Cannes, Riyadh and the Élysée." },
      { title: "One Team", body: "Creative, production, talent and F&B sit on one team — what is promised in the deck is what walks onto the stage." },
    ],
    process: [
      { step: "I", title: "Introduction", body: "At the studio or your office. We confirm the brief is one we should accept." },
      { step: "II", title: "Treatment", body: "Within ten working days: a bound document — narrative, scenography, run-of-show, talent and a fully-costed budget." },
      { step: "III", title: "Composition", body: "Six to twelve weeks of build with weekly principal check-ins. One producer, one director, one roof." },
      { step: "IV", title: "Staging & Report", body: "Two directors on site. A written post-event report and editorial-grade asset library within seven days." },
    ],
    inclusions: [
      "Creative direction & narrative treatment",
      "Venue scouting — ballrooms, ADNEC, DWTC, Dubai Opera, private estates",
      "Production, AV, lighting & scenographic build",
      "Talent, keynote & performer concierge",
      "F&B programme & guest journey choreography",
      "Permits, security, VIP protocol & press handling",
    ],
    investment: "From AED 400,000 · per-event basis",
    contactHref: "/contact/corporate",
    faqs: [
      { q: "Do you work on brand launches and corporate galas as well as weddings?", a: "Yes — brand launches, AGMs, sovereign-backed conferences, family-office commissions and editorial-grade galas. The same craft we bring to a wedding, applied to commercial briefs." },
      { q: "How is confidentiality handled?", a: "Most corporate commissions are never published. NDAs are signed before the brief is opened, and suppliers sign before they hear the location or principal." },
      { q: "Where do you stage corporate events in the UAE?", a: "Ballrooms, ADNEC, DWTC, Dubai Opera and private estates. Permits, security, royal-protocol-trained ushers and managed press pens are handled in-house." },
      { q: "What does the investment start at?", a: "Corporate and private commissions begin from AED 400,000 on a per-event basis, with a fully-costed budget delivered inside the bound treatment within ten working days." },
    ],
  },
  honeymoons: {
    eyebrow: "Service VI",
    title: "Honeymoons.",
    shortTitle: "Honeymoons",
    description:
      "The week after the wedding, planned with the same hand. Private residencies, multi-stop itineraries and quiet places to disappear together.",
    philosophy:
      "Most honeymoons are booked the way one books a holiday: a hotel, a flight, a swimsuit. Regalia Vows composes them the way we compose a wedding: a narrative, a rhythm, a private supper waiting at a destination nobody knows the name of yet. The week after the vows is when the marriage is actually founded — we make sure it is founded in the right room, with the right light, and absolutely no one else in the photograph.",
    image:
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1800&q=70",
    signatures: [
      { title: "Itinerary Design", body: "Single-stop residencies or multi-country compositions, written by a Regalia Vows travel director — never an OTA." },
      { title: "Private Residency", body: "Villas, châteaux, over-water suites and lighthouse rentals — many off-market, all walked by us before they are offered." },
      { title: "In-Destination Concierge", body: "Chef, sommelier, photographer, guide — staffed for you in advance so the week never has a logistics meeting." },
      { title: "Surprise Moments", body: "Anniversary recreations, vow-renewal staging on location and milestone moments built into the itinerary." },
    ],
    process: [
      { step: "I", title: "Conversation", body: "We learn the geography of the marriage — what you love, what tires you, and what you have never said out loud about travel." },
      { step: "II", title: "Treatment", body: "Within three weeks: a bound itinerary document with images, residences shortlisted and travel logic explained." },
      { step: "III", title: "Booking", body: "Flights, residences, transfers, visas, vaccinations and concierge teams locked. You receive a final dossier in hand." },
      { step: "IV", title: "Travel", body: "We remain on call across time zones. When you return, a private dinner closes the chapter at the studio." },
    ],
    inclusions: [
      "Itinerary design & destination strategy",
      "Private villa, château & over-water residency curation",
      "Flights, transfers, yacht & helicopter logistics",
      "Visa, vaccination & travel-document handling",
      "In-destination concierge — chef, sommelier, photographer, guides",
      "Surprise moments & vow-renewal staging on location",
    ],
    investment: "From AED 120,000 · plus travel & accommodation",
    faqs: [
      { q: "How are Regalia Vows honeymoons different from a travel agent’s itinerary?", a: "They are composed the way we compose a wedding — narrative, rhythm and private moments staged in advance. The week after the vows is when the marriage is actually founded; the itinerary is written by a director, not an OTA." },
      { q: "What does a honeymoon commission cost?", a: "From AED 120,000 for itinerary design, residency curation and concierge, plus travel and accommodation paid directly to suppliers." },
      { q: "Do you book single-stop residencies or multi-country itineraries?", a: "Both. Villas, châteaux, over-water suites and lighthouse rentals — many off-market, all walked by us before they are offered. Chef, sommelier, photographer and guides are staffed in destination ahead of arrival." },
    ],
  },
};

const slugs = Object.keys(data);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = data[slug];
  if (!item) return {};
  const title = item.title.replace(/\.$/, "");
  const canonicalPath = `/services/${slug}`;
  return {
    title,
    description: item.description,
    alternates: localeAlternates(locale, canonicalPath),
    openGraph: {
      type: "website",
      url: urlForLocale(locale, canonicalPath),
      title: `${title} \u00B7 ${site.name}`,
      description: item.description,
      images: [item.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} \u00B7 ${site.name}`,
      description: item.description,
      images: [item.image],
    },
  };
}

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  whyPrefix: string;
  signaturesHeading: string;
  signaturesIntro: string;
  processHeading: string;
  inclusionsEyebrow: string;
  inclusionsHeading: string;
  inclusionsLede: string;
  investmentEyebrow: string;
  beginCta: string;
  faqEyebrow: string;
  faqHeading: (s: string) => string;
  continueEyebrow: string;
  continueHeading: string;
  readLabel: string;
}> = {
  en: {
    whyPrefix: "Why",
    signaturesHeading: "The signatures.",
    signaturesIntro:
      "Four hallmarks that separate a Regalia Vows commission from the work of a producer-for-hire.",
    processHeading: "From first call to last farewell.",
    inclusionsEyebrow: "Inclusions",
    inclusionsHeading: "What is included.",
    inclusionsLede:
      "Each commission is custom-priced and custom-scoped — these are the foundations every client receives as standard.",
    investmentEyebrow: "Investment",
    beginCta: "Begin Your Enquiry",
    faqEyebrow: "Frequently asked",
    faqHeading: (s) => `Before you brief us on ${s}.`,
    continueEyebrow: "Continue With",
    continueHeading: "The other chapters.",
    readLabel: "Read",
  },
  ru: {
    whyPrefix: "Почему",
    signaturesHeading: "Подписи.",
    signaturesIntro:
      "Четыре отличительные черты, что отделяют заказ Regalia Vows от работы продюсера на найме.",
    processHeading: "От первого звонка до последнего прощания.",
    inclusionsEyebrow: "Включения",
    inclusionsHeading: "Что входит.",
    inclusionsLede:
      "Каждый заказ оценивается и масштабируется индивидуально — это основа, которую получает каждый клиент.",
    investmentEyebrow: "Инвестиция",
    beginCta: "Начать запрос",
    faqEyebrow: "Часто спрашивают",
    faqHeading: (s) => `Прежде чем брифовать нас по теме «${s}».`,
    continueEyebrow: "Продолжить",
    continueHeading: "Другие главы.",
    readLabel: "Читать",
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = copy[locale] ?? copy.en;
  const item = data[slug];
  if (!item) notFound();

  const contactHref = item.contactHref ?? "/contact";
  const otherServices = slugs
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => ({ slug: s, ...data[s] }));

  const title = item.title.replace(/\.$/, "");
  const ldService = serviceLd({
    name: title,
    description: item.description,
    url: `/services/${slug}`,
    image: item.image,
    serviceType: title,
  });
  const ldBreadcrumb = breadcrumbLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: title, url: `/services/${slug}` },
  ]);
  const ldFaq = item.faqs && item.faqs.length > 0 ? faqPageLd(item.faqs) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ldService)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ldBreadcrumb)} />
      {ldFaq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ldFaq)} />
      )}
      <PageHero
        eyebrow={item.eyebrow}
        title={item.title}
        description={item.description}
      />

      <Section theme="pearl" className="!pt-0 !pb-0">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-ink/10 shadow-2xl">
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-video h-full w-full object-cover"
                />
              ) : (
                <div className="relative aspect-[21/9] w-full">
                  <BgImage
                    src={item.image}
                    alt={`${title} at Regalia Vows`}
                    priority
                    sizes="100vw"
                  />
                </div>
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,13,0.5)_100%)]"
                aria-hidden
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <PhilosophyBlock
        heading={`${t.whyPrefix} ${item.shortTitle.toLowerCase()}.`}
        body={item.philosophy}
      />

      <SignaturesGrid
        heading={t.signaturesHeading}
        intro={t.signaturesIntro}
        items={item.signatures}
      />

      <ProcessTimeline
        heading={t.processHeading}
        steps={item.process}
      />

      <Section theme="pearl">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">{t.inclusionsEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                {t.inclusionsHeading}
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/85">
                {t.inclusionsLede}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {item.inclusions.map((line, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[60px_1fr] items-center gap-6 py-6"
                  >
                    <span className="font-display text-xl italic text-gilded-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl italic text-ink">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Eyebrow className="!text-gilded-800">{t.investmentEyebrow}</Eyebrow>
              <p className="mt-6 font-display text-3xl italic text-ink md:text-4xl">
                {item.investment}
              </p>
            </div>
            <Button href={contactHref} variant="gilded" size="lg" withArrow>
              {t.beginCta}
            </Button>
          </div>
        </Container>
      </Section>

      {item.faqs && item.faqs.length > 0 && (
        <FaqBlock
          eyebrow={t.faqEyebrow}
          heading={t.faqHeading(item.shortTitle.toLowerCase())}
          items={item.faqs}
        />
      )}

      {otherServices.length > 0 && (
        <Section theme="pearl" className="bg-cream-100">
          <Container>
            <Reveal>
              <Eyebrow className="!text-gilded-800">{t.continueEyebrow}</Eyebrow>
              <h2 className="display mt-8 max-w-2xl text-display-md italic text-ink">
                {t.continueHeading}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
              {otherServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={{ pathname: "/services/[slug]", params: { slug: s.slug } }}
                    data-cursor="link"
                    className="group flex h-full flex-col gap-5 bg-cream p-8 transition-colors duration-700 ease-silk hover:bg-cream-50 md:p-10"
                  >
                    <span className="font-tight text-eyebrow uppercase tracking-widest2 text-gilded-600">
                      {s.eyebrow}
                    </span>
                    <h3 className="font-display text-3xl italic text-ink md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/70">
                      {s.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-3 text-eyebrow uppercase tracking-widest2 text-gilded transition-colors group-hover:text-gilded-800">
                      <span className="h-px w-10 bg-gilded transition-all duration-500 ease-silk group-hover:w-20" />
                      {t.readLabel}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
