"use client";

import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

const Footer: React.FC = () => {
  const renderButton = (link: string, title: string, i: number) => (
    <li key={i}>
      <a href={link} target="_blank" className="text-lg font-bold">
        {title}
      </a>
    </li>
  );

  const buttons = [
    {
      link: "https://www.linkedin.com/in/hyespark/",
      title: "LinkedIn",
    },
    {
      link: "mailto:hye@gatech.edu",
      title: "Email",
    },
    {
      link: "https://twitter.com/HyeSPark07",
      title: "Twitter",
    },
    {
      link: "/data/CV.pdf",
      title: "CV",
    },
  ];

  return (
    <footer className="border-t border-gray-300 p-6 md:p-12 mt-16">
      <div className="text-main_color dark:text-main_color_dark text-2xl font-bold mb-4">
        Contact
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <ul className="flex justify-between md:justify-start md:space-x-10 mb-4 md:mb-0">
          {buttons.map((el, i) => renderButton(el.link, el.title, i))}
        </ul>
        <div className="flex gap-2 items-center">
          <span className="text-gray-500 text-sm md:text-right">
            © 2026. Hyesoo Park all rights reserved.
          </span>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
