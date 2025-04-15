module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapi.basatmaqsood.com'), // Add this line for the public URL
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'your-secret-key'),
    },
    proxy: true,  // Enable proxy
    url: '/admin', // Specify the admin panel URL path
  },
});
