  "use client";
  import Link from "next/link";
  import React from "react";
  
  import { useIntl } from "react-intl";
  export function AboutUs(props) {
    const intl = useIntl();
    return (
      <>
        <div id="about" className="h-full md:h-2/3 flex flex-col justify-start items-center bg-[#1A1A1A] bg-opacity-90">
          {/* Updated Heading Color */}
          <h1 className="text-4xl text-[#00A3FF] mt-6">{intl.formatMessage({id:"proposDeNous"})}</h1>

          {/* Improved Paragraph Color for Readability */}
          <p className="w-full h-full p-4 text-center text-[#F8F9FA]">
            {intl.formatMessage({id:"propNouPara"})}
          </p>

          {/* Updated Link Button with a Softer Border & More Visible Text */}
          <Link
            href={""}
            className="border-solid border-2 border-[#444444] mb-6 p-2 hover:bg-[#FF6B00] transition-all duration-300"
            id="about"
          >
            <h2 className="text-2xl text-[#F8F9FA]">{intl.formatMessage({id:"savoirPlus"})}</h2>
          </Link>
        </div>
      </>
    );
  }
