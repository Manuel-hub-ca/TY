"use client";
import Image from "next/image";
import logo from "../../../public/img/logo.jpg";
import { useState } from "react";
import hamburger from "../../../public/img/hamburger-menu.svg";
import close from "../../../public/img/close.svg";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Overlay from "./Overlay";

export default function NavBar() {
  const [navBar, setNavBar] = useState(false);
  const { t } = useTranslation();

  const handleScroll = (id) => {
    const elem = document.getElementById(id);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: id === "contact" ? "start" : "center",
      });
      if (navBar === true) {
        setNavBar(!navBar);
      }
    }
  };
  // useEffect(() => {
  //     const handleResize = () => {
  //         if (window.innerWidth >= 768 && navBar) {
  //             // If screen size is larger than or equal to 768 pixels and navBar is open, close it
  //             setNavBar(false);
  //         }
  //     };

  //     // Attach the event listener
  //     window.addEventListener("resize", handleResize);

  //     // Cleanup the event listener on component unmount
  //     return () => {
  //         window.removeEventListener("resize", handleResize);
  //     };
  // }, [navBar]);

  return (
    <>
      <nav
        className={`w-full flex justify-between fixed left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50`}
      >
        {navBar && <Overlay />}
        <button
          className="flex justify-between"
          onClick={() => handleScroll("main")}
        >
          <Image src={logo} alt="my logo" width={100} height={100} />
          <LanguageChanger />
        </button>

        <div className="md:hidden z-30 mr-4 mt-4">
          <button onClick={() => setNavBar((navBar) => !navBar)}>
            {navBar ? (
              <FontAwesomeIcon
                icon={faX}
                size="2x"
                className="text-yellow-300"
              />
            ) : (
              // <Image src={close} layout="responsive" alt="close" />
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className="text-yellow-300"
              />
              // <Image src={hamburger} alt="hamburger-menu" layout="responsive" />
            )}
          </button>
        </div>
        <div
          className={`md:text-yellow-400 active:text-yellow-400 md:flex items-center justify-between z-20 w-3/4 ${
            navBar
              ? "absolute w-full h-screen right-0 text-yellow-200 flex flex-col justify-evenly items-center bg-gray-800 md:bg-transparent md:text-red-300 md:w-[30vw] md:flex md:flex-row md:justify-between md:relative"
              : "hidden"
          }`}
        >
          <button
            className="hover:text-gray-300 border-b text-base border-gray-300 hover:border-b-2 w-3/4 md:border-none"
            onClick={() => handleScroll("services")}
          >
            {t("services")}
          </button>
          <button
            className="hover:text-gray-300 text-base border-b border-gray-300 w-3/4 hover:border-b-2 md:border-none"
            onClick={() => handleScroll("about")}
          >
            {t("propos")}
          </button>
          <button
            className="hover:text-gray-300 border-b hover:border-b-2 text-base border-gray-300 w-3/4 md:border-none"
            onClick={() => handleScroll("contact")}
          >
            {t("contactez")}
          </button>
        </div>
      </nav>
    </>
  );
}
