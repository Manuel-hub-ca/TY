"use client"
import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {

  const {t} = useTranslation();
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white text-center w-full"
      style={{ 
        backgroundImage: "url('/background.jpeg')", // ✅ Background Image
        backgroundSize: "cover",                    // ✅ Covers full screen
        backgroundPosition: "center",               // ✅ Centers image
        backgroundRepeat: "no-repeat",              // ✅ No tiling
        backgroundAttachment: "fixed"               // ✅ Keeps image static on scroll
      }}
    >
      <h1 className="text-5xl font-bold mb-4">{t("welcomeToOurServices")}</h1>
      <p className="text-xl max-w-2xl">
        {t("serviceDescription")}
      </p>
    </div>
  );
};

export default HeroSection;
