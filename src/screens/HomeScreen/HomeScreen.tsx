import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DaySwitcher} from '../../components/DaySwitcher';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <DaySwitcher />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});
