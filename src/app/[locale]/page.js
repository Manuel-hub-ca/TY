import { AboutUs } from "../components/AboutUs";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../i18n";

const i18nNamespaces = ["home"];
async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main
        className="flex h-screen flex-col items-center justify-between"
        id="main"
      >
        <div className="mx-auto">
          <NavBar />
        </div>
        <video
          src={require("../../../public/video.mp4")}
          autoPlay
          loop
          playsInline
          muted
          className="absolute w-full h-full object-cover left-0 z-[-1]"
        />
      </main>
      <Services />
      <AboutUs />
      <ContactMe />
      <Footer />
    </TranslationsProvider>
  );
}

export default Home;
