import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, { isServer, dev }) {
    config.mode = dev ? 'development' : 'production';

    if (!dev) {
      config.devtool = false;
    } else {
      config.devtool = 'eval-source-map';
    }
    
    config.plugins.push(
      new NextFederationPlugin({
name: 'loginApp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
'./login': './src/pages/components/login/page.js', 
        },
        force:true, 
        shared: {
       
          // Add shared modules here if needed
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
