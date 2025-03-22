"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "../lib/i18nConfig";
import { useIntl } from "react-intl";
import { ChevronDown } from "lucide-react";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);
  const intl = useIntl();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLocale = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${30 * 24 * 60 * 60}`;

    const newPath =
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
        ? `/${newLocale}${pathname}`
        : pathname.replace(`/${currentLocale}`, `/${newLocale}`);

    router.push(newPath);
    router.refresh();
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locales = [
    { code: "en", label: intl.formatMessage({ id: "english" }) },
    { code: "fr", label: intl.formatMessage({ id: "french" }) },
    { code: "es", label: intl.formatMessage({ id: "spanish" }) },
  ];

  const current = locales.find((l) => l.code === currentLocale);
  const otherLocales = locales.filter((l) => l.code !== currentLocale);

  return (
    <div
      ref={dropdownRef}
      className="fixed bottom-10 right-2 md:bottom-4 md:right-4 z-50 bg-gray-800 bg-opacity-75 p-2 rounded-md shadow-lg w-36"
    >
      <div
        className="flex items-center justify-between bg-yellow-300 text-white px-3 py-2 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{current?.label ?? "Language"}</span>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="mt-2 bg-white rounded-md overflow-hidden shadow-md">
          {otherLocales.map((locale) => (
            <li
              key={locale.code}
              onClick={() => changeLocale(locale.code)}
              className="px-4 py-2 hover:bg-yellow-200 text-gray-800 cursor-pointer"
            >
              {locale.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
