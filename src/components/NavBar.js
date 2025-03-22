"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";
import { useIntl } from "react-intl";
import LanguageChanger from "./LanguageChanger";
import ServicesDropdown from "./ServicesDropdown";
import { motion } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();
  const intl = useIntl();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    // Automatically highlight services if pathname includes "/services"
    if (pathname.includes("/services")) {
      setActiveSection("services");
    } else if (pathname === "/") {
      setActiveSection("home");
    }
  }, [pathname]);

  const handleNavigation = (id, isServicePage = false) => {
    setMenuOpen(false);

    if (isServicePage && id !== "home") {
      setActiveSection("services");
      router.push(`/services#${id}`);
    } else {
      setActiveSection(id);
      router.push(id === "home" ? "/" : `/#${id}`);
    }
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      }
    }, 500);
  };


  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-80 z-[1000] flex justify-between items-center px-6 py-4">
      <div className="flex items-start cursor-pointer">
        <Image
          src="/img/logo.jpg"
          alt="My Logo"
          width={120}
          height={40}
          onClick={() => handleNavigation("home", true)}
        />
        <LanguageChanger />
      </div>

      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen((prev) => !prev)} className="text-yellow-300 text-2xl">
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </button>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-6">
        <ReappearingNavItem
          defaultText={intl.formatMessage({ id: "home" })}
          hoverText={intl.formatMessage({ id: "home" })}
          onClick={() => handleNavigation("home", true)}
          isActive={activeSection === "home"}
        />
        <ServicesDropdown
          handleNavigation={handleNavigation}
          isActive={activeSection === "services"}
          setActiveSection={setActiveSection}
        />
        <ReappearingNavItem
          defaultText={intl.formatMessage({ id: "propos" })}
          hoverText={intl.formatMessage({ id: "propos" })}
          onClick={() => handleNavigation("about")}
          isActive={activeSection === "about"}
        />
        <ReappearingNavItem
          defaultText={intl.formatMessage({ id: "contactez" })}
          hoverText={intl.formatMessage({ id: "contactez" })}
          onClick={() => handleNavigation("contact")}
          isActive={activeSection === "contact"}
        />
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-[1000]">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-yellow-300 text-2xl">
            <FontAwesomeIcon icon={faX}/>
          </button>
          <ReappearingNavItem
            defaultText={intl.formatMessage({ id: "home" })}
            hoverText={intl.formatMessage({ id: "home" })}
            onClick={() => handleNavigation("home", true)}
            isActive={activeSection === "home"}
          />
          <ServicesDropdown
            handleNavigation={handleNavigation}
            isActive={activeSection === "services"}
            setActiveSection={setActiveSection}
          />
          <ReappearingNavItem
            defaultText={intl.formatMessage({ id: "propos" })}
            hoverText={intl.formatMessage({ id: "propos" })}
            onClick={() => handleNavigation("about")}
            isActive={activeSection === "about"}
          />
          <ReappearingNavItem
            defaultText={intl.formatMessage({ id: "contactez" })}
            hoverText={intl.formatMessage({ id: "contactez" })}
            onClick={() => handleNavigation("contact")}
            isActive={activeSection === "contact"}
          />
        </div>
      )}
    </nav>
  );
}

const ReappearingNavItem = ({ defaultText, hoverText, onClick, isActive }) => {
  const activeStyle = isActive ? "text-yellow-400 font-semibold" : "text-white";

  return (
    <motion.div
      className={`relative text-lg cursor-pointer overflow-hidden h-8 flex justify-center items-center min-w-[160px] ${activeStyle}`}
      onClick={onClick}
      whileHover="hovered"
      initial="initial"
      animate="initial"
    >
      <motion.div
        className="absolute w-full text-center"
        variants={{
          initial: { y: "0%", opacity: 1 },
          hovered: { y: "100%", opacity: 0.3 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ fontSize: "18px" }}
      >
        {defaultText}
      </motion.div>
      <motion.div
        className="absolute w-full text-center"
        variants={{
          initial: { y: "-100%", opacity: 0.3 },
          hovered: { y: "0%", opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ fontSize: "18px" }}
      >
        {hoverText}
      </motion.div>
    </motion.div>
  );
};
