module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          secure: true, // Ensure HTTPS URLs
        },
        actionOptions: {
          upload: {
            resource_type: "auto", // Allows PDFs, images, videos
          },
          delete: {},
        },
      },
    },
  });
  