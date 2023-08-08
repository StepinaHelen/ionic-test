import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.test-ionic',
  appName: 'test-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
