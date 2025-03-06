// import { createInstance } from "i18next";
// import { initReactI18next } from "react-i18next/initReactI18next";
// import resourcesToBackend from "i18next-resources-to-backend";
// import i18nConfig from "../../i18nConfig";

// export default async function initTranslations(
//   locale,
//   namespaces,
//   i18nInstance,
//   resources
// ) {
//   i18nInstance = i18nInstance || createInstance();

//   i18nInstance.use(initReactI18next);

//   if (!resources) {
//     i18nInstance.use(
//       resourcesToBackend((language, namespace) =>
//         import(`../../locales/${language}/${namespace}.json`)
//       )
//     );
//   }

//   await i18nInstance.init({
//     lng: locale,
//     resources,
//     fallbackLng: i18nConfig.defaultLocale,
//     supportedLngs: i18nConfig.locales,
//     defaultNS: namespaces[0],
//     fallbackNS: namespaces[0],
//     ns: namespaces,
//     preload: resources ? [] : i18nConfig.locales,
//   });

//   return {
//     i18n: i18nInstance,
//     resources: i18nInstance.services.resourceStore.data,
//     t: i18nInstance.t,
//   };
// }

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "./i18nConfig";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend((language, namespace) =>
        import(`../../locales/${language}/${namespace}.json`)
      )
    )
    .init({
      lng: i18nConfig.defaultLocale,
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      defaultNS: "common",
      fallbackNS: "common",
      ns: ["common"],
      preload: i18nConfig.locales,
      interpolation: { escapeValue: false },
    });
}

export default i18n; // ✅ Export the singleton instance

