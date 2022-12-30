import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const imageLoader = require("./../loader.js");

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className={"menu" + (isMenuOpen ? " open" : "")}>
        <Link href="/" as="image">
          <figure className="relative w-[80px] h-[40px]">
            <Image
              src="/logo.webp"
              alt="Logo pessoal - Desenhado com linhas abstratas simbolizando a letra V"
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
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li className="item">
            <Link href="/#sobre" className="link">
              Sobre
            </Link>
          </li>
          <li className="item">
            <Link href="/#servicos" className="link">
              Serviços
            </Link>
          </li>
          <li className="item">
            <Link href="/#skills" className="link">
              Minhas Skills
            </Link>
          </li>
          <li className="item">
            <Link href="/#portfolio" className="link">
              Portfólio
            </Link>
          </li>
          <li className="item">
            <Link href="/#faq" className="link">
              FAQ
            </Link>
          </li>
          <li className="item">
            <Link href="/#contato" className="link">
              Contato
            </Link>
          </li>
        </ul>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="toggle-btn">
          <div className="bars"></div>
        </div>
      </nav>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={"overflow" + (isMenuOpen ? " active" : "")}
      ></div>
    </header>
  );
}
