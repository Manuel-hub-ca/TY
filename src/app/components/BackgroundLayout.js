  "use client";
  import { usePathname } from "next/navigation";

  export default function BackgroundLayout({ children }) {
    const pathname = usePathname(); // ✅ Get current route
    const isServicesPage = pathname.startsWith("/services") || pathname.includes("/services");

    return (
      <div
        className={`min-h-screen w-full ${isServicesPage ? "bg-black text-white" : "bg-cover bg-center bg-fixed"}`}
        style={{
          backgroundImage: isServicesPage ? "none" : "url('/background.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
    );
  }


  
