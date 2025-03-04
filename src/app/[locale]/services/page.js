"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar"; // ✅ Import NavBar
import ContactMe from "../../components/ContactMe";
export default function Services() {
  return (
    <section className="bg-neutral-900 text-gray-300">
      {/* ✅ Include the Navbar at the top */}
      <NavBar />

      {/* ✅ Header Section with Background Image */}
      <header className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center">
        {/* ✅ Background Image (Only inside the Header) */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/serviceBackground.jpg" // ✅ Replace with your actual image path
            alt="Header Background"
            layout="fill"
            objectFit="cover" // ✅ Makes it behave like a background image
            quality={90}
            className="z-0"
          />
          {/* ✅ Dark Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* ✅ Text Content (Stays on Top of Image) */}
        <div className="relative z-10 text-yellow-400">
          <h1 className="text-6xl font-extrabold tracking-wide">T&Y ELECTRIQUE</h1>
          <p className="text-xl mt-3 text-gray-300">Power up with confidence!</p>
        </div>
      </header>

      {/* ✅ Services Intro */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 uppercase">Our Services</h2>
        <p className="text-lg text-gray-400">
          Tailored to Reflect Your Needs. We’ve been the certified experts to turn to.
          Whether you need an EV charging station, electrical repairs, or upgrades, we’ve got you covered.
        </p>
      </div>

      {/* ✅ Services List (Rest of the Page is Normal) */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">
        {[
          {
            id: "appeldeservice",
            title: "SERVICE CALLS",
            description:
              "We handle a variety of electrical systems, from repairs to new installations. Available 24/7 for emergencies.",
            points: [
              "Prompt Issue Resolution",
              "Optimized System Performance",
              "Compliance with Standards",
              "Reliable Customizations",
            ],
          },
          {
            id: "maintenance",
            title: "MAINTENANCE",
            description:
              "Our maintenance services keep your systems running efficiently, reducing downtime and ensuring safety.",
            points: [
              "Increased Safety",
              "Extended Lifespan",
              "Improved System Reliability",
              "Minimized Downtime",
            ],
          },
          {
            id: "panelandServiceEntrance",
            title: "PANEL AND SERVICE ENTRANCE",
            description:
              "Whether installing new panels or repairing existing systems, we ensure compliance and reliability.",
            points: [
              "Neat Wiring",
              "Proper Grounding",
              "Compliance Tags",
              "Updated Panels",
            ],
          },
          {
            id: "generatorInstallation",
            title: "GENERATOR INSTALLATION",
            description:
              "Ensure uninterrupted power with our expert generator installation services.",
            points: [],
          },
          {
            id: "bornedeRecharge",
            title: "EV CHARGING STATIONS",
            description:
              "We install EV charging stations at your home or business for convenient charging.",
            points: [],
          },
          {
            id: "newConstruction",
            title: "NEW CONSTRUCTION",
            description:
              "We provide full electrical installation for new buildings, ensuring code compliance and efficiency.",
            points: [],
          },
          {
            id: "renovation",
            title: "RENOVATION",
            description:
              "Upgrade or rewire your electrical systems for safety and efficiency.",
            points: [],
          },
        ].map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } items-center gap-6 bg-gray-800 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 duration-300`}
          >
            {/* Text Section */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-yellow-400 uppercase">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
              {service.points.length > 0 && (
                <ul className="mt-2 text-gray-400 list-disc list-inside">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              <Link
                href="/contact"
                className="mt-4 inline-block text-yellow-400 font-bold border border-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[250px] md:w-[350px] md:h-[200px]">
                <Image
                  src="/service1.jpeg"
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Contact & Info Section */}

        <ContactMe/>
      {/* <div className="bg-[#000000] text-yellow-400 text-center py-12 mt-12 shadow-lg">
        <h2 className="text-4xl font-bold uppercase">Contact Us</h2>
        <p className="mt-3 text-xl text-gray-300">T&Y Electrique</p>
        <p className="mt-2 text-lg">Phone: <a href="tel:4387013448" className="text-yellow-400">438-701-3448</a></p>
        <p>Email: <a href="mailto:info@quebexelectrique.com" className="text-yellow-400">info@quebexelectrique.com</a></p>
        <p className="mt-3">RBQ: 5811-4216-01</p>
        <p className="mt-3">Address: 1414 rue Berlier, Laval, QC, H7L 4A1</p>
        <p className="mt-3">Opening Hours:</p>
        <p>Monday - Friday: 7 AM - 4 PM</p>
        <p className="mt-2">Emergencies: <span className="text-yellow-400">24/7</span></p>
      </div> */}

      {/* ✅ Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-gray-900">
        &copy; 2025 All Rights Reserved | T&Y Electrique |
        <Link href="/privacy" className="text-yellow-400 ml-2 hover:text-white transition">
          Privacy Policy
        </Link>
      </footer>
    </section>
  );
}
