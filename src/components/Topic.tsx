import React from "react";

type Props = {
  title: string;
  desc: string;
};

export default function Topic(props: Props) {
  return (
    <article className="bg-[#080a0b] py-8 px-16 rounded">
      <h3 className="text text-white text-center font-bold">{props.title}</h3>
      <p className="text-whitegray text-center">{props.desc}</p>
    </article>
  );
}
