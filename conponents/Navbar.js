import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [position, setPosition] = useState("relative");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScrollChangeColor = () => {
    if (window.scrollY >= 90) {
      setColor("#fff");
      setTextColor("#000");
      setPosition("sticky");
    } else {
      setColor("transparent");
      setTextColor("#fff");
      setPosition("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChangeColor);
    return () => {
      window.removeEventListener("scroll", handleScrollChangeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl ">
            Portfolio
          </h1>
        </Link>
        <ul
          className="hidden sm:flex"
          style={{ position: `${position}`, color: `${textColor}` }}
        >
          <li className="p-4 hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* モバイル用ハンバーガー */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* モバイル用メニュー */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
