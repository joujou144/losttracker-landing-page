import { Heading } from "@/components";
import {
  ABOUT_HEADLINE,
  ABOUT_LEFT_CONTENT,
  ABOUT_RIGHT_CONTENT,
  ABOUT_SLOGANS,
  BOX_CONTENT,
} from "@/constant";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="max-container pt-[5.5rem]">
      <div className="mx-4 flex flex-col gap-6">
        <Heading label="who we are" variant="header-light" />

        <h2 className="text-primary-700 bold-20 md:bold-24 lg:bold-28 italic">
          {ABOUT_HEADLINE}
        </h2>

        <div className="flex justify-between gap-10 content-size max-[950px]:flex-col">
          <div className="flex flex-col gap-6 lg:justify-between lg:w-1/2">
            {ABOUT_LEFT_CONTENT.map(({ content }) => (
              <p key={content} className="font-light">
                {content}
              </p>
            ))}

            <p className="bg-surface-mixed-200 p-6 text-primary-600 rounded-xl">
              {BOX_CONTENT}
            </p>
          </div>

          <div className="flex flex-col gap-10 min-[680px]:flex-row min-[680px]:justify-between min-[950px]:flex-col lg:w-1/2">
            <p className="min-[680px]:w-[45%] min-[950px]:w-full font-light">
              {ABOUT_RIGHT_CONTENT}
            </p>

            <div className="min-[680px]:w-1/2 min-[950px]:w-full flex gap-4 md:gap-8 lg:gap-10">
              <Image
                src="/about.jpg"
                alt="hope-image"
                width={100}
                height={20}
                className="rounded-xl md:w-[30%] xl:w-[28%] h-auto"
              />
              <div className="flex flex-col justify-between">
                {ABOUT_SLOGANS.map(({ label }) => (
                  <h3
                    key={label}
                    className="text-primary-700 bold-16 md:bold-20 lg:bold-24 xl:text-[28px] header-font italic tracking-tight min-[400px]:-tracking-normal"
                  >
                    {label}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
