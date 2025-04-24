import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.attendance.app',
  appName: 'Employee Attendance',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#8a2be2",
      showSpinner: true,
      spinnerColor: "#ffffff"
    }
  }
};

export default config;