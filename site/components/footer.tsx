"use client"

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300 p-6 md:p-12 mt-16">
      <div className="text-main_color text-2xl font-bold mb-4">Contact</div>
      <div className="flex flex-col md:flex-row justify-between">
        <ul className="flex justify-between md:justify-start md:space-x-10 mb-4 md:mb-0">
          <li>
            <a href="https://www.linkedin.com/in/hye-soo-park-785844242/" target="_blank"  className="text-lg font-bold">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:hyehye@kaist.ac.kr" className="text-lg font-bold">
              Email
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HyeSPark07?s=20&t=HhxT7YxGlyINJPoDcDRSbw" target="_blank" className="text-lg font-bold">
              Twitter
            </a>
          </li>
          <li>
            <a href="/assets/data/CV.pdf" target="_blank" className="text-lg font-bold">
              CV
            </a>
          </li>
        </ul>
        <span className="text-gray-500 text-sm md:text-right">
          © 2022. Hye Soo Park all rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
