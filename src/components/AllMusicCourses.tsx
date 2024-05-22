import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

function AllMusicCourses() {
  return (
    <div className="h-[40rem] p-6 pt-12 justify-center items-center flex flex-col overflow-hidden">
      <h2 className=" sm:text-5xl text-center text-4xl font-bold">
        All Courses (10)
      </h2>
      <div>
       <CourseCard/>
      </div>
    </div>
  );
}

export default AllMusicCourses;

function CourseCard(){
  return (
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
        Gitar fundamentals
        <CardItem className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          cumque dolores hic quasi voluptates magni.
        </CardItem>
      </CardItem>
      <CardItem className="mt-10 w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        ></Image>
      </CardItem>
    </CardBody>
  </CardContainer>
  );
}
