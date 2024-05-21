"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
// import { IconAppWindow } from "@tabler/icons-react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { Interface } from "readline";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourse = courseData.courses?.filter(
    (course: Courses) => course.isFeatured
  );

  return (
    <div className="p-12 bg-gray-900">
      <div className="text-center">
        <p className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </p>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </h2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
          {featuredCourse.map((course: Courses) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 relative flex flex-col items-center text-center flex-grow">
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
                  <Link  href={`/courses/${course.slug}`}>
                    <button className="rounded-full p-2 px-4 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">Learn more</button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
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

export default FeaturedCourses;
