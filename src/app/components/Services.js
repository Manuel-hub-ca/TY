"use client";
import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function Services() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <section
      className="h-max md:h-max flex flex-col items-center justify-evenly pt-10 pb-14 bg-white"

    >
      <h1 className="text-4xl  text-gray-400 mb-8">{t("nosServices")}</h1>
      <div className="h-full w-full flex flex-col md:flex-row justify-evenly items-center" id="services">
        <Card
          src={require("@/public/img/commercial.jpeg")}
          alt="commercial"
          IsServiceCommercial={true}
          href="/commercial"
        />

        <Card
          src={require("@/public/img/residential.jpeg")}
          alt="residential"
          IsServiceCommercial={false}
          href="/residential"
        />
      </div>
    </section>
  );
}
