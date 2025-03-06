// // import { Inter } from "next/font/google";
// // import "./globals.css";
// // import i18nConfig from "../../../i18nConfig";
// // import { dir } from "i18next";
// // import BackgroundLayout from "../components/BackgroundLayout"; // ✅ Import new wrapper

// // export function generateStaticParams() {
// //   return i18nConfig.locales.map((locale) => ({ locale }));
// // }

// // const inter = Inter({ subsets: ["latin"] });

// // export const metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };

// // export default function RootLayout({ children, params: { locale } }) {
// //   return (
// //     <html lang={locale} dir={dir(locale)} className={inter.className}>
// //       <body className="relative">
// //         {/* ✅ Wrap in BackgroundLayout to control background */}
// //         <BackgroundLayout>{children}</BackgroundLayout>
// //       </body>
// //     </html>
// //   );
// // }

// import { Inter } from "next/font/google";
// import "./globals.css";
// import i18nConfig from "../../lib/i18nConfig";
// import { dir } from "i18next";
// import BackgroundLayout from "../../components/BackgroundLayout"; // ✅ Import Background Wrapper
// import TranslationsProvider from "../../components/TranslationsProvider"; // ✅ Import Translations Provider

// export function generateStaticParams() {
//   return i18nConfig.locales.map((locale) => ({ locale }));
// }

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children, params: { locale } }) {
//   return (
//     <html lang={locale} dir={dir(locale)} className={inter.className}>
//       <body className="relative">
//         <TranslationsProvider locale={locale}>
//           {/* ✅ Wrap in BackgroundLayout to control background */}
//           <BackgroundLayout>{children}</BackgroundLayout>
//         </TranslationsProvider>
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from "../../lib/i18nConfig";
import { dir } from "i18next";
import BackgroundLayout from "@/components/BackgroundLayout"; // ✅ Background Wrapper
import ServerIntlProvider from "@/components/ServerIntlProvider"; // ✅ Intl Provider for translations
import getIntl from "../intl"; // ✅ Fetch translations for server components

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  const intl = await getIntl(locale, "common"); // ✅ Fetch translations for "common" namespace

  return (
    <html lang={locale} dir={dir(locale)} className={inter.className}>
      <body className="relative">
        {/* ✅ Wrap in IntlProvider to provide translations */}
        <ServerIntlProvider messages={intl.messages} locale={locale}>
          <BackgroundLayout>{children}</BackgroundLayout>
        </ServerIntlProvider>
      </body>
    </html>
  );
}
