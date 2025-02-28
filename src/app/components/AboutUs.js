// "use client";
// import Link from "next/link";
// import React from "react";
// import { useTranslation } from "react-i18next";

// export function AboutUs(props) {
//   const { t } = useTranslation();
//   return (
//     <>
//       <div className="h-full md:h-2/3 flex flex-col justify-start items-center bg-opacity-25">
//         <h1 className="text-4xl text-gray-400 mt-6">{t("proposDeNous")}</h1>
//         <p className="w-full h-full p-4 text-center">{t("propNouPara")}</p>
//         <Link
//           href={""}
//           className="border-solid border-2 border-black mb-6 p-2 hover:bg-yellow-200"
//           id="about"
//         >
//           <h2 className="text-2xl">{t("savoirPlus")}</h2>
//         </Link>
//       </div>
//     </>
//   );
// }


"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export function AboutUs(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-full md:h-2/3 flex flex-col justify-start items-center bg-[#1A1A1A]">
        {/* Updated Heading Color */}
        <h1 className="text-4xl text-[#00A3FF] mt-6">{t("proposDeNous")}</h1>

        {/* Improved Paragraph Color for Readability */}
        <p className="w-full h-full p-4 text-center text-[#F8F9FA]">
          {t("propNouPara")}
        </p>

        {/* Updated Link Button with a Softer Border & More Visible Text */}
        <Link
          href={""}
          className="border-solid border-2 border-[#444444] mb-6 p-2 hover:bg-[#FF6B00] transition-all duration-300"
          id="about"
        >
          <h2 className="text-2xl text-[#F8F9FA]">{t("savoirPlus")}</h2>
        </Link>
      </div>
    </>
  );
}
