import React, { useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Title from '../../components/Title';

const Home = () => {

  return (
    <SafeAreaView>
      <Title text="Where do" />
      <Title text="you want to go?" />
    </SafeAreaView>
  );
};

export default React.memo(Home);
