import React, {useCallback} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const App = () => {
  const renderRow = useCallback((_: any, index: number) => {
    return (
      <View key={index} style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }, []);

  // render
  return (
    <SafeAreaView style={styles.fill}>
      <ScrollView>
        <View style={styles.container}>
          {Array.from({length: 100}).fill(0).map(renderRow)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(({colors}, {screen: {width}}) => ({
  container: {
    paddingHorizontal: 16,
    rowGap: 5,
  },
  fill: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    columnGap: 5,
  },
  box: {
    width: (width - 32 - 7 * 5) / 8,
    height: (width - 32 - 7 * 5) / 8,
    backgroundColor: colors.accent,
  },
}));

// const styles = StyleSheet.create((theme, {screen: {width}}) => ({
//   container: {
//     paddingHorizontal: 16,
//     rowGap: 5,
//   },
//   fill: {
//     flex: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     columnGap: 5,
//   },
//   box: {
//     width: (width - 32 - 7 * 5) / 8,
//     height: (width - 32 - 7 * 5) / 8,
//     backgroundColor: theme.colors.accent,
//   },
// }));

export default App;
