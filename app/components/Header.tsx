"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
export const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="bg-gray-700 text-white">
      <div className="flex justify-between items-center">
        <h1 className="font-autograph m-7 ">John Doe</h1>
        <ul className=" m-7 md:flex hidden">
          <a className="cursor-pointer" href="#home">
            <li className="mx-5 text-2xl font-naveedkipasand hover:scale-150 duration-500">
              Home
            </li>
          </a>
          <a className="cursor-pointer" href="#about">
            <li className="mx-5 text-2xl font-naveedkipasand hover:scale-150 duration-500">
              About
            </li>
          </a>
          <li className="mx-5 text-2xl font-naveedkipasand hover:scale-150 duration-500">
            Portfolio
          </li>
          <li className="mx-5 text-2xl font-naveedkipasand hover:scale-150 duration-500">
            Skills
          </li>
          <li className="mx-5 text-2xl font-naveedkipasand hover:scale-150 duration-500">
            Contact
          </li>
        </ul>
        <div
          className="pr-5 md:hidden z-10"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle && (
          <div className="fixed top-0 left-0 bg-black h-screen text-red-500 w-full flex items-center justify-center">
            <ul className=" m-7  text-white   ">
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Home</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">About</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">
                Portfolio
              </li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">
                Skills
              </li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">
                Contact
              </li>
            </ul>
          </div>
        )}
        {/* overlay ends here */}
      </div>
    </section>
  );
};
