module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js', '.ts'],
      },
    ],
  ],
};
