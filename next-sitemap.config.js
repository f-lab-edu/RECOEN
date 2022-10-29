const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${siteUrl}`,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}server-sitemap-index.xml`],
  },
};
