"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <div className="mt-[8rem] flex justify-center flex-col items-center gap-4">
        <h2 className="text-6xl font-bold mb-3">Contact Us</h2>
        <p className="text-center max-w-xl text-gray-500">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assets you in your
          musical journey
        </p>
      </div>
      <BackgroundBeams/>
    </div>
  );
}

export default ContactUs;
