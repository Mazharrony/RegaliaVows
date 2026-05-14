"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Section theme="ink" className="!pt-44 min-h-[70vh]">
      <Container size="narrow" className="text-center">
        <p className="eyebrow !justify-center">A moment, please</p>
        <h1 className="display mt-10 text-display-lg italic text-pearl">
          Something fell out of frame.
        </h1>
        <p className="mx-auto mt-8 max-w-md text-base text-pearl/80">
          Our apologies — an unexpected error interrupted the composition. We
          have already been notified.
        </p>
        <div className="mt-12">
          <Button onClick={reset} variant="gilded" size="lg" withArrow>
            Try again
          </Button>
        </div>
      </Container>
    </Section>
  );
}
