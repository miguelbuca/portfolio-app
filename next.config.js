/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io","media-exp1.licdn.com"],
  },
  i18n: {
    locales: ["en", "pt", "fr"],
    defaultLocale: "en",
    //localeDetection: false
  },
};

module.exports = nextConfig;
