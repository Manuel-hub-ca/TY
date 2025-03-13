"use client";
import React from "react";
import { useIntl } from "react-intl";
const HeroSection = () => {
  const intl = useIntl()

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-neutral-950 text-center w-full px-4
                 bg-cover bg-center bg-no-repeat md:bg-fixed"
    >
      <h1 className="text-6xl font-extrabold tracking-wide text-neutral-800">T&Y ÉLECTRIQUE Inc.</h1>
     <p className="text-xl mt-3 text-yellow-400 ">{intl.formatMessage({id:"powerupwithconfidence"})}</p>
    </div>
  );
};

export default HeroSection;
