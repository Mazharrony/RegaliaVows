import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/lib/site";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/legal/privacy", {
  title: "Privacy",
  description:
    "How Regalia Vows collects, uses, retains and protects personal information — under the UAE Personal Data Protection Law and, where applicable, the EU General Data Protection Regulation.",
});

const LAST_UPDATED_EN = "15 May 2026";
const LAST_UPDATED_RU = "15 мая 2026 г.";
const PRIVACY_EMAIL = "privacy@regaliavows.com";

type Clause = { title: string; body: React.ReactNode };

const clausesEn: Clause[] = [
  {
    title: "1. Who we are",
    body: (
      <p>
        Regalia Vows LLC (&ldquo;<strong>Regalia Vows</strong>,&rdquo;
        &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>&rdquo;)
        is a private commissioning house registered in the United Arab
        Emirates and operating from {site.contact.address}. We act as the data
        controller for the personal information collected through{" "}
        {site.url.replace(/^https?:\/\//, "")} and through any direct
        correspondence with our studio.
      </p>
    ),
  },
  {
    title: "2. The legal frameworks we work under",
    body: (
      <p>
        We process personal data under <strong>UAE Federal Decree-Law No. 45
        of 2021 on the Protection of Personal Data</strong> (the
        &ldquo;PDPL&rdquo;). Where a couple, client or guest is resident in
        the European Economic Area or the United Kingdom, we additionally
        apply <strong>Regulation (EU) 2016/679</strong> (the &ldquo;GDPR&rdquo;)
        and the UK GDPR.
      </p>
    ),
  },
  {
    title: "3. The information we collect",
    body: (
      <>
        <p>The categories of personal data we may process include:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Enquiry data</strong> — names, contact details, event date,
            estimated guest count, indicative investment and free-text
            describing the celebration or commission;
          </li>
          <li>
            <strong>Commission data</strong> — guest manifests, dietary and
            access requirements, supplier briefs, contracts and invoices;
          </li>
          <li>
            <strong>Imagery</strong> — photographic and video material created
            during commissions, used only with prior written permission;
          </li>
          <li>
            <strong>Technical data</strong> — IP address, browser type,
            referring page and basic device information collected by the
            hosting infrastructure and our analytics provider.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Why we process it",
    body: (
      <>
        <p>We use personal data for the following purposes:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>To respond to enquiries and prepare proposals;</li>
          <li>To plan, deliver and document commissioned events;</li>
          <li>To comply with our legal, tax and accounting obligations;</li>
          <li>
            To keep the website secure, performant and accessible (legitimate
            interest);
          </li>
          <li>
            To send a small number of operational messages relating to a live
            commission. We do not run a marketing newsletter.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Lawful bases",
    body: (
      <p>
        We rely on the following lawful bases under the GDPR: performance of a
        contract (Art. 6(1)(b)), compliance with a legal obligation (Art.
        6(1)(c)), our legitimate interests in operating and protecting the
        studio (Art. 6(1)(f)), and your consent (Art. 6(1)(a)) — for example
        before publishing imagery in which you are identifiable. Equivalent
        bases are applied under the PDPL.
      </p>
    ),
  },
  {
    title: "6. Who sees your information",
    body: (
      <p>
        Enquiry data reaches only the founders and the named Regalia Vows team
        members assigned to a commission. During delivery we share strictly
        necessary details with vetted suppliers (venues, photographers,
        florists, transport and security partners) under written
        confidentiality undertakings. We <strong>do not</strong> sell personal
        data and we do not share it with third parties for their own
        marketing.
      </p>
    ),
  },
  {
    title: "7. International transfers",
    body: (
      <p>
        When a commission is delivered outside the UAE — or when a supplier
        processes data outside the UAE — we transfer personal data only under
        appropriate safeguards, including Standard Contractual Clauses where
        required by the GDPR, and the transfer mechanisms permitted under
        Article 22 of the PDPL.
      </p>
    ),
  },
  {
    title: "8. How long we keep it",
    body: (
      <p>
        Enquiry data is retained for up to twenty-four months from the last
        point of contact unless a commission proceeds. Commission records are
        retained for seven years from the close of the engagement to satisfy
        UAE tax, audit and statute-of-limitations requirements. Imagery is
        retained indefinitely in the studio archive but is <em>only</em>{" "}
        reproduced publicly with documented consent.
      </p>
    ),
  },
  {
    title: "9. Your rights",
    body: (
      <>
        <p>Subject to the applicable framework, you may:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Request a copy of the personal data we hold about you;</li>
          <li>Ask us to correct or update inaccurate data;</li>
          <li>Request erasure where there is no overriding legal basis;</li>
          <li>Object to, or restrict, certain processing;</li>
          <li>Withdraw consent for any use of your image at any time;</li>
          <li>
            Lodge a complaint with the UAE Data Office or, where applicable,
            your national supervisory authority.
          </li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, write to{" "}
          <a
            className="text-gilded-700 underline underline-offset-4"
            href={`mailto:${PRIVACY_EMAIL}`}
          >
            {PRIVACY_EMAIL}
          </a>
          . We respond within thirty days.
        </p>
      </>
    ),
  },
  {
    title: "10. Cookies & analytics",
    body: (
      <p>
        The site uses strictly necessary cookies to render pages and a small
        first-party analytics measurement to understand which compositions are
        being read. We do not use advertising cookies. A cookie consent notice
        will appear before any non-essential measurement is set.
      </p>
    ),
  },
  {
    title: "11. Security",
    body: (
      <p>
        We apply administrative, technical and physical safeguards appropriate
        to the sensitivity of the data we hold, including encrypted transport,
        restricted access, supplier NDAs and offline backups for commission
        records.
      </p>
    ),
  },
  {
    title: "12. Updates to this notice",
    body: (
      <p>
        We may update this notice from time to time. The version below is the
        one in force; material changes will be flagged at the top of this page
        for at least thirty days.
      </p>
    ),
  },
];

// TODO(ru): review — drafted Russian translation pending legal counsel sign-off.
const clausesRu: Clause[] = [
  {
    title: "1. Кто мы",
    body: (
      <p>
        Regalia Vows LLC (далее — «<strong>Regalia Vows</strong>», «
        <strong>мы</strong>», «<strong>нас</strong>») — частное ателье
        церемоний, зарегистрированное в Объединённых Арабских Эмиратах и
        работающее по адресу {site.contact.address}. Мы выступаем оператором
        персональных данных, собираемых через сайт{" "}
        {site.url.replace(/^https?:\/\//, "")}, а также в рамках прямой
        переписки со студией.
      </p>
    ),
  },
  {
    title: "2. Правовые основы нашей работы",
    body: (
      <p>
        Мы обрабатываем персональные данные в соответствии с{" "}
        <strong>Федеральным указом ОАЭ № 45 от 2021 года о защите
        персональных данных</strong> (далее — «PDPL»). Если пара, клиент или
        гость проживает в Европейской экономической зоне или Соединённом
        Королевстве, мы дополнительно применяем{" "}
        <strong>Регламент (ЕС) 2016/679</strong> (далее — «GDPR») и его
        британский эквивалент UK GDPR.
      </p>
    ),
  },
  {
    title: "3. Какие сведения мы собираем",
    body: (
      <>
        <p>Категории обрабатываемых персональных данных могут включать:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Данные запроса</strong> — имена, контактные данные, дата
            события, ориентировочное число гостей, предполагаемый бюджет и
            свободный текст с описанием торжества или проекта;
          </li>
          <li>
            <strong>Данные проекта</strong> — списки гостей, пищевые и
            доступностные требования, брифы для подрядчиков, договоры и
            счета;
          </li>
          <li>
            <strong>Изображения</strong> — фото- и видеоматериалы, созданные в
            ходе проекта; используются исключительно с предварительного
            письменного согласия;
          </li>
          <li>
            <strong>Технические данные</strong> — IP-адрес, тип браузера,
            страница-источник и базовые сведения об устройстве, собираемые
            хостинг-инфраструктурой и нашей аналитической системой.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Цели обработки",
    body: (
      <>
        <p>Мы используем персональные данные в следующих целях:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>отвечать на запросы и готовить коммерческие предложения;</li>
          <li>планировать, реализовывать и фиксировать порученные события;</li>
          <li>
            исполнять налоговые, бухгалтерские и иные юридические обязанности;
          </li>
          <li>
            поддерживать сайт безопасным, быстрым и доступным (законный
            интерес);
          </li>
          <li>
            направлять небольшое число служебных сообщений в рамках активного
            проекта. Мы не ведём маркетинговую рассылку.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Правовые основания",
    body: (
      <p>
        В рамках GDPR мы опираемся на следующие основания: исполнение договора
        (ст. 6(1)(b)), исполнение юридической обязанности (ст. 6(1)(c)),
        наши законные интересы по управлению и защите студии (ст. 6(1)(f))
        и ваше согласие (ст. 6(1)(a)) — например, перед публикацией
        изображений, на которых вы узнаваемы. Эквивалентные основания
        применяются и по PDPL.
      </p>
    ),
  },
  {
    title: "6. Кто видит ваши данные",
    body: (
      <p>
        Данные запроса попадают только к основателям студии и поимённо
        назначенным сотрудникам Regalia Vows, ведущим проект. На этапе
        реализации мы передаём строго необходимые сведения проверенным
        партнёрам (площадки, фотографы, флористы, транспорт и служба
        безопасности) под письменными соглашениями о конфиденциальности. Мы{" "}
        <strong>не продаём</strong> персональные данные и не передаём их
        третьим лицам для их собственного маркетинга.
      </p>
    ),
  },
  {
    title: "7. Международная передача данных",
    body: (
      <p>
        Если проект реализуется за пределами ОАЭ — или подрядчик обрабатывает
        данные за пределами ОАЭ — мы передаём персональные данные только при
        наличии надлежащих гарантий, включая Стандартные договорные оговорки
        (SCC) там, где этого требует GDPR, и механизмы передачи, допустимые
        статьёй 22 PDPL.
      </p>
    ),
  },
  {
    title: "8. Сроки хранения",
    body: (
      <p>
        Данные запросов хранятся до двадцати четырёх месяцев с момента
        последнего контакта, если проект не переходит в работу. Документы по
        реализованным проектам хранятся семь лет после завершения
        обязательств — в соответствии с требованиями налогового и
        бухгалтерского законодательства ОАЭ и сроками исковой давности.
        Изображения хранятся в архиве студии бессрочно, однако{" "}
        <em>публикуются исключительно</em> при наличии задокументированного
        согласия.
      </p>
    ),
  },
  {
    title: "9. Ваши права",
    body: (
      <>
        <p>В рамках применимого законодательства вы вправе:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>запросить копию хранимых о вас персональных данных;</li>
          <li>потребовать исправления или обновления неточных сведений;</li>
          <li>
            потребовать удаления данных при отсутствии преобладающего
            правового основания;
          </li>
          <li>возразить против отдельной обработки или ограничить её;</li>
          <li>
            в любой момент отозвать согласие на использование вашего
            изображения;
          </li>
          <li>
            подать жалобу в Управление по защите данных ОАЭ (UAE Data Office)
            или, при применимости, в национальный надзорный орган.
          </li>
        </ul>
        <p className="mt-4">
          Чтобы воспользоваться любым из этих прав, напишите по адресу{" "}
          <a
            className="text-gilded-700 underline underline-offset-4"
            href={`mailto:${PRIVACY_EMAIL}`}
          >
            {PRIVACY_EMAIL}
          </a>
          . Мы отвечаем в течение тридцати дней.
        </p>
      </>
    ),
  },
  {
    title: "10. Cookie и аналитика",
    body: (
      <p>
        Сайт использует строго необходимые cookie для отображения страниц и
        небольшой объём собственной аналитики, позволяющей понимать, какие
        материалы читают чаще. Мы не используем рекламные cookie. Перед
        установкой любых неосновных измерительных cookie появится уведомление
        с запросом согласия.
      </p>
    ),
  },
  {
    title: "11. Безопасность",
    body: (
      <p>
        Мы применяем административные, технические и физические меры защиты,
        соразмерные чувствительности обрабатываемых данных: шифрование канала
        передачи, ограничение доступа, NDA с подрядчиками и офлайн-резервные
        копии документов по проектам.
      </p>
    ),
  },
  {
    title: "12. Изменения уведомления",
    body: (
      <p>
        Мы можем периодически обновлять настоящее уведомление. Действующая
        редакция приведена ниже; о существенных изменениях мы сообщаем в
        верхней части страницы как минимум за тридцать дней до их вступления
        в силу.
      </p>
    ),
  },
];

type Copy = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  inForceFrom: string;
  lastUpdated: string;
  intro: string;
  questionsLead: string;
  questionsTail: string;
  clauses: Clause[];
};

const copy: Record<Locale, Copy> = {
  en: {
    heroEyebrow: "Legal · Privacy",
    heroTitle: "Privacy notice.",
    heroDescription:
      "How Regalia Vows collects, uses, retains and protects personal information — under the UAE Personal Data Protection Law and, where applicable, the EU General Data Protection Regulation.",
    inForceFrom: "In force from",
    lastUpdated: LAST_UPDATED_EN,
    intro:
      "We treat every name, address and image entrusted to us as if it were our own. This notice describes, in plain language, exactly how.",
    questionsLead: "Questions about this notice may be sent to",
    questionsTail:
      ". This document is provided as a good-faith summary of our practices; it does not constitute legal advice and is reviewed with our counsel before each material update.",
    clauses: clausesEn,
  },
  ru: {
    heroEyebrow: "Юридическое · Конфиденциальность",
    heroTitle: "Политика конфиденциальности.",
    heroDescription:
      "Как Regalia Vows собирает, использует, хранит и защищает персональные данные — в соответствии с Законом ОАЭ о защите персональных данных и, при применимости, Общим регламентом ЕС по защите данных (GDPR).",
    inForceFrom: "Действует с",
    lastUpdated: LAST_UPDATED_RU,
    intro:
      "Мы относимся к каждому имени, адресу и изображению, доверенным нам, как к своим собственным. Настоящее уведомление описывает простым языком, как именно.",
    questionsLead: "Вопросы по настоящему уведомлению направляйте на",
    questionsTail:
      ". Этот документ является добросовестным изложением нашей практики; он не заменяет юридическую консультацию и проходит проверку у наших советников перед каждым существенным обновлением.",
    clauses: clausesRu,
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
      />

      <Section theme="pearl">
        <Container size="narrow">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-6">
            <Eyebrow className="!text-gilded-800">{t.inForceFrom}</Eyebrow>
            <p className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/70">
              {t.lastUpdated}
            </p>
          </div>

          <p className="mt-10 font-display text-2xl italic leading-snug text-ink md:text-3xl">
            {t.intro}
          </p>

          <div className="mt-16 space-y-14 text-base leading-relaxed text-ink/80">
            {t.clauses.map((c) => (
              <section key={c.title}>
                <h2 className="font-display text-2xl italic text-ink md:text-3xl">
                  {c.title}
                </h2>
                <div className="mt-5 space-y-4">{c.body}</div>
              </section>
            ))}
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <p className="mt-10 text-sm leading-relaxed text-ink/60">
            {t.questionsLead}{" "}
            <a
              className="text-gilded-700 underline underline-offset-4"
              href={`mailto:${PRIVACY_EMAIL}`}
            >
              {PRIVACY_EMAIL}
            </a>
            {t.questionsTail}
          </p>
        </Container>
      </Section>
    </>
  );
}
