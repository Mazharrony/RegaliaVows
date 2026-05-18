import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <Section theme="pearl" className="!pt-44 min-h-[80vh]">
      <Container size="narrow" className="text-center">
        <p className="eyebrow !justify-center">{t("eyebrow")}</p>
        <h1 className="display mt-10 text-display-xl italic text-pearl">
          {t("titleA")}
          <br />
          {t("titleB")}
        </h1>
        <p className="mx-auto mt-8 max-w-md text-base text-pearl/80">
          {t("body")}
        </p>
        <div className="mt-12">
          <Button href="/" variant="gilded" size="lg" withArrow>
            {t("cta")}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
