// "use client";
// import { useTranslation } from "react-i18next";

// export default function ContactMe() {
//   const emailAddress = "manueljuliocasanova@gmail.com";
//   const { t } = useTranslation();
//   return (
//     <section className="flex items-center h-screen md:h-96 w-full text-gray-400">
//       <div className="h-5/6 md:h-3/4  flex justify-center items-center w-full">
//         <div className="w-3/4 flex-col">
//           <div className="flex flex-col md:flex-row  md:justify-start">
//             <div className="mr-8">
//               <h5 className="w-full text-3xl" id="contact">
//                 Contactez-nous
//               </h5>
//               <h6 className="mt-6 text-2xl">Main Office</h6>
//               <br />
//               <p>
//                 850 Third Ave <br /> Suite 405 <br /> Brooklyn, NY 11232
//               </p>
//               <br />
//               <p className="w-max">
//                 P: (212) 206-1140 <br />
//                 F: (212) 206-6754 <br />
//                 <a
//                   href={`mailto:${emailAddress}`}
//                   className="border-solid border-b-2 hover:text-yellow-400"
//                 >
//                   E: manueljuliocasanova@gmail.com
//                 </a>
//               </p>
//             </div>

//             <div className="mr-28 mt-16">
//               <h6 className="text-2xl">Queens Office</h6>
//               <br />
//               <p>54-61 46th Street Maspeth, NY 11378</p>
//             </div>

//             <div className="mt-10 mb-10 md:mt-0">
//               <h5 className="w-full text-3xl">Polices</h5>
//               <h6 className="text-2xl mt-6">
//                 Cliquez sur nos polices pour télécharger
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ContactMe() {
  const { t } = useTranslation();
  const emailAddress = "tyelectrique@gmail.com";
  
  // Prevents server-client mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures rendering happens only on client
  }, []);

  return (
    <section className="flex items-center h-screen md:h-96 w-full text-gray-400 bg-white">
      <div className="h-5/6 md:h-3/4 flex justify-center items-center w-full">
        <div className="w-3/4 flex-col">
          <div className="flex flex-col md:flex-row md:justify-start">
            <div className="mr-8">
              <h5 className="w-full text-3xl" id="contact">
                Contactez-nous
              </h5>
              <h6 className="mt-6 text-2xl">Main Office</h6>
              <br />
              <p>
                850 Third Ave <br /> Suite 405 <br /> Brooklyn, NY 11232
              </p>
              <br />
              {isClient && ( // Ensures rendering only on the client
                <p className="w-max">
                  P: (212) 206-1140 <br />
                  F: (212) 206-6754 <br />
                  <a
                    href={`mailto:${emailAddress}`}
                    className="border-solid border-b-2 hover:text-yellow-400"
                  >
                    E: {emailAddress}
                  </a>
                </p>
              )}
            </div>

            <div className="mr-28 mt-16">
              <h6 className="text-2xl">Queens Office</h6>
              <br />
              <p>54-61 46th Street Maspeth, NY 11378</p>
            </div>

            <div className="mt-10 mb-10 md:mt-0">
              <h5 className="w-full text-3xl">Polices</h5>
              <h6 className="text-2xl mt-6">
                Cliquez sur nos polices pour télécharger
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
