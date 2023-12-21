import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["uz", "ru"],

  defaultLocale: "uz",
});

export const config = {
  matcher: ["/", "/(ru|uz)/:path*"],
};
