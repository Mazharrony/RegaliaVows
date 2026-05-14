import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section theme="ink" className="!pt-44 min-h-[80vh]">
      <Container size="narrow" className="text-center">
        <p className="eyebrow !justify-center">404 · Lost in Regalia Vows</p>
        <h1 className="display mt-10 text-display-xl italic text-pearl">
          This room
          <br />
          is empty.
        </h1>
        <p className="mx-auto mt-8 max-w-md text-base text-pearl/80">
          The page you were looking for has been re-staged or has not yet been
          dressed. Allow us to show you back to the foyer.
        </p>
        <div className="mt-12">
          <Button href="/" variant="gilded" size="lg" withArrow>
            Return Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
