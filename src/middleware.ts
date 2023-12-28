import { authMiddleware } from "@clerk/nextjs";
 
import createMiddleware from "next-intl/middleware";
 
const intlMiddleware = createMiddleware({
  locales: ["uz", "ru"],
 
  defaultLocale: "uz",
});
 
export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },
  publicRoutes: ["/uz", "/ru"],
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


