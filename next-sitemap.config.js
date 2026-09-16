/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.arcdigitalsolution.in",
  generateRobotsTxt: false, // robots.txt is handled manually in /public/robots.txt
  sitemapSize: 7000,
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/thank-you", "/_next/*"],
  additionalPaths: async (config) => {
    return [
      // Priority location pages — Mumbai & Pune
      await config.transform(config, "/web-development-company-mumbai"),
      await config.transform(config, "/web-development-company-pune"),
      await config.transform(config, "/website-redesign-mumbai"),
      await config.transform(config, "/website-redesign-pune"),
      await config.transform(config, "/seo-company-mumbai"),
      await config.transform(config, "/seo-company-pune"),
      await config.transform(config, "/react-development-mumbai"),
      await config.transform(config, "/react-development-pune"),
      await config.transform(config, "/spring-boot-development-mumbai"),
      await config.transform(config, "/spring-boot-development-pune"),
      await config.transform(config, "/digital-marketing-agency-mumbai"),
      await config.transform(config, "/digital-marketing-agency-pune"),
      // App development pages
      await config.transform(config, "/app-development-company-pune"),
      await config.transform(config, "/app-development-company-mumbai"),
      await config.transform(config, "/app-development-company-chhatrapati-sambhajinagar"),
      // Chhatrapati Sambhajinagar pages
      await config.transform(config, "/web-development-company-chhatrapati-sambhajinagar"),
      await config.transform(config, "/seo-company-chhatrapati-sambhajinagar"),
      await config.transform(config, "/digital-marketing-agency-chhatrapati-sambhajinagar"),
      // Blog articles — high-intent SEO content
      await config.transform(config, "/blog"),
      await config.transform(config, "/blog/website-development-cost-mumbai"),
      await config.transform(config, "/blog/why-pune-website-not-ranking-google"),
      await config.transform(config, "/blog/best-seo-company-mumbai-how-to-choose"),
      await config.transform(config, "/blog/react-vs-wordpress-mumbai-business"),
      await config.transform(config, "/blog/website-redesign-checklist-pune-businesses"),
    ];
  },
  transform: async (config, path) => {
    // Custom priorities for important pages
    const highPriority = [
      "/",
      "/services",
      "/web-development-company-mumbai",
      "/web-development-company-pune",
      "/web-development-company-chhatrapati-sambhajinagar",
      "/app-development-company-mumbai",
      "/app-development-company-pune",
      "/app-development-company-chhatrapati-sambhajinagar",
      "/seo-company-mumbai",
      "/seo-company-pune",
      "/seo-company-chhatrapati-sambhajinagar",
      "/digital-marketing-agency-mumbai",
      "/digital-marketing-agency-pune",
      "/digital-marketing-agency-chhatrapati-sambhajinagar",
    ];
    const servicePriority = [
      "/services/website-development",
      "/services/website-redesign",
      "/services/seo-services",
    ];
    const locationPriority = [
      "/website-redesign-mumbai",
      "/website-redesign-pune",
      "/react-development-mumbai",
      "/react-development-pune",
      "/spring-boot-development-mumbai",
      "/spring-boot-development-pune",
    ];

    return {
      loc: path,
      changefreq: highPriority.includes(path) ? "daily" : "weekly",
      priority: highPriority.includes(path)
        ? 1.0
        : servicePriority.includes(path)
        ? 0.9
        : locationPriority.includes(path)
        ? 0.9
        : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
