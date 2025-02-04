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
        <title>Top Electrical Services | TY-2</title>
        <meta name="description" content="Get professional and reliable electrical services for residential and commercial needs. Safety and efficiency guaranteed." />
        <meta name="keywords" content="electrician, electrical services, commercial electrical, residential electrical, power solutions" />
        <meta name="author" content="TY-2 Electrical Services" />

        {/* ✅ Social Media Sharing (Open Graph Meta Tags) */}
        <meta property="og:title" content="Top Electrical Services | TY-2" />
        <meta property="og:description" content="Get professional and reliable electrical services for residential and commercial needs." />
        <meta property="og:image" content="https://ty-2-2goc32b78-manuelhubcas-projects.vercel.app/background.jpeg" />
        <meta property="og:url" content="https://ty-2-2goc32b78-manuelhubcas-projects.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Mobile Friendly */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Canonical URL (To Avoid Duplicate Content Issues) */}
        <link rel="canonical" href="https://ty-2-2goc32b78-manuelhubcas-projects.vercel.app" />
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
