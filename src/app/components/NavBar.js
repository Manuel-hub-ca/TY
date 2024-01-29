"use client";
import Image from "next/image";
import logo from "../../../public/img/logo.jpg";
import { useState } from "react";
import hamburger from "../../../public/img/hamburger-menu.svg";
import close from "../../../public/img/close.svg";

export default function NavBar() {
  const [navBar, setNavBar] = useState(false);

  const handleScroll = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        
      });
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
        className={`w-full py-2 px-4 flex justify-between fixed left-1/2 transform -translate-x-1/2 bg-transparent md:bg-black md:bg-opacity-50`}
      >
        <button
          className="border-2 border-solid border-black"
          onClick={() => handleScroll("main")}
        >
          <Image src={logo} alt="my tete" width={100} height={100} />
        </button>
        <div className="md:hidden">
          <button onClick={() => setNavBar((navBar) => !navBar)}>
            {navBar ? (
              <Image src={close} layout="responsive" alt="close" />
            ) : (
              <Image src={hamburger} alt="hamburger-menu" layout="responsive" />
            )}
          </button>
        </div>
        <div
          className={`md:text-yellow-400  w-[30vw] md:flex items-center justify-between ${
            navBar
              ? "absolute w-screen h-5/6 top-10 text-blue-400 flex flex-col justify-evenly items-center bg-black md:text-red-300 md:w-[30vw] md:flex md:flex-row md:justify-between md:relative"
              : "hidden"
          }`}
        >
          <button
            className="hover:text-yellow-100 active:text-yellow-400"
            onClick={() => handleScroll("services")}
          >
            Services
          </button>
          <button
            className="hover:text-yellow-100 active:text-yellow-400"
            onClick={() => handleScroll("about")}
          >
            About us
          </button>
          <button
            className="hover:text-yellow-100 active:text-yellow-400"
            onClick={() => handleScroll("contact")}
          >
            Contact us
          </button>
        </div>
      </nav>
    </>
  );
}
