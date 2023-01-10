import React from "react";

type ServiceCardProps = {
  reactIcon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-[255px] justify-self-center">
      {props.reactIcon}
      <article className="flex flex-col gap-2">
        <h3 className="text-size font-semibold text-center">{props.title}</h3>
        <p className="text-[18px] leading-[27.5px] text-center">
          {props.description}
        </p>
      </article>
    </div>
  );
}
