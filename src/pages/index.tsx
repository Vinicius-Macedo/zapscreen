const imageLoader = require("./../loader.js");
import Image from "next/image";
import { useEffect, useState } from "react";
import { DefaultMarginSection } from "../components/DefaultMarginSection";
import { DefaultMarginSectionBg } from "../components/DefaultMarginSectionBg";
import useCustomHook from "../hooks/useTyping";

export default function Home() {
  const typedWords = useCustomHook([
    "criar seu sistema",
    "fazer o seu site",
    "auxiliar na equipe",
  ]);

  return (
    <>
      <main>
        <DefaultMarginSection
          className="text-center flex flex-col items-center max-w-[700px] m-auto gap-16 "
          containerClassname="overflow-x-hidden pt-40"
          isRelative={true}
          sectionBottom={
            <Image
              src={"/decoration-section.svg"}
              className="w-full"
              alt={""}
              width={1366}
              height={137}
              loader={imageLoader}
              unoptimized
              priority
            />
          }
        >
          <h1 className="responsive-title font-bold relative">
            Desenvolvimento de
            <span className="text-green"> sites </span> e
            <span className="text-green"> sistemas </span>
            para <span className="text-green">pequenos emprededores</span>
          </h1>
          <p className="text-size blink-animation max-w-[310px]">
            Me chamo Vinícius, sou um desenvolvedor web que vai {typedWords}
          </p>
          <button className="bg-green hover:darkgreen text-black px-16 py-6 rounded-full font-bold">
            Quem sou eu?
          </button>
          <Image
            className=" opacity-[.1] absolute left-[40%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] max-w-none md:w-[800px]"
            src={"/decoration-logo.svg"}
            alt={""}
            loader={imageLoader}
            width={1400}
            height={1400}
            unoptimized
            priority
          />
        </DefaultMarginSection>
        <DefaultMarginSectionBg
          isBackgroundImage={false}
          backgroundClass="bg-[#0F0E0E]"
        >
          <h1>Hi</h1>
        </DefaultMarginSectionBg>
      </main>
    </>
  );
}
