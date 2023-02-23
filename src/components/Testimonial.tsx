import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type TestimonialProps = {
  author: string;
  description: string;

  imageUrl: string;
  imageAlt: string;
};

export default function Testimonial(props: TestimonialProps) {
  return (
    <div className="max-w-[350px] w-full h-full relative">
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        className={
          "object-cover w-60 h-60 rounded-full position absolute left-1/2 top-0 -translate-x-1/2"
        }
        width={120}
        height={120}
        loader={imageLoader}
        unoptimized
      />
      <div className="w-[1px] h-30"></div>
      <article className="bg-[#080a0b] p-16 pt-46 lg:h-[498px] xl:h-[444px] flex flex-col gap-8">
        <h3 className="font-bold text-center text">{props.author}</h3>
        <p className="text-whitegray text-[18px] italic">
          &quot;{props.description}&quot;
        </p>
      </article>
    </div>
  );
}
