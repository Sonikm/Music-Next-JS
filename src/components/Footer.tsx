"use client";
import { footerContent } from "@/data/content";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black flex flex-col text-gray-400 py-12 overflow-hidden">
      <div className="grid  max-w-6xl mx-auto grid-cols-1 gap-8 lg:px-8 px-6 sm:grid-cols-2  lg:grid-cols-4">
        {footerContent.map((section, index) => (
          <div className="flex  justify-center items-start flex-col gap-2" key={index}>
            <h3 className="text-white text-base">{section.title}</h3>
            <div className="">
              {section.links.map((link, i) => (
                <Link key={i} href={'/'}>
                  <p className="text-sm pt-[2px]">{link.text}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-[6rem] text-sm text-center">
        &copy; {new Date().getFullYear()} Music School. All rights reserved🌸 
      </div>
    </footer>
  );
}

export default Footer;

