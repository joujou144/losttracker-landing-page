"use client";

import { Button, Heading, MissingPersons } from "@/components";
import InfoBoard from "@/components/InfoBoard";
import {
  CTA_INTRO,
  CTA_TEXT,
  MAP_DATE,
  MAP_INFO,
  MAP_TEXT,
  persons,
  REASONS,
  STATISTICS,
  WHY_SLOGANS,
} from "@/constant";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Fragment } from "react";

const Why = () => {
  return (
    <section id="why" className="xl-container relative pt-[5.5rem]">
      <div className="max-container">
        <div className="mx-4 lg:flex lg:gap-6 lg:items-start xl:gap-10">
          <div className="lg:w-1/2 border-2 flex flex-col gap-6 lg:justify-between">
            <div className=" bg-slate-300 rounded-xl p-6 flex flex-col text-dark-100">
              <Heading variant="header-dark" label="the reason" />

              <ul>
                {REASONS.map(({ reason }) => (
                  <p key={reason} className="my-6 content-size">
                    {reason}
                  </p>
                ))}
              </ul>

              <ul className="self-end text-right">
                {WHY_SLOGANS.map(({ label }) => (
                  <h3 key={label} className="mt-2 bold-content">
                    {label}
                  </h3>
                ))}
              </ul>
            </div>
            <CallToAction />
          </div>

          <MissingPersons
            missing={persons}
            className="lg:w-1/2 order-first py-6 min-[900px]:py-0"
          />
        </div>
        <InfoBoard
          title="missing people by the numbers"
          className="mt-10 mb-4 mx-4"
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-primary-700 mx-4">
          {STATISTICS.map(({ label, number }, idx) => (
            <li
              key={idx}
              className="bg-dark-300 px-5 py-4 rounded-lg shadow-md h-[120px] flex flex-col justify-between"
            >
              <p className="text-[22px] font-bold content-font tracking-wider">
                {number}
              </p>
              <span className="text-sm md:text-[16px] overflow-hidden text-ellipsis mb-2 content-font tracking-wider">
                {label}
              </span>
            </li>
          ))}
        </ul>
        <p className="my-4 text-xs md:text-sm content-font tracking-wider mx-4">
          LostTracker only accepts cases that have been verified with law
          enforcement and entered into the NCA system.
        </p>
        <p className="text-center capitalize bold-content my-10 text-primary-700">
          {MAP_TEXT}
        </p>
      </div>
      <Map />
    </section>
  );
};

const CallToAction = () => {
  return (
    <div className="content-size pb-6 lg:pb-4 flex flex-col gap-6">
      <p className="p-6 bg-surface-mixed-200 rounded-xl font-light">
        {CTA_INTRO}
      </p>
      <p className="md:w-3/4 lg:w-full xl:w-3/4 text-center lg:text-left lg:self-start sm:self-center font-light">
        {CTA_TEXT}
      </p>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between md:flex-col md:items-center md:gap-6">
        <Image
          src="/Logo-light.svg"
          alt="LostInNL-logo"
          width={100}
          height={100}
          className="w-auto h-auto"
        />
        <Link
          href="https://react-losttracker.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            icon
            type="button"
            label="Add Missing Person"
            className="lg:order-first"
          />
        </Link>
      </div>
    </div>
  );
};

const customIcon = L.icon({
  iconUrl: "/man-icon.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = () => {
  return (
    <Fragment>
      <div className="bg-slate-200 content-font text-[13px] md:text-[14px] py-2 text-dark-200">
        <div className="max-container">
          <p className="mx-4">{MAP_DATE}</p>
        </div>
      </div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={false}
        className="h-[500px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {persons.map(({ name, geocode, imageSrc, createdAt }) => (
          <Marker position={geocode} key={name} icon={customIcon}>
            <Popup>
              <div className=" w-[200px] flex gap-2 items center">
                <Image
                  src={imageSrc}
                  className="rounded-full"
                  alt={`${name}'s photo`}
                  width={100}
                  height={50}
                />
                <div className="text-xxs">
                  <p className="font-medium">{name}</p>
                  <p>
                    Missing since <span className="font-bold">{createdAt}</span>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="bg-slate-200 content-font text-[13px] md:text-[14px] py-2 text-dark-200">
        <div className="max-container">
          <p className="mx-4 text-right">{MAP_INFO}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Why;
