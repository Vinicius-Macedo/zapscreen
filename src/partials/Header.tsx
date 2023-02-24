import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScroll from "../hooks/useScroll";
const imageLoader = require("./../loader.js");
import { SiWhatsapp } from "react-icons/si";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

type ScrollStatusType = "scrolled" | "scrolled upped" | "";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, lastScroll] = useScroll();
  const [scrollStatus, setScrollStatus] = useState<ScrollStatusType>("");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (scrollStatus === "" && lastScroll > 80) {
      setScrollStatus("scrolled");
    } else if (scrollStatus === "scrolled" && isScrollingUp) {
      setScrollStatus("scrolled upped");
    } else if (scrollStatus === "scrolled upped" && lastScroll === 0) {
      setScrollStatus("");
    }
  }, [lastScroll]);

  return (
    <>
      <header
        className={
          "header" +
          (!isScrollingUp &&
          (scrollStatus === "scrolled" || scrollStatus === "scrolled upped")
            ? " hide"
            : "") +
          (isScrollingUp &&
          (scrollStatus === "scrolled" || scrollStatus === "scrolled upped")
            ? " show"
            : "") +
          (scrollStatus === "scrolled upped" ? " transition" : "") +
          (lastScroll > 80 ? " scrolled" : "")
        }
      >
        <nav className={"menu" + (isMenuOpen ? " open" : "")}>
          <Link href="/" as="image">
            <figure className="relative w-[40px] h-[40px]">
              <Image
                src="/img/logo-zapscreen.webp"
                alt="Logo da zapscreen com um Z dentro de um círculo verde com traços que lembram a lente de uma camêra fotográfica"
                fill
                style={{ objectFit: "contain" }}
                loader={imageLoader}
                unoptimized={true}
                priority
              />
            </figure>
          </Link>
          <ul className="lista">
            <li className="item">
              <Link href="#home" className="link">
                Home
              </Link>
            </li>
            <li className="item">
              <Link href="#o-que-e" className="link">
                O que é
              </Link>
            </li>
            <li className="item">
              <Link href="#como-funciona" className="link">
                Como funciona
              </Link>
            </li>
            <li className="item">
              <Link href="#testemunhos" className="link">
                Testemunhos
              </Link>
            </li>
            <li className="item">
              <Link href="#faq" className="link">
                Perguntas
              </Link>
            </li>
            <li className="item">
              <div className="flex gap-12">
                <Link
                  aria-label="facebook"
                  href={"https://www.facebook.com/ozapscreen"}
                  target="_blank"
                >
                  <BsFacebook size={25} />
                </Link>
                <Link
                  aria-label="Instagram"
                  href="https://www.instagram.com/zapscreenbr/"
                  target={"_blank"}
                >
                  <BsInstagram size={25} />
                </Link>
                <Link
                  aria-label="youtube"
                  href="https://www.youtube.com/@zapscreen"
                  target={"_blank"}
                >
                  <BsYoutube size={25} />
                </Link>

                <Link
                  aria-label="tiktok"
                  href="https://tiktok.com/@zapscreen"
                  target={"_blank"}
                >
                  <FaTiktok size={25} />
                </Link>
              </div>
            </li>
          </ul>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="toggle-btn"
          >
            <div className="bars"></div>
          </div>
        </nav>
        <div
          onClick={() => setIsMenuOpen(false)}
          className={"overflow" + (isMenuOpen ? " active" : "")}
        ></div>
      </header>
      <Link
        href="https://wa.me/5548999999"
        target={"_blank"}
        aria-label="Link para whatsapp"
        className="fixed w-full left-1/2 -translate-x-1/2 bottom-16 z-10 flex justify-end"
      >
        <div className="bg-[#25D366] rounded-full w-30 h-30 flex justify-center items-center mr-8">
          <SiWhatsapp size={30} />
        </div>
      </Link>
    </>
  );
}
