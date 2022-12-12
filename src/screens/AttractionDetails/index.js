import React from 'react';
import { Text, SafeAreaView, ImageBackground, Image, View } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const slicedImage = item?.images?.length ? item?.images.slice(0,5) : []
  const onBack = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        style={styles.mainImage} 
        imageStyle={{ borderRadius: 20 }} 
        source={{ uri: mainImage }}
      >
        <View style={styles.header}>
          <Pressable hitSlop={8}>
            <Image onPress={onBack}style={styles.icon} source={require('../../assets/back.png')}/>
          </Pressable>
          <Pressable hitSlop={8}>
            <Image onPress={onBack}style={styles.icon} source={require('../../assets/share.png')}/>
          </Pressable>
        </View>
        <View style={styles.footer}>
          {slicedImage?.map(image => (
            <Image key={image} source={{ uri: image }} style={styles.miniImage} />
          ))}
        </View>
      </ImageBackground> 
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails); 
