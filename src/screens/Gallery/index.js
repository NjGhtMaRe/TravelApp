import React from 'react';
import { Text, SafeAreaView} from 'react-native';
import styles from './styles';

const Gallery = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>Gallery</Text>
    </SafeAreaView>
  );
};

export default React.memo(Gallery); 