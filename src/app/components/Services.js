// // // "use client";
// // // import { useTranslation } from "react-i18next";
// // // import { Wrench, ShieldCheck, Zap, Plug, BatteryCharging, Home, Hammer } from "lucide-react";
// // // import Card from "./Card";

// // // export default function Services() {
// // //   const { t } = useTranslation();

// // //   return (
// // //     <section className="w-full flex flex-col items-center justify-evenly pt-0 pb-14 bg-black bg-opacity-50">
// // //       {/* Wrapper for left text & right image */}
// // //       <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6" id="services">
// // //         {/* Left: Text Section */}
// // //         <div className="md:w-1/2 flex flex-col items-start text-white space-y-3">
// // //           <h1 className="text-4xl font-bold">{t("nosServices")}</h1>

// // //           <div className="flex items-center gap-2">
// // //             <Wrench className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("appeldeservice")}</h2>
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <ShieldCheck className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("maintenance")}</h2>
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <Zap className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("panelandServiceEntrance")}</h2>
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <Plug className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("generatorInstallation")}</h2>
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <BatteryCharging className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("bornedeRecharge")}</h2>
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <Home className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("newConstruction")}</h2>
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <Hammer className="w-5 h-5 text-yellow-400" />
// // //             <h2>{t("Renovation")}</h2>
// // //           </div>
// // //         </div>

// // //         {/* Right: Image Section */}
// // //         <div className="md:w-full">
// // //           <Card
// // //             src={require("@/public/serviceImg2.jpeg")}
// // //             alt="residential"
// // //             IsServiceCommercial={false}
// // //             href="/residential"
// // //           />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";
// // import { useTranslation } from "react-i18next";
// // import { Wrench, ShieldCheck, Zap, Plug, BatteryCharging, Home, Hammer } from "lucide-react";

// // export default function Services() {
// //   const { t } = useTranslation();

// //   return (
// //     <section className="w-full flex flex-col items-center justify-center py-14 bg-black bg-opacity-50 text-white px-6">
      
// //       {/* Section Title */}
// //       <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
// //         {t("nosServices")}
// //       </h1>

// //       {/* Grid Layout for Service Items */}
// //       <div className="w-full max-w-4xl grid grid-cols-3 gap-x-10 gap-y-6 text-lg">
        
// //         {/* Left Column (First Services) */}
// //         <div className="flex flex-col space-y-4">
// //           <div className="flex items-center gap-3">
// //             <Wrench className="w-6 h-6 text-yellow-400" />
// //             <h2>{t("appeldeservice")}</h2>
// //           </div>
// //           <div className="flex items-center gap-3">
// //             <ShieldCheck className="w-6 h-6 text-yellow-400" />
// //             <h2>{t("maintenance")}</h2>
// //           </div>
// //           <div className="flex items-center gap-3">
// //             <Zap className="w-6 h-6 text-yellow-400" />
// //             <h2>{t("panelandServiceEntrance")}</h2>
// //           </div>
// //         </div>

// //         {/* Middle Column (Centered "Renovation") */}
// //         <div className="flex flex-col items-center justify-center">
// //           <div className="flex items-center gap-3">
// //             <Hammer className="w-6 h-6 text-yellow-400" />
// //             <h2 className="text-center">{t("Renovation")}</h2>
// //           </div>
// //         </div>

// //         {/* Right Column (Last Services) */}
// //         <div className="flex flex-col space-y-4">
// //           <div className="flex items-center gap-3">
// //             <Plug className="w-6 h-6 text-yellow-400" />
// //             <h2>{t("generatorInstallation")}</h2>
// //           </div>
// //           <div className="flex items-center gap-3">
// //             <BatteryCharging className="w-6 h-6 text-yellow-400" />
// //             <h2>{t("bornedeRecharge")}</h2>
// //           </div>
// //           <div className="flex items-center gap-3">
// //             <Home className="w-6 h-6 text-yellow-400" />
// //             <h2>{t("newConstruction")}</h2>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import { useTranslation } from "react-i18next";
// import { Wrench, ShieldCheck, Zap, Plug, BatteryCharging, Home, Hammer } from "lucide-react";

// export default function Services() {
//   const { t } = useTranslation();

//   return (
//     <section className="w-full flex flex-col items-center justify-center py-14 bg-black bg-opacity-50 text-white px-6">
      
//       {/* Section Title */}
//       <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
//         {t("nosServices")}
//       </h1>

//       {/* Grid Layout (Responsive) */}
//       <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6 text-lg">
        
//         {/* Left Column (First Services) */}
//         <div className="flex flex-col space-y-4 items-center sm:items-start">
//           <div className="flex items-center gap-3">
//             <Wrench className="w-6 h-6 text-yellow-400" />
//             <h2>{t("appeldeservice")}</h2>
//           </div>
//           <div className="flex items-center gap-3">
//             <ShieldCheck className="w-6 h-6 text-yellow-400" />
//             <h2>{t("maintenance")}</h2>
//           </div>
//           <div className="flex items-center gap-3">
//             <Zap className="w-6 h-6 text-yellow-400" />
//             <h2>{t("panelandServiceEntrance")}</h2>
//           </div>
//         </div>

//         {/* Middle Column (Centered "Renovation") */}
//         <div className="flex flex-col items-center justify-center">
//           <div className="flex items-center gap-3">
//             <Hammer className="w-6 h-6 text-yellow-400" />
//             <h2 className="text-center">{t("Renovation")}</h2>
//           </div>
//         </div>

//         {/* Right Column (Last Services) */}
//         <div className="flex flex-col space-y-4 items-center sm:items-start">
//           <div className="flex items-center gap-3">
//             <Plug className="w-6 h-6 text-yellow-400" />
//             <h2>{t("generatorInstallation")}</h2>
//           </div>
//           <div className="flex items-center gap-3">
//             <BatteryCharging className="w-6 h-6 text-yellow-400" />
//             <h2>{t("bornedeRecharge")}</h2>
//           </div>
//           <div className="flex items-center gap-3">
//             <Home className="w-6 h-6 text-yellow-400" />
//             <h2>{t("newConstruction")}</h2>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Wrench, ShieldCheck, Zap, Plug, BatteryCharging, Home, Hammer } from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col items-center justify-center py-14 bg-black bg-opacity-50 text-white px-6">
      
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
        {t("nosServices")}
      </h1>

      {/* Grid Layout */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6 text-lg">
        
        {/* Left Column */}
        <div className="flex flex-col space-y-4 items-center sm:items-start">
          <Link href="/services#appeldeservice" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <Wrench className="w-6 h-6 text-yellow-400" />
            <h2>{t("appeldeservice")}</h2>
          </Link>
          
          <Link href="/services#maintenance" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <ShieldCheck className="w-6 h-6 text-yellow-400" />
            <h2>{t("maintenance")}</h2>
          </Link>

          <Link href="/services#panelandServiceEntrance" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <Zap className="w-6 h-6 text-yellow-400" />
            <h2>{t("panelandServiceEntrance")}</h2>
          </Link>
        </div>

        {/* Middle Column (Centered "Renovation") */}
        <div className="flex flex-col items-center justify-center">
          <Link href="/services#renovation" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <Hammer className="w-6 h-6 text-yellow-400" />
            <h2 className="text-center">{t("Renovation")}</h2>
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4 items-center sm:items-start">
          <Link href="/services#generatorInstallation" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <Plug className="w-6 h-6 text-yellow-400" />
            <h2>{t("generatorInstallation")}</h2>
          </Link>

          <Link href="/services#bornedeRecharge" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <BatteryCharging className="w-6 h-6 text-yellow-400" />
            <h2>{t("bornedeRecharge")}</h2>
          </Link>

          <Link href="/services#newConstruction" scroll={false} className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 transition">
            <Home className="w-6 h-6 text-yellow-400" />
            <h2>{t("newConstruction")}</h2>
          </Link>
        </div>

      </div>
    </section>
  );
}
