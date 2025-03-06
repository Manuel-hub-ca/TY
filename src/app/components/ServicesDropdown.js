"use client"
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ServicesDropdown = ({ handleNavigation }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const { t } = useTranslation();

  return (
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
        <span>{t("services")}</span>
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
  );
};

/* ✅ Dropdown Item */
const DropdownItem = ({ text, onClick }) => (
  <div className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer" onClick={onClick}>
    {text}
  </div>
);

export default ServicesDropdown;
