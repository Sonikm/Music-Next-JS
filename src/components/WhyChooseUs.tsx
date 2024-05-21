"use client";
import React from "react";
import { musicSchoolContent } from "@/data/content";
import { StickyScroll } from "./ui/sticky-scroll-reavel";


function WhyChooseUs() {
  return (
    <div className="no-scrollbar">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
