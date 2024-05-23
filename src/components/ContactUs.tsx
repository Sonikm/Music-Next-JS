"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FormEvent } from "react";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submitted:", { email, message });
    setEmail('');
    setMessage('');
  }

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 p-6 pt-36 relative">
      <div className=" mt-6 flex justify-center flex-col items-center gap-4">
        <h2 className="text-6xl font-bold mb-3">Contact Us</h2>
        <p className="text-center max-w-xl text-gray-500">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assets you in your
          musical journey
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex z-20 w-full gap-5 flex-col justify-start items-start max-w-[600px]"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none text-white outline-none placeholder:text-gray-500 p-4 bg-black rounded-lg  inline-block w-full"
            type="email"
            placeholder="Your email address"
            required
          />
          <textarea
            className="border-none text-white min-h-[200px] outline-none placeholder:text-gray-500 p-4 bg-black rounded-lg max-w-[600px] inline-block w-full"
            placeholder="Your message"
            required
          />
          <button className="border-none text-white outline-none placeholder:text-gray-500 p-4 bg-[#088866] rounded-lg inline-block">
            Send your message
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ContactUs;
