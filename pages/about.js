import React from "react";
import Head from "next/head";

import Hero from "../conponents/Hero";
import Meta from "../conponents/Meta";

import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaPhp, FaPython, FaReact, FaMapPin } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { TbCandle } from "react-icons/tb";
import { ImMan } from "react-icons/im";

export default function about() {
  const iconSize1 = "20";
  const iconSize2 = "50";

  return (
    <>
      <Meta pageTitle="アバウト" />
      <div>
        <div>
          <Hero heading="About" message="自己紹介" image="image2" />
          <div className="text-left text-2xl bold mb-3 ml-3">
            <h3 className="pb-1 ">こんにちは</h3>
            <p className="flex p-1 text-3xl">
              <ImMan size={iconSize1} />
              木下隆介
            </p>
            <p className="flex p-1">
              <TbCandle size={iconSize1} />
              1986/01/26
            </p>
            <p className="flex p-1">
              <FaMapPin size={iconSize1} />
              長崎県大村市
            </p>
            <ul className="flex text-center gap-2">
              <li>
                <DiHtml5 size={iconSize2} />
              </li>
              <li>
                <DiCss3 size={iconSize2} />
              </li>
              <li>
                <DiJavascript1 size={iconSize2} />
              </li>
              <li>
                <FaPhp size={iconSize2} />
              </li>
              <li>
                <FaPython size={iconSize2} />
              </li>
              <li>
                <FaReact size={iconSize2} />
              </li>
              <li>
                <SiAdobephotoshop size={iconSize2} />
              </li>
              <li>
                <SiAdobeillustrator size={iconSize2} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
