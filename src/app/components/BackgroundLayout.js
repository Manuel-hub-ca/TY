"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackgroundLayout({ children }) {
  const pathname = usePathname();
  const isServicesPage = pathname.startsWith("/services") || pathname.includes("/services");

  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen size is mobile
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint = 640px
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`w-full min-h-screen overflow-hidden ${
        isServicesPage ? "bg-black text-white" : "bg-white"
      }`}
      style={{
        backgroundImage: isServicesPage
          ? "none"
          : isMobile
          ? "url('/electrician_tools.webp')" // ✅ Mobile background
          : "url('/dkbc.webp')", // ✅ Desktop background
        backgroundSize: isMobile ? "contain" : "cover", // ✅ Ensures no zooming on phones
        backgroundPosition: "top center", // ✅ Keeps the image properly aligned
        backgroundRepeat: "no-repeat",
        backgroundAttachment: isMobile ? "scroll" : "fixed", // ✅ Fixes weird stretching issues on mobile
        backgroundColor: "#ffffff", // ✅ Prevents weird white gaps
      }}
    >
      {/* ✅ Ensure the first section has NO margin */}
      <div className="mt-0 pt-0">{children}</div>
    </div>
  );
}

// "use client";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function BackgroundLayout({ children }) {
//   const pathname = usePathname();
//   const isServicesPage = pathname.startsWith("/services") || pathname.includes("/services");

//   const [isMobile, setIsMobile] = useState(false);

//   // Detect if screen size is mobile
//   useEffect(() => {
//     const checkScreenSize = () => setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint = 640px
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <div
//       className={`w-full min-h-screen overflow-hidden ${
//         isServicesPage ? "bg-black text-white" : "bg-white"
//       }`}
//       style={{
//         backgroundImage: isServicesPage
//           ? "none"
//           : isMobile
//           ? "url('/electrician_tools.webp')" // ✅ Mobile background (unchanged)
//           : "url('/dkbc.webp')", // ✅ Laptop-sized background
//         backgroundSize: isMobile ? "contain" : "110% auto", // ✅ Slightly enlarged to avoid zooming
//         backgroundPosition: isMobile ? "top center" : "center top", // ✅ Keeps the image balanced
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: isMobile ? "scroll" : "fixed", // ✅ Keeps it fixed on desktop
//         backgroundColor: "#ffffff", // ✅ Prevents gaps if image doesn’t fully cover
//       }}
//     >
//       {/* ✅ Ensure the first section has NO margin */}
//       <div className="mt-0 pt-0">{children}</div>
//     </div>
//   );
// }
