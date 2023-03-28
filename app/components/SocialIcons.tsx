import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="top-[30vh] fixed">
      <Link href={"https://linkedin.com/"} target={"_blank"}>
        <div className="ml-[-86px] my-14  w-[150px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
          Linkedin
          <FaLinkedin size={30} />
        </div>
      </Link>

      {/* <Link href={"https://github.com/"} target={"_blank"}>
        <div className=" ml-[-86px] hover:ml-0 duration-200 flex text-lg items-center gap-2 fixed text-white bg-gray-600 top-[40vh] w-36 py-3 px-5 rounded-r-lg">
          Github
          <FaGithub size={30} />
        </div>
      </Link> */}

      <Link href={"https://github.com/"} target={"_blank"}>
        <div className=" ml-[-86px] my-28  w-[150px] flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
          Github
          <FaGithub size={30} />
        </div>
      </Link>

      <Link href={"https://medium.com/"} target={"_blank"}>
        <div className=" ml-[-86px]  hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600 w-36 py-3 px-5 rounded-r-lg">
          Medium
          <FaMedium size={30} />
        </div>
      </Link>

      {/* <div className="fixed text-white bg-gray-600 top-[40vh] w-32 py-3 px-5 rounded-r-lg">
        Github
      </div>

      <div className="fixed text-white bg-gray-600 top-[50vh] w-32 py-3 px-5 rounded-r-lg">
        Medium
      </div> */}
    </div>
  );
};

export default SocialIcons;
