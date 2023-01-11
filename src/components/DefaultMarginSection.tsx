import { ReactNode } from "react";

type DefaultMarginSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassname?: string;
  id?: string;
  hasNoMarginTop?: boolean;
  hasNoMarginBottom?: boolean;
  sectionTop?: ReactNode;
  sectionBottom?: ReactNode;
  extraSpace?: boolean;
  ref?: any;
  onWheel?: (event: React.WheelEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
};

export function DefaultMarginSection(props: DefaultMarginSectionProps) {
  return (
    <section
      id={props.id}
      // ref={props.ref}
      onWheel={props.onWheel}
      onMouseEnter={() => props.onMouseEnter}
      onMouseLeave={() => props.onMouseLeave}
      className={props.containerClassname}
    >
      {props.sectionTop}
      <div
        className={
          "relative px-16 py-32 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto" +
          (props.extraSpace ? " xl:py-64" : "") +
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
