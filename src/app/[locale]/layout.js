// import { Inter } from "next/font/google";
// import "./globals.css";
// import i18nConfig from "../../lib/i18nConfig";
// import { dir } from "i18next";
// import BackgroundLayout from "@/components/BackgroundLayout"; // ✅ Background Wrapper
// import ServerIntlProvider from "@/components/ServerIntlProvider"; // ✅ Intl Provider
// import getIntl from "../intl"; // ✅ Fetch translations

// export const metadata = {
//   title: "TY-TAN Electrical Services",
//   description: "Get professional and reliable electrical services for residential and commercial needs. Safety and efficiency guaranteed.",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//     shortcut: "/favicon.ico"
//   },
// };


// export function generateStaticParams() {
//   return i18nConfig.locales.map((locale) => ({ locale }));
// }

// const inter = Inter({ subsets: ["latin"] });

// export default async function RootLayout({ children, params: { locale } }) {
//   // ✅ Fetch translations for "home" and "services"
//   const homeIntl = await getIntl(locale, "home");
//   const servicesIntl = await getIntl(locale, "services");

//   // ✅ Merge translations so "services" can use shared keys from "home"
//   const mergedMessages = { 
//     ...homeIntl.messages, 
//     ...servicesIntl.messages 
//   };

//   return (
//     <html lang={locale} dir={dir(locale)} className={inter.className}>
//       <body className="relative">
//         {/* ✅ Provide merged translations */}
//         <ServerIntlProvider messages={mergedMessages} locale={locale}>
//           <BackgroundLayout>
//             {children}
//           </BackgroundLayout>
//         </ServerIntlProvider>
//       </body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from "../../lib/i18nConfig";
import { dir } from "i18next";
import BackgroundLayout from "@/components/BackgroundLayout"; // ✅ Background Wrapper
import ServerIntlProvider from "@/components/ServerIntlProvider"; // ✅ Intl Provider
import getIntl from "../intl"; // ✅ Fetch translations

export const metadata = {
  title: "TY-TAN Electrical Services",
  description: "Get professional and reliable electrical services for residential and commercial needs. Safety and efficiency guaranteed.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico"
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params: { locale } }) {
  // ✅ Fetch translations for "home" and "services"
  const homeIntl = await getIntl(locale, "home");
  const servicesIntl = await getIntl(locale, "services");

  // ✅ Merge translations so "services" can use shared keys from "home"
  const mergedMessages = { 
    ...homeIntl.messages, 
    ...servicesIntl.messages 
  };

  return (
    <html lang={locale} dir={dir(locale)} className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.tyelectrique.ca" />
        
        {/* ✅ Open Graph */}
        <meta property="og:title" content="Top Electrical Services | TY-TAN" />
        <meta property="og:description" content="Get professional and reliable electrical services for residential and commercial needs." />
        <meta property="og:image" content="https://www.tyelectrique.ca/background.jpeg" />
        <meta property="og:url" content="https://www.tyelectrique.ca" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TY-TAN Electrical Services",
              "url": "https://www.tyelectrique.ca",
              "logo": "https://www.tyelectrique.ca/logo.png"
            }
          `}
        </script>
      </head>
      <body className="relative">
        {/* ✅ Provide merged translations */}
        <ServerIntlProvider messages={mergedMessages} locale={locale}>
          <BackgroundLayout>
            {children}
          </BackgroundLayout>
        </ServerIntlProvider>
      </body>
    </html>
  );
}
