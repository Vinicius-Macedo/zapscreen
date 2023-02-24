import { DefaultMarginSection } from "./DefaultMarginSection";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

export function SectionWithVideo() {
  return (
    <DefaultMarginSection
      className={
        "flex flex-col gap-8 items-center lg:justify-between lg:flex-row"
      }
    >
      <div className="flex flex-col gap-8 w-full max-w-[475px]">
        <Youtube video={"prvRPwer7uc"} />
      </div>

      <article className="flex flex-col gap-12 max-w-[540px] text-center lg:text-left">
        <h2 className="title font-ubuntu font-bold">
          Por que o <span className="text-gradient">ZapScreen</span> não pode
          faltar no meu evento?
        </h2>
        <p className="text-whitegray text">
          O ZapScreen é a solução perfeita para eventos, pois oferece vários
          recursos para tornar sua experiência inesquecível e autêntica. Veja
          nosso vídeo:
        </p>
        <Link
          href="https://wa.me/5548999999"
          target={"_blank"}
          className="flex items-center gap-4 text text-gradient font-bold font-ubuntu m-auto p-8 lg:pl-0 lg:m-0"
        >
          Fale conosco <GoArrowRight color="#87c139" />
        </Link>
      </article>
    </DefaultMarginSection>
  );
}
type YoutubeProps = {
  video: string;
};

function Youtube(props: YoutubeProps) {
  const divRef = useRef<HTMLDivElement | null>(null);

  const EmbedarVideo = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.style.width = "100%";
    iframe.style.height = "315px";
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${props.video}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div
      ref={divRef}
      className="relative cursor-pointer"
      onClick={() => EmbedarVideo()}
    >
      <img
        loading="lazy"
        alt="Thumbnail do Youtube"
        height={"315px"}
        src={`https://img.youtube.com/vi/${props.video}/hqdefault.jpg`}
        width={"100%"}
      />
      <AiFillPlayCircle
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
        size={50}
        color={"#ff0000"}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white"></div>
    </div>
  );
}
