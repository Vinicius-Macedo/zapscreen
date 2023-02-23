import React from "react";
import Image from "next/image";
import imageLoader from "../../loader";

type StepSectionProps = {
  title: string;
  description: string;
  number: string;
  isClockWise: boolean;
  // image
  imageUrl: string;
  imageAlt: string;
};

export default function StepSection(props: StepSectionProps) {
  return (
    <div
      className={
        "flex flex-col items-center gap-12 justify-between" +
        (props.isClockWise ? " lg:flex-row-reverse" : " lg:flex-row")
      }
    >
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        className="h-[228px] object-cover"
        width={445}
        height={228}
        loader={imageLoader}
        unoptimized
      />
      <div className={"max-w-[605px] md:flex lg:gap-12"}>
        <p className="text-[64px] text-gradient font-black opacity-20 float-left lg:float-none mr-8 md:mr-4 leading-11 lg:mr-0 lg:w-[95px]">
          {props.number}
        </p>
        <div className="lg:flex lg:flex-col lg:gap-8">
          <h3 className="text-[32px] font-ubuntu font-bold leading-8 lg:leading-none">
            {props.title}
          </h3>
          <p className="text text-whitegray mt-4 lg:mt-0">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
445;
228;
