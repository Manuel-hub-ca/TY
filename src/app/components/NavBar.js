"use client"; // ✅ Ensures this runs only on the client side
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const { push } = useRouter();

  const handleNavigation = (id, isServicePage = false) => {
    setServicesOpen(false);
    if (isServicePage) {
      if (id == "home"){
        push("/")
      }else {
        push(`/services#${id}`);
      }

    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    const { t } = useTranslation();

  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-80 z-50 flex justify-between items-center px-6 py-4">
      {/* Logo */}
      {/* <div className="flex items-center cursor-pointer" onClick={() => handleNavigation("main")}>
        <Image src="/img/logo.jpg" alt="My Logo" width={120} height={40} />
        <LanguageChanger />
      </div> */}

      <div className="flex   items-start cursor-pointer" onClick={() => handleNavigation("home",true)}>
        <Image src="/img/logo.jpg" alt="My Logo" width={120} height={40} />
        <LanguageChanger />
      </div>


      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen((prev) => !prev)} className="text-yellow-300 text-2xl">
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </button>
      </div>

      {/* Navbar Items (Desktop) */}
      <div className={`md:flex md:items-center md:space-x-6 ${menuOpen ? "flex flex-col items-center w-full bg-black p-6" : "hidden md:flex"}`}>
      <ReappearingNavItem
          defaultText={t("home")}
          hoverText={t("home")}
          onClick={() => handleNavigation("home", true)}
        />
        {/* Services Dropdown */}
        <motion.div
          className="relative group"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setServicesOpen(true);
          }}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
          }}
        >
          
          <motion.div className="text-white text-lg flex items-center cursor-pointer">
    
            <span> {t("services")}</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-sm" />
          </motion.div>

          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute left-0 mt-2 bg-gray-700 shadow-md rounded-lg py-2 w-56 z-50"
            >
              <DropdownItem text={t("appeldeservice")} onClick={() => handleNavigation("service-call", true)} />
              <DropdownItem text={t("maintenance")} onClick={() => handleNavigation("maintenance", true)} />
              <DropdownItem text={t("panelandServiceEntrance")} onClick={() => handleNavigation("panel", true)} />
              <DropdownItem text={t("generatorInstallation")} onClick={() => handleNavigation("generator", true)} />
              <DropdownItem text={t("bornedeRecharge")} onClick={() => handleNavigation("ev", true)} />
              <DropdownItem text={t("newConstruction")} onClick={() => handleNavigation("new-construction", true)} />
              <DropdownItem text={t("Renovation")} onClick={() => handleNavigation("renovation", true)} />
            </motion.div>
          )}
        </motion.div>

        {/* ✅ Corrected Reappearing Nav Items */}
        <ReappearingNavItem
          defaultText={t("propos")}
          hoverText={t("propos")}
          onClick={() => handleNavigation("about")}
        />
        <ReappearingNavItem
          defaultText={t("contactez")}
          hoverText={t("contactez")}
          onClick={() => handleNavigation("contact")}
        />
      </div>
  


      </nav>
  );
}

/* ✅ Reusable Dropdown Item */
const DropdownItem = ({ text, onClick }) => (
  <div className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer" onClick={onClick}>
    {text}
  </div>
);



const ReappearingNavItem = ({ defaultText, hoverText, onClick }) => {
  return (
    <motion.div
      className="relative text-white text-lg cursor-pointer overflow-hidden h-8 flex justify-center items-center min-w-[160px]"
      onClick={onClick}
      whileHover="hovered"
      initial="initial"
      animate="initial"
    >
      {/* Default Text (Visible Initially) */}
      <motion.div
        className="absolute w-full text-center"
        variants={{
          initial: { y: "0%", opacity: 1 },
          hovered: { y: "100%", opacity: 0.3 }, // ✅ Leaves slowly visible before disappearing
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }} // ✅ Smooth & natural
        style={{
          color: "#ffffff", // Always white text
          backgroundColor: "transparent", // No background
          fontSize: "18px",
        }}
      >
        {defaultText}
      
      </motion.div>

      {/* Hover Text (Appears from Above) */}
      <motion.div
        className="absolute w-full text-center"
        variants={{
          initial: { y: "-100%", opacity: 0.3 }, // ✅ Starts slightly visible
          hovered: { y: "0%", opacity: 1 }, // ✅ Slowly becomes fully visible
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }} // ✅ Smooth & natural
        style={{
          color: "#ffffff", // Always white text
          backgroundColor: "transparent", // No background
          fontSize: "18px",
        }}
      >
        {hoverText}
      </motion.div>
    </motion.div>
  );
};



