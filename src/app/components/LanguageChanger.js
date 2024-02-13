import { useTranslation } from "react-i18next";
import Image from "next/image";
import canFlag from "@/public/img/canadaFlag.png";
import qcFlag from "@/public/img/quebecFlag.png";
import spFlag from "@//public/img/spainFlag.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const [openedDropDownMenu, setOpenedDropDownMenu] = useState(false);
  const [rotated, setRotated] = useState(false);
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const handleLanguageChange = (newLocale) => {
    // Change the language directly
    i18n.changeLanguage(newLocale);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
    setOpenedDropDownMenu(false);
    router.refresh();
  };
  // Close the dropdown menu

  return (
    <div
      className="text-gray-800 w-max md:w-36 cursor-pointer flex flex-col justify-between items-center ml-8"
      onClick={() => setRotated(!rotated)}
    >
      <div
        className="flex w-full justify-around items-center rounded-t-md bg-gray-700 px-1 bg-opacity-75"
        onClick={() => setOpenedDropDownMenu(!openedDropDownMenu)}
      >
        <p className="h-full text-yellow-100 mr-2">Language</p>
        <FontAwesomeIcon
          icon={faAngleDown}
          size="2"
          style={{
            transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.5s",
          }}
        />
      </div>

      {openedDropDownMenu && (
        <div className="h-full w-full flex flex-col justify-center items-center bg-gray-300">
          <div
            className="flex justify-start items-center hover:bg-cyan-50 cursor-pointer w-20"
            onClick={() => handleLanguageChange("en")}
          >
            <Image src={canFlag} width={15} height={15} />
            <span className="ml-1">English</span>
          </div>
          <div
            className="flex justify-start items-center hover:bg-cyan-50 cursor-pointer w-20"
            onClick={() => handleLanguageChange("fr")}
          >
            <Image src={qcFlag} width={15} height={15} />
            <span className="ml-1">French</span>
          </div>
          <div
            className="flex justify-start items-center hover:bg-cyan-50 cursor-pointer w-20"
            onClick={() => handleLanguageChange("es")}
          >
            <Image src={spFlag} width={15} height={15} />
            <span className="ml-1">Spanish</span>
          </div>
        </div>
      )}
    </div>
  );
}
