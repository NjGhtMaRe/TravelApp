
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={styles.safeView}>
      <View style={styles.view}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  view: {
    flex: 1,
    backgroundColor: 'green',
  }
});

export default App;
