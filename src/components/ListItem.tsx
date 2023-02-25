import React from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  title: string;
  desc: string;
};

export default function ListItem(props: Props) {
  return (
    <div className="flex gap-4 items-start">
      <IoMdCheckmark size={40} color={"#44ad3a"} />
      <p className="text-[22.5px] ">
        <span className="font-bold">{props.title}</span> - {props.desc}
      </p>
    </div>
  );
}
