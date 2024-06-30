import React from "react";
import Image from "next/image";
import { PersonProps } from "@/constant";
import { GrLocationPin } from "react-icons/gr";
import { RxDotsHorizontal } from "react-icons/rx";
import Heading from "./Heading";

type MissingPersonProps = {
  missing: PersonProps[];
  className: string;
};

const MissingPersons = ({ missing, className }: MissingPersonProps) => {
  return (
    <div className={`${className} grid place-content-center`}>
      <Heading
        variant="header-light"
        label="latest missing cases"
        className="lg:hidden pb-8 min-[800px]:pt-6 lg:py-0"
      />

      <ul className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 min-[850px]:grid-cols-3 lg:grid-cols-2">
        {missing.map(({ name, imageSrc, location, createdAt }) => (
          <li key={name} className="relative content-font">
            <Image
              src={imageSrc}
              alt={name}
              width={200}
              height={200}
              className="flex-1 h-[190px] w-full image-grayscale rounded-lg"
            />
            <DatePill createdAt={createdAt} />
            <div className="flexBetween py-2 border-[1px] border-b-gray-10">
              <p className="font-lighter tracking-wide">{name}</p>
              <RxDotsHorizontal size={20} />
            </div>

            <div className="text-[14px] py-2 flex gap-1 items-center">
              <GrLocationPin />
              <p className="tracking-wider font-light">{location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const DatePill = ({ createdAt }: { createdAt: string }) => {
  return (
    <span className="content-font tracking-wider absolute top-2 left-2 bg-gray-50 bg-opacity-80 text-white px-2 py-1.5 rounded-lg text-[11px]">
      {createdAt}
    </span>
  );
};

export default MissingPersons;
