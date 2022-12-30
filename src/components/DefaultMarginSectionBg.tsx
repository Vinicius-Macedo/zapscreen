import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import imgLoader from "../loader";

type DefaultMarginSectionProps = {
  children: ReactNode;
  isBackgroundImage: boolean;
  className?: string;
  backgroundClass?: string;
  imgAdress?: any;
  imgAlt?: any;
};

export function DefaultMarginSectionBg(props: DefaultMarginSectionProps) {
  return (
    <>
      <section
        className={
          "relative" +
          (props.backgroundClass ? " " + props.backgroundClass : "")
        }
      >
        <div
          className={
            `px-8 py-32 sm:px-16 md:py-64 xl:px-0 xl:w-[1110px] xl:m-auto` +
            (props.className ? " " + props.className : "")
          }
        >
          {props.children}
        </div>
        {props.isBackgroundImage ? (
          <Image
            src={props.imgAdress}
            alt={props.imgAlt}
            loader={imgLoader}
            unoptimized={true}
            style={{ zIndex: -1, objectFit: "cover", objectPosition: "center" }}
            fill
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
}
