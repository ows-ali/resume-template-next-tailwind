import React from "react";

export const Header = () => {
  return (
    <section className="bg-gray-700 text-white">
      <div className="flex justify-between">
        <h1 className="font-autograph m-7 ">John Doe</h1>
        <ul className="m-7 flex">
          <li className="mx-5 text-2xl font-naveedkipasand">Home</li>
          <li className="mx-5 text-2xl font-naveedkipasand">About</li>
          <li className="mx-5 text-2xl font-naveedkipasand">Portfolio</li>
          <li className="mx-5 text-2xl font-naveedkipasand">Skills</li>
          <li className="mx-5 text-2xl font-naveedkipasand">Contact</li>
        </ul>
      </div>
    </section>
  );
};
