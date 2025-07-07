# Android React Native Version

This directory contains a basic React Native implementation of the public key pinning example.

The app fetches data from `https://192.168.1.21` and verifies the server public key before displaying the response.

The implementation uses the `react-native-ssl-pinning` library, which exposes an HTTPS function with certificate pinning.

## Setup

1. Install dependencies inside this folder:

   ```bash
   npm install react-native-ssl-pinning react-native-fs
   ```

2. Place the server's public key file `server-public.pem` in this directory.

3. Run the application on Android:

   ```bash
   npx react-native run-android
   ```

Ensure your development environment is configured for React Native Android development.
