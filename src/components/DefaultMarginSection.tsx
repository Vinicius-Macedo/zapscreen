import { ReactNode } from "react";

type DefaultMarginSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassname?: string;
  id?: string;
  hasNoMarginTop?: boolean;
  hasNoMarginBottom?: boolean;
  isRelative: boolean;
  sectionTop?: ReactNode;
  sectionBottom?: ReactNode;
};

export function DefaultMarginSection(props: DefaultMarginSectionProps) {
  return (
    <section
      id={props.id}
      className={props.containerClassname}

      // className={`px-8 py-32 sm:px-16 md:py-64 xl:px-0 ${
      //   props.hasNoMarginTop ? "xl:pt-0" : ""
      // } xl:w-[1110px] xl:m-auto${classWithoutSpace}`}
    >
      {props.sectionTop}

      <div
        className={
          "relative px-16 py-32 md:py-64 xl:px-0 xl:w-[1110px] xl:m-auto" +
          (props.hasNoMarginTop ? " xl:pt-0" : "") +
          (props.hasNoMarginBottom ? " xl:pb-0" : "") +
          (props.className ? " " + props.className : "")
        }
      >
        {props.children}
      </div>
      {props.sectionBottom}
    </section>
  );
}
