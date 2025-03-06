// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";
// import { useIntl } from "react-intl";
// import LanguageChanger from "./LanguageChanger";
// import ServicesDropdown from "./ServicesDropdown"; // ✅ Separate component
// import { motion } from "framer-motion";

// export default function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();
//   const intl = useIntl()

//      // ✅ Fix: Close mobile menu when resizing to a larger screen (>= 768px)
//      useEffect(() => {
//       const handleResize = () => {
//         if (window.innerWidth >= 768 && menuOpen) {
//           setMenuOpen(false);
//         }
//       };
  
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, [menuOpen]); //
//   // ✅ Prevent scrolling when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [menuOpen]);


//     const handleNavigation = (id, isServicePage = false) => {
//       setMenuOpen(false); // ✅ Close menu on navigation
    
//       if (isServicePage) {
//         router.push(id === "home" ? "/" : `/services#${id}`)
//       setTimeout(() => {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({
//           behavior: "smooth",
//           block: "center", // ✅ Centers the element in the viewport
//           inline: "nearest",
//         });
//       }
//     }, 500); // 
//       } else {
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center", // ✅ Now places it in the middle for non-service pages too!
//             inline: "nearest",
//           });
//         }
//       }
//     };
    
 

//   return (
//     <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-80 z-[1000] flex justify-between items-center px-6 py-4">
//       {/* ✅ Logo */}
//       <div className="flex items-start cursor-pointer" >
//         <Image src="/img/logo.jpg" alt="My Logo" width={120} height={40} onClick={() => handleNavigation("home", true)}/>
//         <LanguageChanger />
//       </div>

//       {/* ✅ Mobile Menu Button */}
//       <div className="md:hidden z-50">
//         <button onClick={() => setMenuOpen((prev) => !prev)} className="text-yellow-300 text-2xl">
//           <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
//         </button>
//       </div>

//       {/* ✅ Desktop Menu */}
//       <div className="hidden md:flex md:items-center md:space-x-6">
//         <ReappearingNavItem defaultText={t("home")} hoverText={t("home")} onClick={() => handleNavigation("home", true)} />
        
//         {/* ✅ Services Dropdown (Now Works!) */}
//         <ServicesDropdown handleNavigation={handleNavigation} />

//         <ReappearingNavItem defaultText={t("propos")} hoverText={t("propos")} onClick={() => handleNavigation("about")} />
//         <ReappearingNavItem defaultText={t("contactez")} hoverText={t("contactez")} onClick={() => handleNavigation("contact")} />
//       </div>

//       {/* ✅ Mobile Menu (Visible when open) */}
//       {menuOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-[1000]">
//           <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-yellow-300 text-2xl">
//             <FontAwesomeIcon icon={faX} />
//           </button>
//           <ReappearingNavItem defaultText={t("home")} hoverText={t("home")} onClick={() => handleNavigation("home", true)} />

//           {/* ✅ Services Dropdown for Mobile */}
//           <ServicesDropdown handleNavigation={handleNavigation} />

//           <ReappearingNavItem defaultText={t("propos")} hoverText={t("propos")} onClick={() => handleNavigation("about")} />
//           <ReappearingNavItem defaultText={t("contactez")} hoverText={t("contactez")} onClick={() => handleNavigation("contact")} />
//         </div>
//       )}
//     </nav>
//   );
// }

// /* ✅ Reappearing Nav Item (Fixed Hover Animation) */
// const ReappearingNavItem = ({ defaultText, hoverText, onClick }) => {
//   return (
//     <motion.div
//       className="relative text-white text-lg cursor-pointer overflow-hidden h-8 flex justify-center items-center min-w-[160px]"
//       onClick={onClick}
//       whileHover="hovered"
//       initial="initial"
//       animate="initial"
//     >
//       {/* Default Text */}
//       <motion.div
//         className="absolute w-full text-center"
//         variants={{
//           initial: { y: "0%", opacity: 1 },
//           hovered: { y: "100%", opacity: 0.3 },
//         }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         style={{ color: "#ffffff", fontSize: "18px" }}
//       >
//         {defaultText}
//       </motion.div>

//       {/* Hover Text (Appears from Above) */}
//       <motion.div
//         className="absolute w-full text-center"
//         variants={{
//           initial: { y: "-100%", opacity: 0.3 },
//           hovered: { y: "0%", opacity: 1 },
//         }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         style={{ color: "#ffffff", fontSize: "18px" }}
//       >
//         {hoverText}
//       </motion.div>
//     </motion.div>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useIntl } from "react-intl";
import LanguageChanger from "./LanguageChanger";
import ServicesDropdown from "./ServicesDropdown";
import { motion } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const intl = useIntl(); // ✅ Use react-intl for translations

  // ✅ Close mobile menu when resizing (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // ✅ Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavigation = (id, isServicePage = false) => {
    setMenuOpen(false); // ✅ Close menu on navigation

    if (isServicePage) {
      router.push(id === "home" ? "/" : `/services#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center", // ✅ Centers the element in the viewport
            inline: "nearest",
          });
        }
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center", // ✅ Centers for non-service pages too!
          inline: "nearest",
        });
      }
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-80 z-[1000] flex justify-between items-center px-6 py-4">
      {/* ✅ Logo */}
      <div className="flex items-start cursor-pointer">
        <Image
          src="/img/logo.jpg"
          alt="My Logo"
          width={120}
          height={40}
          onClick={() => handleNavigation("home", true)}
        />
      </div>

      {/* ✅ Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen((prev) => !prev)} className="text-yellow-300 text-2xl">
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </button>
      </div>

      {/* ✅ Desktop Menu */}
      <div className="hidden md:flex md:items-center md:space-x-6">
        <ReappearingNavItem
          defaultText={intl.formatMessage({ id: "home" })}
          hoverText={intl.formatMessage({ id: "home" })}
          onClick={() => handleNavigation("home", true)}
        />

        {/* ✅ Services Dropdown */}
        <ServicesDropdown handleNavigation={handleNavigation} />

        <ReappearingNavItem
          defaultText={intl.formatMessage({ id: "propos" })}
          hoverText={intl.formatMessage({ id: "propos" })}
          onClick={() => handleNavigation("about")}
        />
        <ReappearingNavItem
          defaultText={intl.formatMessage({ id: "contactez" })}
          hoverText={intl.formatMessage({ id: "contactez" })}
          onClick={() => handleNavigation("contact")}
        />
      </div>

      {/* ✅ Mobile Menu (Visible when open) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-[1000]">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-yellow-300 text-2xl">
            <FontAwesomeIcon icon={faX} />
          </button>

          <ReappearingNavItem
            defaultText={intl.formatMessage({ id: "home" })}
            hoverText={intl.formatMessage({ id: "home" })}
            onClick={() => handleNavigation("home", true)}
          />

          {/* ✅ Services Dropdown for Mobile */}
          <ServicesDropdown handleNavigation={handleNavigation} />

          <ReappearingNavItem
            defaultText={intl.formatMessage({ id: "propos" })}
            hoverText={intl.formatMessage({ id: "propos" })}
            onClick={() => handleNavigation("about")}
          />
          <ReappearingNavItem
            defaultText={intl.formatMessage({ id: "contactez" })}
            hoverText={intl.formatMessage({ id: "contactez" })}
            onClick={() => handleNavigation("contact")}
          />
        </div>
      )}
    </nav>
  );
}

/* ✅ Reappearing Nav Item (Fixed Hover Animation) */
const ReappearingNavItem = ({ defaultText, hoverText, onClick }) => {
  return (
    <motion.div
      className="relative text-white text-lg cursor-pointer overflow-hidden h-8 flex justify-center items-center min-w-[160px]"
      onClick={onClick}
      whileHover="hovered"
      initial="initial"
      animate="initial"
    >
      {/* Default Text */}
      <motion.div
        className="absolute w-full text-center"
        variants={{
          initial: { y: "0%", opacity: 1 },
          hovered: { y: "100%", opacity: 0.3 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ color: "#ffffff", fontSize: "18px" }}
      >
        {defaultText}
      </motion.div>

      {/* Hover Text (Appears from Above) */}
      <motion.div
        className="absolute w-full text-center"
        variants={{
          initial: { y: "-100%", opacity: 0.3 },
          hovered: { y: "0%", opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ color: "#ffffff", fontSize: "18px" }}
      >
        {hoverText}
      </motion.div>
    </motion.div>
  );
};
