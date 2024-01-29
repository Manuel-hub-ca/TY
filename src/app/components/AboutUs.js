import Link from "next/link";
import React from "react";

export function AboutUs(props) {
  return (
    <>
      <div
        className="h-full md:h-80 flex flex-col justify-start items-center bg-gray-100 mt-24"
        id="about"
      >
        <h1 className="text-5xl text-gray-400 mt-6">About us</h1>
        <p className="w-full h-full p-4 text-center">
          At TY, our core mission is centered on delivering an
          unyielding dedication to excellence, efficiency, and safety. We thrive
          in executing our projects even amidst the most demanding and
          challenging conditions, always upholding the highest standards of
          service and integrity. At the heart of our purpose lies an exceptional
          capacity to adapt to change while steadfastly adhering to our
          unwavering commitment to performance and safety. This distinctive
          ability places us in a unique position within our industry and region.
          Our overarching goal is to embed this ethic throughout every facet of
          our operations — from our engineering and management professionals to
          our field personnel and labor relations. We believe that by
          maintaining this steadfast commitment, we not only distinguish
          ourselves but also contribute to the success and safety of every
          endeavor we undertake.
        </p>
        <Link href={''} className="border-solid border-2 border-black mb-6 p-2 hover:bg-yellow-200"><h2 className="text-2xl">More about us</h2></Link>
      </div>
    </>
  );
}
