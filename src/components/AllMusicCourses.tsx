import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import musicCourses from "@/data/music_courses.json";
import Link from "next/link";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function AllMusicCourses() {
  return (
    <div className="p-6 pt-12 justify-center items-center flex flex-col overflow-hidden">
      <h2 className=" sm:text-5xl mt-[6rem] text-center text-4xl font-bold">
        All Courses ({musicCourses.courses.length})
      </h2>
      <div className="flex flex-wrap justify-evenly items-center gap-x-8 mt-[4rem]">
        {musicCourses.courses.map((course: Courses, index) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default AllMusicCourses;

function CourseCard({ course }: { course: Courses }) {
  return (
    <CardContainer className="inter-var -my-10">
      <CardBody className="bg-gray-50 w-auto relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[26rem]  h-auto rounded-xl p-6 border">
        <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
          {course.title}
        </CardItem>
        <CardItem className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-500">
          {course.description}
        </CardItem>
        <CardItem className="mt-10 w-full">
          <Image
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          ></Image>
        </CardItem>
                <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>

      </CardBody>
    </CardContainer>
  );
}
