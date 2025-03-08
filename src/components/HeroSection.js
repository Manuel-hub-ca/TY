// "use client"
// import React from "react";
// import { useTranslation } from "react-i18next";

// const HeroSection = () => {

//   const {t} = useTranslation();
//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen text-white text-center w-full"
//       style={{ 
//         backgroundImage: "url('/background.jpeg')", // ✅ Background Image
//         backgroundSize: "cover",                    // ✅ Covers full screen
//         backgroundPosition: "center",               // ✅ Centers image
//         backgroundRepeat: "no-repeat",              // ✅ No tiling
//         // backgroundAttachment: "fixed"               // ✅ Keeps image static on scroll
//       }}
//     >
//       <h1 className="text-3xl sm:text-4xl md:text-5xl text-5xl font-bold mb-4">{t("welcomeToOurServices")}</h1>
//       <p className="text-xl max-w-2xl">
//         {t("serviceDescription")}
//       </p>
//     </div>
//   );
// };

// export default HeroSection;


"use client";
import React from "react";
import { useIntl } from "react-intl";
const HeroSection = () => {
  const intl = useIntl()

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-neutral-950 text-center w-full px-4
                 bg-cover bg-center bg-no-repeat md:bg-fixed" // Fixed only on desktop
      // style={{ backgroundImage: "url('/background.JPG')" }}
    >
      <h1 className="text-6xl font-extrabold tracking-wide text-neutral-800">T&Y ELECTRIQUE</h1>
     <p className="text-xl mt-3 text-yellow-400 ">{intl.formatMessage({id:"powerupwithconfidence"})}</p>
      {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {intl.formatMessage({id:"welcomeToOurServices"})}
      </h1>
      <p className="text-xl max-w-2xl">
      {intl.formatMessage({id:"serviceDescription"})}
      </p> */}
    </div>
  );
};

export default HeroSection;
