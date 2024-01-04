import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about',

  exposes: {
    './Module': './src/remote-entry.ts',
    "./counterNumber": "./src/app/components/counterNumber",
  },
};

export default config;
