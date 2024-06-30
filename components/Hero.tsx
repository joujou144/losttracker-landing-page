"use client";

import { HERO_HEADLINE, HERO_SUBTEXT } from "@/constant";
import Image from "next/image";
import { Button } from "@/components";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="xl-container text-primary-600 relative flex items-center justify-center h-svh lg:h-screen">
      <div className="z-10 absolute inset-0 bg-gray-200 opacity-70 " />
      <Image src="/hero.jpg" alt="background image" fill />
      <div className="mx-4 w-fit flex flex-col items-start gap-6 lg:items-center lg:text-center lg:mx-auto">
        <h1 className="z-20 bold-20 min-[380px]:bold-24 md:bold-32 xl:bold-40">
          {HERO_HEADLINE}
        </h1>
        <p className="z-20 text-[14px] md:text-[18px] max-w-xs md:max-w-md lg:max-w-[55%] content-font text-primary-500 tracking-wider font-light">
          {HERO_SUBTEXT}
        </p>
        <Link
          href="https://react-losttracker.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            icon
            label="Add Missing Person"
            type="button"
            className="z-20 text-center mt-2"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
