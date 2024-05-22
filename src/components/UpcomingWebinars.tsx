"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { featuredWebinars } from "@/data/content";
import { title } from "process";
import Link from "next/link";

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="text-center">
        <p className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </p>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </h2>
      </div>
      <div className="mt-10">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </div>
      <div className="mt-20 text-center ">
        <Link
          className="bg-white p-3 px-4 font-semibold rounded-md hover:bg-gray-300 transition duration-200 border-neutral-600 text-black "
          href={"/courses"}
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
