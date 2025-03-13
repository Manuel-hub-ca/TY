// "use client";

// import ContactMe from "@/components/ContactMe";
// import Footer from "@/components/Footer";
// import LanguageChanger from "@/components/LanguageChanger";
// import NavBar from "@/components/NavBar";

// export default function Page() {
//     return (
//         <div className="min-h-screen w-100 flex flex-col">
//             {/* Navbar */}
//             <NavBar />

//             {/* Centered Section with Proper Spacing */}
//             <div className="flex-grow flex flex-col items-center justify-center mt-48 px-6 text-center">
//                 <h1 className="text-neutral-900 text-5xl sm:text-6xl font-extrabold leading-tight">
//                     Privacy Policy <br className="sm:hidden" /> / Politique de confidentialité
//                 </h1>
//                 <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl">
//                     Learn how we handle your data with transparency and security.
//                 </p>
//             </div>

//             {/* ContactMe & Footer */}
//             <div className="mt-auto">
//                 <ContactMe />
//                 <Footer />
//                 <LanguageChanger />
//             </div>
//         </div>
//     );
// }


"use client";

import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import LanguageChanger from "@/components/LanguageChanger";
import NavBar from "@/components/NavBar";

export default function Page() {
    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            {/* Navbar */}
            <NavBar />

            {/* Centered Section with Background Color */}
            <div className="flex-grow flex flex-col items-center justify-center mt-[120px] px-6 text-center bg-gray-100 w-full py-12">

                <h1 className="text-neutral-900 text-5xl sm:text-6xl font-extrabold leading-tight">
                    Privacy Policy <br className="sm:hidden" /> / Politique de confidentialité
                </h1>
                {/* <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl">
                Safe, efficient, and professional electrical solutions.
                </p> */}
            </div>

            {/* ContactMe & Footer Section with Background */}
            <div className="mt-auto w-full bg-gray-400">
                <ContactMe />
                <Footer />
                <LanguageChanger />
            </div>
        </div>
    );
}



