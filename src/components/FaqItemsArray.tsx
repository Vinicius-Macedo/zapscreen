import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type Question = {
  title: string;
  text: string;
};

type FaqItemProps = {
  question: Question[];
};

export function FaqItemsArray(props: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const [dropDownIdOpen, setDropDownIdOpen] = useState<number | null>(null);

  function handleOpenDropDown(i: number) {
    if (!open && dropDownIdOpen === null) {
      setOpen(true);
      setDropDownIdOpen(i);
    } else if (open && dropDownIdOpen != i) {
      setDropDownIdOpen(i);
    } else {
      setOpen(false);
      setDropDownIdOpen(null);
    }
  }

  return (
    <ul className="flex flex-col gap-2">
      {props.question.map((item, i) => (
        <li
          key={i}
          className={
            "faq-container" + (open && i === dropDownIdOpen ? " open" : "")
          }
        >
          <div
            onClick={() => handleOpenDropDown(i)}
            className={"pergunta-container"}
          >
            <p className="text-white text-20px font-semibold sm:text-size font">
              {item.title}
            </p>
            <figure className="dropdown-icon">
              <RiArrowDropDownLine color="#44ad3a" size={55} />
            </figure>
          </div>

          <p className="resposta">
            <br />
            {item.text.split("\n").map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                <br />
                <br />
              </React.Fragment>
            ))}
            <br />
          </p>
        </li>
      ))}
    </ul>
  );
}
