module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env', // The import alias for your environment variables
        path: '.env',       // The path to your .env file
        allowUndefined: false, // Throw an error if variables are missing
      },
    ],
    'react-native-reanimated/plugin', // This must remain last
  ],
};
