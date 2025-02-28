// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function Card(props) {
//   const { t } = useTranslation();

//   return (
//     <>
//       <div className="w-[300px] h-auto flex flex-col transition-transform duration-300 ease-in-out hover:transform hover:scale-105 bg-black bg-opacity-5 mx-4 mb-7 rounded-lg overflow-hidden">
//         <Link className="flex flex-col items-center" href={props.href}>
//           <Image 
//             src={props.src} 
//             alt={props.alt} 
//             width={300} 
//             height={200} 
//             className="object-cover w-full h-auto"
//           />
//           <div className="flex justify-center items-center p-2 bg-black bg-opacity-50 text-white w-full">
//             <h6 className="text-center text-lg font-semibold">
//               {props.IsServiceCommercial
//                 ? t("commercialService")
//                 : t("residentialService")}
//             </h6>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Card(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-[250px] h-auto flex flex-col transition-transform duration-300 ease-in-out hover:transform hover:scale-105 bg-black bg-opacity-5 mx-4 mb-7 rounded-lg overflow-hidden">
        <Link className="flex flex-col items-center" href={props.href}>
          <Image 
            src={props.src} 
            alt={props.alt} 
            width={250} 
            height={150} 
            className="object-cover w-full h-[200px]"
          />
          <div className="flex justify-center items-center p-2 bg-black bg-opacity-50 text-white w-full">
            <h6 className="text-center text-lg font-semibold">
              {props.IsServiceCommercial
                ? t("commercialService")
                : t("residentialService")}
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
}
