import {useTheme} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {StyleSheet, Text as ReactNativeText} from 'react-native';

type TextProps = {
  style?:
    | 'largeTitle'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'headline'
    | 'body'
    | 'callout'
    | 'subhead'
    | 'footnote'
    | 'caption1'
    | 'caption2';
  children?: React.ReactNode;
};

export default function Text({
  style = 'body',
  children,
}: TextProps): ReactElement {
  const {colors} = useTheme();

  return (
    <ReactNativeText style={[{color: colors.text}, styles[style]]}>
      {children}
    </ReactNativeText>
  );
}

const styles = StyleSheet.create({
  largeTitle: {
    fontSize: 34,
  },
  title1: {
    fontSize: 28,
  },
  title2: {
    fontSize: 22,
  },

  title3: {
    fontSize: 20,
  },

  headline: {
    fontSize: 17,
    fontWeight: '600',
  },
  body: {
    fontSize: 17,
  },
  callout: {
    fontSize: 16,
  },
  subhead: {
    fontSize: 15,
  },
  footnote: {
    fontSize: 13,
  },
  caption1: {
    fontSize: 12,
  },
  caption2: {
    fontSize: 11,
  },
});
