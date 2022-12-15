import React, { useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const Title = ({ text, style }) => {
  return (
    <Text style={[styles.title, style]}>{text}</Text>
  );
};

Title.defaultProps = {
  text: 'Default Title',
};

export default React.memo(Title);
