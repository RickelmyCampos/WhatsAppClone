module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@styles': './src/styles',
          '@redux': './src/redux',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@interfaces': './src/interfaces',
          '@routes': './src/routes',
          '@types': './src/types',
        },
      },
    ],
  ],
};
