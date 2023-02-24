import React from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import useTyping from "../../hooks/useTyping";
import Link from "next/link";

export default function HeroSection() {
  const typedWords = useTyping([
    "o casamento inesquecível!",
    "a festa mais comentada!",
    "o show mais lembrado!",
  ]);

  return (
    <DefaultMarginSection
      id="home"
      styles={{ backgroundImage: "url(/img/hero-party-background.webp)" }}
      containerClassName="overflow-hidden pt-40 bg-center bg-cover bg-no-repeat"
    >
      <div className="max-w-[540px] text-center flex flex-col items-center m-auto gap-12 sm:py-64">
        <div className="flex flex-col gap-4">
          <h1 className="responsive-title font-bold relative">
            Compartilhe <span className="text-gradient">suas memórias</span> em
            tempo real com Zapscreen
          </h1>
          <p className="text-size blink-animation min-h-[135px] sm:min-h-min">
            Todas as fotos do seu evento transmitidas em tempo real no telão.
            Tenha {typedWords}
          </p>
        </div>
        <Link
          href="https://wa.me/5548999999"
          target={"_blank"}
          className="bg-gradient text-white px-12 py-6 rounded-full font-bold"
        >
          Tenha no seu evento
        </Link>
      </div>
    </DefaultMarginSection>
  );
}
