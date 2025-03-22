// "use client";
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { useIntl } from "react-intl";

// const ServicesDropdown = ({ handleNavigation }) => {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const timeoutRef = useRef(null);
//   const intl = useIntl();

//   return (
//     <motion.div
//       className="relative group"
//       onMouseEnter={() => {
//         if (timeoutRef.current) clearTimeout(timeoutRef.current);
//         setServicesOpen(true);
//       }}
//       onMouseLeave={() => {
//         timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
//       }}
//     >
//       <motion.div className="text-white text-lg flex items-center cursor-pointer">
//         <span>{intl.formatMessage({ id: "services" })}</span>
//         <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-sm" />
//       </motion.div>

//       {servicesOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.2, ease: "easeInOut" }}
//           className="absolute left-0 mt-2 bg-gray-700 shadow-md rounded-lg py-2 w-56 z-50"
//         >
//           <DropdownItem text={intl.formatMessage({ id: "appeldeservice" })} onClick={() => handleNavigation("appeldeservice", true)} />
//           <DropdownItem text={intl.formatMessage({ id: "maintenance" })} onClick={() => handleNavigation("maintenance", true)} />
//           <DropdownItem text={intl.formatMessage({ id: "panelandServiceEntrance" })} onClick={() => handleNavigation("panelandServiceEntrance", true)} />
//           <DropdownItem text={intl.formatMessage({ id: "generatorInstallation" })} onClick={() => handleNavigation("generatorInstallation", true)} />
//           <DropdownItem text={intl.formatMessage({ id: "bornedeRecharge" })} onClick={() => handleNavigation("bornedeRecharge", true)} />
//           <DropdownItem text={intl.formatMessage({ id: "newConstruction" })} onClick={() => handleNavigation("newConstruction", true)} />
//           <DropdownItem text={intl.formatMessage({ id: "renovation" })} onClick={() => handleNavigation("renovation", true)} />
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// /* ✅ Dropdown Item */
// const DropdownItem = ({ text, onClick }) => (
//   <div className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer" onClick={onClick}>
//     {text}
//   </div>
// );

// export default ServicesDropdown;


"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";

const ServicesDropdown = ({ handleNavigation, isActive, setActiveSection }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const intl = useIntl();

  const activeClass = isActive ? "text-yellow-400 font-semibold" : "text-white";

  const handleClick = (id) => {
    if (setActiveSection) {
      setActiveSection("services");
    }
    handleNavigation(id, true);
  };

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServicesOpen(true);
        if (setActiveSection) {
          setActiveSection("services");
        }
      }}
      
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
      }}
    >
      <motion.div className={`text-lg flex items-center cursor-pointer ${activeClass}`}>
        <span>{intl.formatMessage({ id: "services" })}</span>
        <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-sm" />
      </motion.div>

      {servicesOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute left-0 mt-2 bg-gray-700 shadow-md rounded-lg py-2 w-56 z-50"
        >
          <DropdownItem text={intl.formatMessage({ id: "appeldeservice" })} onClick={() => handleClick("appeldeservice")} />
          <DropdownItem text={intl.formatMessage({ id: "maintenance" })} onClick={() => handleClick("maintenance")} />
          <DropdownItem text={intl.formatMessage({ id: "panelandServiceEntrance" })} onClick={() => handleClick("panelandServiceEntrance")} />
          <DropdownItem text={intl.formatMessage({ id: "generatorInstallation" })} onClick={() => handleClick("generatorInstallation")} />
          <DropdownItem text={intl.formatMessage({ id: "bornedeRecharge" })} onClick={() => handleClick("bornedeRecharge")} />
          <DropdownItem text={intl.formatMessage({ id: "newConstruction" })} onClick={() => handleClick("newConstruction")} />
          <DropdownItem text={intl.formatMessage({ id: "renovation" })} onClick={() => handleClick("renovation")} />
        </motion.div>
      )}
    </motion.div>
  );
};

const DropdownItem = ({ text, onClick }) => (
  <div className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer" onClick={onClick}>
    {text}
  </div>
);

export default ServicesDropdown;
