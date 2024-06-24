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
name: 'counterApp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
'./counter': './src/components/remoteComponent.js', 
        },
        force:true, 
// remotes:  remotes(isServer),
        shared: {
         
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
