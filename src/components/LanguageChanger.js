// // import { useTranslation } from "react-i18next";
// // import Image from "next/image";
// // import canFlag from "@/public/img/canadaFlag.png";
// // import qcFlag from "@/public/img/quebecFlag.png";
// // import spFlag from "@//public/img/spainFlag.png";
// // import { useState } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// // import { useRouter } from "next/navigation";
// // import { usePathname } from "next/navigation";
// // import i18nConfig from "@/i18nConfig";

// // export default function LanguageChanger() {
// //   const { i18n } = useTranslation();
// //   const [openedDropDownMenu, setOpenedDropDownMenu] = useState(false);
// //   const [rotated, setRotated] = useState(false);
// //   const router = useRouter();
// //   const currentPathname = usePathname();
// //   const currentLocale = i18n.language;

// //   const handleLanguageChange = (newLocale) => {
// //     // Change the language directly
// //     i18n.changeLanguage(newLocale);

// //     // set cookie for next-i18n-router
// //     const days = 30;
// //     const date = new Date();
// //     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
// //     const expires = date.toUTCString();
// //     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

// //     // redirect to the new locale path
// //     if (
// //       currentLocale === i18nConfig.defaultLocale &&
// //       !i18nConfig.prefixDefault
// //     ) {
// //       router.push("/" + newLocale + currentPathname);
// //     } else {
// //       router.push(
// //         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
// //       );
// //     }
// //     setOpenedDropDownMenu(false);
// //     router.refresh();
// //   };
// //   // Close the dropdown menu

// //   return (
// //     <div
// //       className="text-gray-800 w-max md:w-36 cursor-pointer flex flex-col justify-between items-center ml-8"
// //       onClick={() => setRotated(!rotated)}
// //     >
// //       <div
// //         className="flex w-full justify-around items-center rounded-t-md bg-gray-700 px-1 bg-opacity-75"
// //         onClick={() => setOpenedDropDownMenu(!openedDropDownMenu)}
// //       >
// //         <p className="h-full text-yellow-100 mr-2">Language</p>
// //         <FontAwesomeIcon
// //           icon={faAngleDown}
// //           size="2"
// //           style={{
// //             transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
// //             transition: "transform 0.5s",
// //           }}
// //         />
// //       </div>

// //       {openedDropDownMenu && (
// //         <div className="h-full w-full flex flex-col justify-center items-center bg-gray-300">
// //           <div
// //             className="flex justify-start items-center hover:bg-cyan-50 cursor-pointer w-20"
// //             onClick={() => handleLanguageChange("en")}
// //           >
// //             <Image src={canFlag} width={15} height={15} />
// //             <span className="ml-1">English</span>
// //           </div>
// //           <div
// //             className="flex justify-start items-center hover:bg-cyan-50 cursor-pointer w-20"
// //             onClick={() => handleLanguageChange("fr")}
// //           >
// //             <Image src={qcFlag} width={15} height={15} />
// //             <span className="ml-1">French</span>
// //           </div>
// //           <div
// //             className="flex justify-start items-center hover:bg-cyan-50 cursor-pointer w-20"
// //             onClick={() => handleLanguageChange("es")}
// //           >
// //             <Image src={spFlag} width={15} height={15} />
// //             <span className="ml-1">Spanish</span>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { useRouter, usePathname } from "next/navigation";
// import i18nConfig from "@/src/lib/i18nConfig";

// // ✅ Language options with flags
// const LANGUAGES = [
//   { code: "en", label: "English", flag: "/img/canadaFlag.png" },
//   { code: "fr", label: "French", flag: "/img/quebecFlag.png" },
//   { code: "es", label: "Spanish", flag: "/img/spainFlag.png" },
// ];

// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const router = useRouter();
//   const pathname = usePathname();
//   const currentLocale = i18n.language || i18nConfig.defaultLocale;

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [rotated, setRotated] = useState(false);

//   // ✅ Ensures the UI updates when language changes
//   useEffect(() => {
//     const onLanguageChange = (lng) => {
//       if (lng !== currentLocale) setDropdownOpen(false);
//     };
//     i18n.on("languageChanged", onLanguageChange);
//     return () => i18n.off("languageChanged", onLanguageChange);
//   }, [currentLocale, i18n]);

//   // ✅ Handles language change
//   // const handleLanguageChange = (newLocale) => {
//   //   if (!i18n.changeLanguage) {
//   //     console.error("i18n is not initialized properly");
//   //     return;
//   //   }

//   //   i18n.changeLanguage(newLocale);

//   //   // ✅ Set cookie for persistent language
//   //   document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${30 * 24 * 60 * 60}`;

//   //   // ✅ Redirect to the correct locale
//   //   const newPath = currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
//   //     ? `/${newLocale}${pathname}`
//   //     : pathname.replace(`/${currentLocale}`, `/${newLocale}`);

//   //   router.push(newPath);
//   //   router.refresh();
//   // };

//   const handleLanguageChange = async (newLocale) => {
//     if (!i18n || !i18n.changeLanguage) {
//       console.error("🚨 i18n is not initialized properly");
//       return;
//     }
  
//     try {
//       // ✅ Change the language before navigating
//       await i18n.changeLanguage(newLocale);
  
//       // ✅ Update the language in a cookie
//       document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${30 * 24 * 60 * 60}`;
  
//       // ✅ Ensure URL does not contain duplicate locales
//       let newPath = pathname;
//       i18nConfig.locales.forEach((locale) => {
//         if (newPath.startsWith(`/${locale}/`)) {
//           newPath = newPath.replace(`/${locale}`, "");
//         } else if (newPath === `/${locale}`) {
//           newPath = "/";
//         }
//       });
  
//       // ✅ Add new locale to the path
//       if (newLocale !== i18nConfig.defaultLocale || i18nConfig.prefixDefault) {
//         newPath = `/${newLocale}${newPath}`;
//       }
  
//       // ✅ Navigate and reload to apply changes
//       router.push(newPath);
//       router.refresh();
//     } catch (error) {
//       console.error("🚨 Error changing language:", error);
//     }
//   };
  
  
//   return (
//     <div
//       className="relative text-gray-800 w-max md:w-36 cursor-pointer flex flex-col ml-8"
//       onClick={() => setRotated(!rotated)}
//     >
//       {/* ✅ Dropdown Toggle */}
//       <div
//         className="flex justify-between items-center bg-gray-700 px-2 py-1 rounded-md bg-opacity-75"
//         onClick={() => setDropdownOpen(!dropdownOpen)}
//       >
//         <p className="text-yellow-100 mr-2">Language</p>
//         <FontAwesomeIcon
//           icon={faAngleDown}
//           className="transition-transform duration-500"
//           style={{ transform: rotated ? "rotate(180deg)" : "rotate(0deg)" }}
//         />
//       </div>

//       {/* ✅ Dropdown Menu */}
//       {dropdownOpen && (
//         <div className="absolute top-full left-0 w-full bg-gray-300 rounded-md shadow-md mt-1">
//           {LANGUAGES.map(({ code, label, flag }) => (
//             <div
//               key={code}
//               className="flex items-center px-2 py-1 hover:bg-cyan-50 cursor-pointer"
//               onClick={() => handleLanguageChange(code)}
//             >
//               <Image src={flag} width={15} height={15} alt={`${label} flag`} />
//               <span className="ml-2">{label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../lib/i18nConfig";
import { useIntl } from "react-intl";

export default function LanguageChanger() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);
  const intl = useIntl()
  const handleChange = (e) => {
    const newLocale = e.target.value;

    // ✅ Set the NEXT_LOCALE cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${30 * 24 * 60 * 60}`;

    // ✅ Redirect to the correct locale path
    const newPath =
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
        ? `/${newLocale}${currentPathname}`
        : currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);

    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="fixed bottom-12 right-2 md:bottom-4 md:right-4 z-50 bg-gray-800 bg-opacity-75 p-2 rounded-md shadow-lg">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="px-3 py-2 bg-yellow-300 text-white rounded-md cursor-pointer outline-none"
      >
        <option value="en">{intl.formatMessage({ id: "english" })}</option>
        <option value="fr">{intl.formatMessage({ id: "french" })}</option>
        <option value="es">{intl.formatMessage({ id: "spanish" })}</option>
      </select>
    </div>
  )
}
