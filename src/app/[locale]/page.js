

// import { AboutUs } from "../components/AboutUs";
// import ContactMe from "../components/ContactMe";
// import Footer from "../components/Footer";
// import HeroSection from "../components/HeroSection";
// import NavBar from "../components/NavBar";
// import Services from "../components/Services";
// import TranslationsProvider from "../components/TranslationsProvider";
// import initTranslations from "../i18n";

// const i18nNamespaces = ["home"];

// async function Home({ params: { locale } }) {
//   const { t, resources } = await initTranslations(locale, i18nNamespaces);
  
//   return (
//     <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
//       {/* Apply the background image to the whole page */}
//       <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col">
//         {/* NavBar */}
//         <NavBar />

//         {/* Hero Section */}
//         <HeroSection />

//         {/* Ensure a smooth transition */}
//         <div className="w-full">
//           <Services />
//           <AboutUs />
//           <ContactMe />
//           <Footer />
//         </div>
//     </div>
//     </TranslationsProvider>
//   );
// }

// export default Home;

import Head from "next/head";
import { AboutUs } from "../components/AboutUs";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../i18n";

const i18nNamespaces = ["home"];

async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      {/* ✅ Add SEO Meta Tags */}
      <Head>
        <title>Top Electrical Services | Your Business Name</title>
        <meta name="description" content="Get professional and reliable electrical services for residential and commercial needs. Safety and efficiency guaranteed." />
        <meta name="keywords" content="electrician, electrical services, commercial electrical, residential electrical, power solutions" />
        <meta name="author" content="Your Business Name" />

        {/* ✅ Social Media Sharing (Open Graph Meta Tags) */}
        <meta property="og:title" content="Top Electrical Services | Your Business Name" />
        <meta property="og:description" content="Get professional and reliable electrical services for residential and commercial needs." />
        <meta property="og:image" content="/background.jpeg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Mobile Friendly */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Canonical URL (To Avoid Duplicate Content Issues) */}
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <HeroSection />
          <div className="w-full">
            <Services />
            <AboutUs />
            <ContactMe />
            <Footer />
          </div>
        </div>
      </TranslationsProvider>
    </>
  );
}

export default Home;


