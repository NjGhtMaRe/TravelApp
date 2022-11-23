import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const Title = props => {
  console.log('props :>> ', props);
  return <Text style={styles.title}>{props.text}</Text>;
};

Title.defaultProps = {
  text: 'Default Title',
};

export default Title;
