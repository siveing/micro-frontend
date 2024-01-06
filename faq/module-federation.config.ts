import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'faq',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
