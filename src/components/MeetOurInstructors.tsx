"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { courseInstructors } from "@/data/content";
import { WavyBackground } from "./ui/wavy-background";

function MeetOurInstructors() {
  return (
    <div className="relative p-6 h-[35rem] overflow-hidden flex justify-center items-center">
      <WavyBackground>
        <h2 className=" sm:text-6xl text-center text-4xl font-bold">
          Meet Our Instructors
        </h2>
        <p className=" mt-6 mb-4 text-center">
          Discover the telanted professionals who will guide your musical
          journey
        </p>
        <div className="flex justify-center items-center">
          <AnimatedTooltip items={courseInstructors}/>
        </div>
      </WavyBackground>
    </div>
  );
}

export default MeetOurInstructors;
