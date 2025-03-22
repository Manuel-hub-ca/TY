
  import ServerIntlProvider from "@/components/ServerIntlProvider";
  import getIntl from "@/app/intl";
  import NavBar from "@/components/NavBar"; 
  import ContactMe from "@/components/ContactMe";
  import LanguageChanger from "@/components/LanguageChanger";
  import Image from "next/image";
  import Link from "next/link";

  export default async function Services({ params: { locale } }) {
    const intl = await getIntl(locale, "services"); // ✅ Fetch translations

    return (
      <ServerIntlProvider messages={intl.messages} locale={locale}>
        <section className="bg-neutral-900 text-gray-300">
          {/* ✅ Include the Navbar */}
          <NavBar />

          {/* ✅ Header Section */}
          <header className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="/serviceBackground.jpg"
                alt="Header Background"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="z-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 text-yellow-400">
              <h1 className="text-6xl mt-24 font-extrabold tracking-wide">
                {intl.formatMessage({ id: "services_header" })} {/* ✅ Translated */}
              </h1>
              <p className="text-xl mt-3 text-gray-300">
                {intl.formatMessage({ id: "services_tagline" })} {/* ✅ Translated */}
              </p>
            </div>
          </header>

          {/* ✅ Services Intro */}
          <div className="max-w-4xl mx-auto text-center py-12 px-6">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4 uppercase">
              {intl.formatMessage({ id: "services_our_services" })}
            </h2>
            <p className="text-lg text-gray-400">
              {intl.formatMessage({ id: "services_description" })}
            </p>
          </div>

          {/* ✅ Full Services List */}
          <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">
            {[
              {
                id: "appeldeservice",
                title: intl.formatMessage({ id: "services_call_title" }),
                description: intl.formatMessage({ id: "services_call_description" }),
                points: [
                  intl.formatMessage({ id: "services_call_point1" }),
                  intl.formatMessage({ id: "services_call_point2" }),
                  intl.formatMessage({ id: "services_call_point3" }),
                  intl.formatMessage({ id: "services_call_point4" }),
                ],
                imageUrl:"/service_call.jpeg"
              },
              {
                id: "maintenance",
                title: intl.formatMessage({ id: "services_maintenance_title" }),
                description: intl.formatMessage({ id: "services_maintenance_description" }),
                points: [
                  intl.formatMessage({ id: "services_maintenance_point1" }),
                  intl.formatMessage({ id: "services_maintenance_point2" }),
                  intl.formatMessage({ id: "services_maintenance_point3" }),
                  intl.formatMessage({ id: "services_maintenance_point4" }),
                ],
                imageUrl:"/maintenance.jpeg"
              },
              {
                id: "panelandServiceEntrance",
                title: intl.formatMessage({ id: "services_panel_title" }),
                description: intl.formatMessage({ id: "services_panel_description" }),
                points: [
                  intl.formatMessage({ id: "services_panel_point1" }),
                  intl.formatMessage({ id: "services_panel_point2" }),
                  intl.formatMessage({ id: "services_panel_point3" }),
                  intl.formatMessage({ id: "services_panel_point4" }),
                ],
                imageUrl:"/panel.jpeg"
              },
              {
                id: "generatorInstallation",
                title: intl.formatMessage({ id: "services_generator_title" }),
                description: intl.formatMessage({ id: "services_generator_description" }),
                points: [],
                imageUrl:"/generator.jpeg"
              },
              {
                id: "bornedeRecharge",
                title: intl.formatMessage({ id: "services_ev_title" }),
                description: intl.formatMessage({ id: "services_ev_description" }),
                points: [],
                 imageUrl:"/comercial.jpeg"
              },
              {
                id: "newConstruction",
                title: intl.formatMessage({ id: "services_construction_title" }),
                description: intl.formatMessage({ id: "services_construction_description" }),
                points: [],
                 imageUrl:"/construccion.jpeg"
                
              },
              {
                id: "renovation",
                title: intl.formatMessage({ id: "services_renovation_title" }),
                description: intl.formatMessage({ id: "services_renovation_description" }),
                points: [],
                 imageUrl:"/renovation.jpeg"
              },
            ].map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex mb-10 flex-col md:flex-row ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } items-center gap-6 bg-gray-800 shadow-lg p-6 rounded-lg`}
              >
                {/* Text Section */}
                <div className="w-full text-center md:w-1/2">
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
                    href="mailto:tyelectrique@gmail.com"
                    className="mt-4 inline-block text-yellow-400 font-bold border border-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                  >
                    {intl.formatMessage({ id: "services_contact_us" })}
                  </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px]">
                    <Image
                      src={service.imageUrl}
                      fill
                      className="rounded-lg shadow-lg object-cover"
                      alt={service.title}
                      quality={90}
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* ✅ Contact Section */}
          <ContactMe />

          {/* ✅ Language Changer */}
          <LanguageChanger />

          {/* ✅ Footer */}
          <footer className="text-center text-sm text-gray-500 py-6 bg-gray-900">
            &copy; 2025 All Rights Reserved | T&Y Electrique |
            <Link href="/privacy" className="text-yellow-400 ml-2 hover:text-white transition">
              {intl.formatMessage({ id: "services_privacy_policy" })}
            </Link>
          </footer>
        </section>
      </ServerIntlProvider>
    );
  }
