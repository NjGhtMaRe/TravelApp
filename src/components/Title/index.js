import React, { useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const Title = ({text}) => {

  return <Text style={styles.title}>{text}</Text>;
};

Title.defaultProps = {
  text: 'Default Title',
};

export default React.memo(Title);
