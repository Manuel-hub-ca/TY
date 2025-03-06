"server-only";

import { createIntl } from "@formatjs/intl";
import fs from "fs";
import path from "path";

export default async function getIntl(locale, namespace) {
  try {
    // ✅ Dynamically construct path to the messages file
    const filePath = path.join(process.cwd(), "src/messages", locale, `${namespace}.json`);
    
    // ✅ Read the file synchronously (ensure it exists)
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const messages = JSON.parse(fileContent); // ✅ Parse JSON

    return createIntl({
      locale: locale,
      messages: messages, // ✅ Now correctly loads translations
    });

  } catch (error) {
    console.error(`❌ Error loading translations for ${locale}/${namespace}:`, error);
    return createIntl({
      locale: locale,
      messages: {}, // ✅ Prevent crashes with empty translations
    });
  }
}
