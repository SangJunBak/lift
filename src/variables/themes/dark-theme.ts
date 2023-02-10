import {DarkTheme as ReactNavigationDarkTheme} from '@react-navigation/native';

export const DarkTheme = {
  ...ReactNavigationDarkTheme,
  dark: true,
  colors: {
    ...ReactNavigationDarkTheme.colors,
    gray: 'rgb(142,142,147)',
    gray2: 'rgb(174, 174, 178)',
    gray3: 'rgb(199, 199, 204)',
    gray4: 'rgb(209, 209, 214x)',
    gray5: 'rgb(229, 229, 234)',
    gray6: 'rgb(242, 242, 247)',
    fontColor: '#ffffff',
  },
};
