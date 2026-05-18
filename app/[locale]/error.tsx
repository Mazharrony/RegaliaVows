"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("error");
  return (
    <Section theme="pearl" className="!pt-44 min-h-[70vh]">
      <Container size="narrow" className="text-center">
        <p className="eyebrow !justify-center">{t("eyebrow")}</p>
        <h1 className="display mt-10 text-display-lg italic text-pearl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-8 max-w-md text-base text-pearl/80">
          {t("body")}
        </p>
        <div className="mt-12">
          <Button onClick={reset} variant="gilded" size="lg" withArrow>
            {t("tryAgain")}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
