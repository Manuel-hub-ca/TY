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
    icon: "/favicon.svg", // ✅ Next.js automatically serves this from /public
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.svg"
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

