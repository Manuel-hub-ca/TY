// "use client";
// import { useTranslation } from "react-i18next";
// import Card from "./Card";

// export default function Services() {
//   const { t } = useTranslation();
//   const { i18n } = useTranslation();

//   return (
//     <section
//       className="h-max md:h-max flex flex-col items-center justify-evenly pt-10 pb-14 bg-white"

//     >
//       <h1 className="text-4xl  text-gray-400 mb-8">{t("nosServices")}</h1>
//       <div className="h-full w-full flex flex-col md:flex-row justify-evenly items-center" id="services">
//         <Card
//           src={require("@/public/img/commercial.jpeg")}
//           alt="commercial"
//           IsServiceCommercial={true}
//           href="/commercial"
//         />

//         <Card
//           src={require("@/public/img/residential.jpeg")}
//           alt="residential"
//           IsServiceCommercial={false}
//           href="/residential"
//         />
//       </div>
//     </section>
//   );
// }


"use client";
import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section
    className="w-full flex flex-col items-center justify-evenly pt-0 pb-14 bg-gray-300"
  >
  
      <h1 className="text-4xl mb-8 bg-gradient-to-r from-[#1A1A1A] to-yellow-400 p-5" >{t("nosServices")}</h1>
      {/* <h1 className="text-4xl mb-8 p-5 bg-gradient-to-r from-[#1A1A1A] to-yellow-400 text-transparent bg-clip-text">
  {t("nosServices")}
</h1> */}


      {/* Ensure Cards take full width */}
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center" id="services">
        <Card
          src={require("@/public/serviceImg1.jpeg")}
          alt="commercial"
          IsServiceCommercial={true}
          href="/commercial"
        />

        <Card
          src={require("@/public/serviceImg2.jpeg")}
          alt="residential"
          IsServiceCommercial={false}
          href="/residential"
        />
      </div>
    </section>
  );
}
