import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./lib/i18nConfig";

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// ✅ Ensure middleware applies to all pages
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
