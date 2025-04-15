module.exports = {
  server: {
    host: '0.0.0.0', // You can also specify your host (e.g., 'strapi.basatmaqsood.com')
    port: 3000, // or whichever port you're using
    allowedHosts: [
      'strapi.basatmaqsood.com', // Allow your domain here
    ],
    https: true, // Enable HTTPS for secure communication
  },
};
