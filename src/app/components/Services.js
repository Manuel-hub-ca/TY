"use client";
import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function Services() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLocal = i18n.language;
  
  const service =
    currentLocal === "en"
      ? "Commercial Service"
      : currentLocal === "fr"
      ? "Service Commerciaux"
      : currentLocal === "es"
      ? "Servicio Commercial"
      : "Unknown language";

  return (
    <section
      className="h-screen md:h-96 flex flex-col items-center bg-white"
      id="services"
    >
      <h1 className="text-5xl text-gray-400 mt-7">{t("nosServices")}</h1>
      <div className=" h-full w-full flex flex-col md:flex-row justify-evenly items-center">
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
