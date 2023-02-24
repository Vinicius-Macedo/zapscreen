import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 pt-8 sm:pt-32 lg:px-0">
      <div className="py-16 flex flex-wrap  justify-center gap-16 lg:justify-between font-bold m-auto w-full max-w-[1110px] border-t border-t-[#28292b] bordert-w text-whitegray">
        <div className="flex gap-12 text-white">
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
        <p>Todos os direitos reservados ZapScreen</p>
        <p>Desenvolvido by</p>
      </div>
    </footer>
  );
}
