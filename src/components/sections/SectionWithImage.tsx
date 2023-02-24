import React from "react";
import Image from "next/image";
import { DefaultMarginSection } from "../DefaultMarginSection";
import imageLoader from "../../loader";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

type SectionWithImageProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  callToAction: string;

  // image
  imageUrl: string;
  imageAlt: string;

  invertOrder?: boolean;
  id?: string;
};

export default function SectionWithImage(props: SectionWithImageProps) {
  return (
    <DefaultMarginSection
      id={props.id}
      hasEffect={true}
      className={
        "flex flex-col gap-8 items-center lg:justify-between" +
        (props.invertOrder ? " lg:flex-row" : " lg:flex-row-reverse")
      }
    >
      <Image
        src={props.imageUrl}
        alt={""}
        width={445}
        height={334}
        loader={imageLoader}
        unoptimized
      />
      <article className="flex flex-col gap-12 max-w-[540px] text-center lg:text-left">
        <h2 className="title font-ubuntu font-bold">{props.title}</h2>
        <p className="text-whitegray text"> {props.description}</p>
        <Link
          href="https://wa.me/5548999999"
          target={"_blank"}
          className="flex items-center gap-4 text text-gradient font-bold font-ubuntu m-auto p-8 lg:pl-0 lg:m-0"
        >
          {props.callToAction} <GoArrowRight color="#87c139" />
        </Link>
      </article>
    </DefaultMarginSection>
  );
}
