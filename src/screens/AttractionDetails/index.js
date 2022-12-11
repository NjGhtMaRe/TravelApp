import React from 'react';
import { Text, SafeAreaView, ImageBackground } from 'react-native';
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images.length ? item.images[0] : null;
  const onBack = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.mainImage} imageStyle={{ borderRadius: 20 }} source={{ uri: mainImage }} />
      <Text onPress={onBack}style={{ margin: 32}}>BACK</Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails); 
