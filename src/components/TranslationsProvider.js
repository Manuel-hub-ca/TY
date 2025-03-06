  // "use client";

  // import { I18nextProvider } from "react-i18next";
  // import initTranslations from "../../lib/i18n";
  // import { createInstance } from "i18next";

  // export default function TranslationsProvider({
  //   children,
  //   locale,
  //   namespaces,
  //   resources,
  // }) {
  //   const i18n = createInstance();

  //   initTranslations(locale, namespaces, i18n, resources);

  //   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  // }
  "use client";

  import i18n from "@/src/lib/i18n";
  import { I18nextProvider } from "react-i18next";
  // import i18n from " @/lib/i18n"; // ✅ Import the global i18n instance
  export default function TranslationsProvider({ children }) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }
