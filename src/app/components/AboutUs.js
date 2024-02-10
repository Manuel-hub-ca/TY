"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export function AboutUs(props) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="h-full md:h-2/3 flex flex-col justify-start items-center bg-gray-100"
        id="about"
      >
        <h1 className="text-5xl text-gray-400 mt-6">{t("proposDeNous")}</h1>
        <p className="w-full h-full p-4 text-center">{t("propNouPara")}</p>
        <Link
          href={""}
          className="border-solid border-2 border-black mb-6 p-2 hover:bg-yellow-200"
        >
          <h2 className="text-2xl">{t("savoirPlus")}</h2>
        </Link>
      </div>
    </>
  );
}
