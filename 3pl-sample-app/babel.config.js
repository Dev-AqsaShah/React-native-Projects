module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // map @ -> ./src so imports like "@/screens/Welcome" work
      ['module-resolver', {
        root: ['./'],
        alias: { '@': './src' },
      }],

      // if you use expo-router, you may uncomment the next line:
      // 'expo-router/babel',

      // react-native-reanimated plugin MUST be last
      'react-native-reanimated/plugin'
    ]
  };
};
