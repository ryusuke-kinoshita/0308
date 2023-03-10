import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mt-0 mr-4">
      <ul className="flex justify-end gap-2">
        <li>
          <Link href="https://github.com/ryusuke-kinoshita/">
            <AiFillGithub size={35} />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/realryusuke6">
            <AiOutlineTwitter size={35} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/ryusukekino/">
            <AiOutlineInstagram size={35} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
