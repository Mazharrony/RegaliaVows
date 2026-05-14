"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const quotes = [
  {
    quote:
      "They didn't plan our wedding. They composed it — every note, every silence. Three days that felt like a single, perfect breath.",
    author: "Amira & Rashid",
    place: "Bvlgari Resort, Dubai",
  },
  {
    quote:
      "We have been to a hundred weddings around the world. We have never been to one like ours.",
    author: "Noor & Alex",
    place: "Villa Sola Cabiati, Lake Como",
  },
  {
    quote:
      "Regalia Vows didn't just understand our families — they made our two cultures speak to each other in one beautiful voice.",
    author: "Yara & Kareem",
    place: "Al Maha Desert, Dubai",
  },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, []);

  const q = quotes[i];

  return (
    <Section id="testimonials" theme="ink" className="relative overflow-hidden">
      {/* Soft background photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=70)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_50%,rgba(11,11,13,0.6)_0%,rgba(11,11,13,0.95)_100%)]" />
      <Container size="narrow" className="relative">
        <div className="text-center">
          <Eyebrow>In Their Words</Eyebrow>
          <span
            aria-hidden
            className="mt-12 block font-display text-[10rem] leading-none text-gilded/30"
          >
            &ldquo;
          </span>
        </div>

        <div className="relative mt-[-3rem] min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center font-display text-3xl italic leading-snug text-pearl md:text-5xl"
            >
              {q.quote}
              <footer className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-tight text-eyebrow uppercase tracking-widest2 not-italic">
                <span className="text-gilded">{q.author}</span>
                <span className="h-px w-6 bg-pearl/30" aria-hidden />
                <span className="text-pearl/80">{q.place}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              data-cursor="link"
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-px w-12 transition-all duration-500 ${
                i === idx ? "bg-gilded" : "bg-pearl/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
