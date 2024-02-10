import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Card(props) {
  const {t} = useTranslation()

  return (
    <>
      <div className="w-82 h-max flex flex-col transition-transform duration-300 ease-in-out hover:transform hover:scale-105 bg-black bg-opacity-5 mx-4 mb-7">
        <Link className="flex flex-col items-center" href={props.href}>
          <Image
            src={props.src}
            alt={props.alt}
            width={500}
            height={300}
          />
          {props.IsServiceCommercial ? t("commercialService") : t("residentialService")}
        </Link>
      </div>
    </>
  );
}
