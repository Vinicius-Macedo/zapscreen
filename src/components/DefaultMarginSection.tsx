import { CSSProperties, ReactNode, useRef, useState } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

type DefaultMarginSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  hasNoMarginTop?: boolean;
  hasNoMarginBottom?: boolean;
  sectionTop?: ReactNode;
  sectionBottom?: ReactNode;
  extraSpace?: boolean;
  ref?: any;
  styles?: CSSProperties;
  hasEffect?: boolean;
  onWheel?: (event: React.WheelEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
};

export function DefaultMarginSection(props: DefaultMarginSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const [alreadyVisible, setAlreadyVisible] = useState(false);

  return (
    <section
      id={props.id}
      ref={ref}
      onWheel={props.onWheel}
      onMouseEnter={() => props.onMouseEnter}
      onMouseLeave={() => props.onMouseLeave}
      className={
        (props.hasEffect
          ? isVisible && !alreadyVisible
            ? [setAlreadyVisible(true), "element is-visible"]
            : alreadyVisible
            ? "element is-visible"
            : "element"
          : "") +
        (props.containerClassName ? " " + props.containerClassName : "")
      }
      style={props.styles}
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
