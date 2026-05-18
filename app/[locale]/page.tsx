import { HomeHero } from "@/components/sections/HomeHero";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BeyondTheAisle } from "@/components/sections/BeyondTheAisle";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { site } from "@/lib/site";
import { faqPageLd, jsonLd, localePageMetadata, type FaqItem } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/", {
  // Override the root `title.default` with a keyword-led home title. We do
  // not use the template here because the home page should not append
  // "· Regalia Vows" twice. `title.absolute` bypasses the template.
  title: {
    absolute: "Luxury Wedding Planner in Dubai · Bespoke Weddings & Proposals — Regalia Vows",
  },
  description:
    "Regalia Vows is a private commissioning house for luxury weddings, cinematic proposals and the private events that follow — composed from Dubai, staged across the UAE and worldwide.",
  openGraph: {
    title: "Luxury Wedding Planner in Dubai · Regalia Vows",
    description:
      "Bespoke weddings, cinematic proposals and the private occasions that follow — composed from Dubai, staged worldwide.",
  },
});

type HomeCopy = {
  ldName: string;
  ldDescription: string;
  faqEyebrow: string;
  faqHeading: string;
  faqs: readonly FaqItem[];
};

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    ldName: "Luxury Wedding Planner in Dubai · Regalia Vows",
    ldDescription:
      "Regalia Vows is a private commissioning house for luxury weddings, cinematic proposals and the private events that follow.",
    faqEyebrow: "Frequently asked",
    faqHeading: "The questions we hear most often.",
    faqs: [
      {
        q: "Where is Regalia Vows based?",
        a: "Regalia Vows is a by-appointment studio at Al Fahidi Plaza, Bur Dubai, composing weddings and private events across the UAE and worldwide. Visits are by introduction only.",
      },
      {
        q: "What does a luxury wedding in Dubai cost with Regalia Vows?",
        a: "Bespoke wedding design and direction begins at AED 750,000, with full production typically opening from AED 1.8M. Every commission is custom-priced after a private studio meeting and the treatment that follows.",
      },
      {
        q: "Do you plan destination weddings outside the UAE?",
        a: "Yes. We have staged destination weddings in Como, Marrakech, Hampi, Tuscany, the Amalfi coast and the Hatta cliffs. Directors embed at the destination for ten to twenty days before the celebration.",
      },
      {
        q: "Beyond weddings, what else do you compose?",
        a: "Cinematic proposals, engagements, vow renewals, anniversary galas, brand launches, corporate galas and family-office commissions \u2014 the same craft applied to the moments a couple, a brand or a private office wants to remember.",
      },
      {
        q: "How far in advance should we engage Regalia Vows?",
        a: "Twelve to eighteen months for weddings; six to twelve weeks for private and corporate commissions; four to twelve weeks for proposals. We accept a limited number of commissions per season so one senior director carries each file end-to-end.",
      },
      {
        q: "How do we begin?",
        a: "Through a private introduction at the studio or by video call. There is no deck and no pitch \u2014 only the question of whether we are right for one another. Enquiries are answered within one working day.",
      },
    ],
  },
  ru: {
    ldName: "Свадебный планировщик класса люкс в Дубае · Regalia Vows",
    ldDescription:
      "Regalia Vows — приватный дом-комиссионер, сочиняющий свадьбы класса люкс, кинематографичные предложения и частные вечера, что следуют за ними.",
    faqEyebrow: "Частые вопросы",
    faqHeading: "Вопросы, которые мы слышим чаще всего.",
    faqs: [
      {
        q: "Где базируется Regalia Vows?",
        a: "Regalia Vows — студия по записи на Al Fahidi Plaza, Бур-Дубай. Сочиняем свадьбы и частные вечера по ОАЭ и по всему миру. Визиты — только по предварительному знакомству.",
      },
      {
        q: "Сколько стоит свадьба класса люкс в Дубае с Regalia Vows?",
        a: "Дизайн и постановка свадьбы на заказ начинаются от 750 000 AED; полная продакшн-стоимость — обычно от 1,8 млн AED. Каждый заказ рассчитывается индивидуально после личной встречи в студии и подготовленного сценария.",
      },
      {
        q: "Делаете ли вы свадьбы за пределами ОАЭ?",
        a: "Да. Мы ставили свадьбы на Комо, в Марракеше, Хампи, Тоскане, на Амальфитанском побережье и на скалах Хатты. Директора заезжают на площадку за 10–20 дней до торжества.",
      },
      {
        q: "Что вы делаете помимо свадеб?",
        a: "Кинематографичные предложения, помолвки, обновления клятв, юбилейные гала, бренд-запуски, корпоративные гала и заказы фемили-офисов — то же ремесло, применённое к моментам, которые пара, бренд или частный офис хочет запомнить.",
      },
      {
        q: "За какое время лучше всего обращаться?",
        a: "За 12–18 месяцев для свадеб; 6–12 недель для частных и корпоративных заказов; 4–12 недель для предложений. Мы берём ограниченное число заказов в сезон, чтобы каждый файл вёл один старший директор от начала до конца.",
      },
      {
        q: "Как начать?",
        a: "Через приватное знакомство в студии или по видеосвязи. Никаких презентаций и питчей — только вопрос, подходим ли мы друг другу. Ответ на запрос — в течение одного рабочего дня.",
      },
    ],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = homeCopy[locale] ?? homeCopy.en;

  const homeLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: t.ldName,
    description: t.ldDescription,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#business` },
    inLanguage: locale === "ru" ? "ru-RU" : site.locale,
    primaryImageOfPage: { "@type": "ImageObject", url: site.ogImage },
  };

  const homeFaqLd = faqPageLd(t.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(homeLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(homeFaqLd)}
      />
      <HomeHero />
      <ManifestoSection />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <BeyondTheAisle />
      <TestimonialsSection />
      <FaqBlock
        eyebrow={t.faqEyebrow}
        heading={t.faqHeading}
        items={t.faqs}
      />
      <CtaSection />
    </>
  );
}
