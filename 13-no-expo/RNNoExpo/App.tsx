
import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

function App = () => {

  return (
    <View style={styles.screen}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
    justifyContent: 'center'
  }
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
