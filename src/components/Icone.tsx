import React from "react";
import Image from "next/image";
import imageLoader from "../loader";

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
};

export default function Icone(props: Props) {
  return (
    <div className="flex flex-col gap-8  items-center">
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        width={"0"}
        height="0"
        className="w-30 max-h-[50px] flex justify-center items-end  object-contain"
        loader={imageLoader}
        unoptimized
      />
      <h3 className="font-bold text">{props.title}</h3>
    </div>
  );
}

// nsec1fhlfr4emhdfdz4tzpgqunrlw3mvnr9sc4fcwhhmpjt53k04vmevqrad7cg
