/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
    domains: ["*.googleusercontent.com", "a.storyblok.com"],
  },
  i18n: {
    localeDetection: false,
    locales: ["en", "da", "no", "sv"],
    defaultLocale: "da",
    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname.
        domain: "website.io",
        defaultLocale: "en",
      },
      {
        domain: "website.dk",
        defaultLocale: "da",
      },
      {
        domain: "website.se",
        defaultLocale: "sv",
      },
      {
        domain: "website.no",
        defaultLocale: "no",
      },
    ],
  },
};

module.exports = nextConfig;
