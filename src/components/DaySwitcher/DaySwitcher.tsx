import {useTheme} from '@react-navigation/native';
import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import Text from '../Text/Text';

export function DaySwitcher() {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {borderBottomColor: colors.border}]}>
      <Icon
        name="arrow-ios-back-outline"
        width={40}
        height={40}
        fill={colors.primary}
      />
      <Text style="headline">Today</Text>
      <Icon
        name="arrow-ios-forward-outline"
        width={40}
        height={40}
        fill={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 4,
  },
});
