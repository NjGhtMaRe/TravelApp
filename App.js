import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return <Home />;
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  view: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
