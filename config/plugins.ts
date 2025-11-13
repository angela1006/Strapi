// path: ./config/plugins.ts

// Define el tipo para la función de configuración del plugin
type PluginsConfig = (args: { env: (key: string, defaultValue?: any) => any }) => any;

const plugins: PluginsConfig = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        // Lee las variables de entorno para las credenciales de Cloudinary
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

});

export default plugins;