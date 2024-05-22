"use clinet";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data/content";

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      <h2 className="mb-20 text-center text-4xl font-bold">
        Here our Harmony: Voices of success
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        speed="normal"
        direction="right"
      />
    </div>
  );
}

export default TestimonialCards;
