import {DefaultTheme} from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    gray: 'rgb(142,142,147)',
    gray2: 'rgb(99,99,102)',
    gray3: 'rgb(72,72,74)',
    gray4: 'rgb(58,58,60)',
    gray5: 'rgb(44,44,46)',
    gray6: 'rgb(28,28, 30)',
    fontColor: '#ffffff',
  },
};
