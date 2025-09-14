//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

// const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  //   webpack: (config) => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     '@travel-drop/ui': path.resolve(__dirname, '../../libs/shared/react/ui/src'),
  //     // outros aliases...
  //   };
  //   return config;
  // },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
