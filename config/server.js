module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapi.basatmaqsood.com'), // Add this line for the public URL
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron: {
    enabled: true,
  },
  webhooks: {
    enabled: true,
  },
  proxy: true,
});
