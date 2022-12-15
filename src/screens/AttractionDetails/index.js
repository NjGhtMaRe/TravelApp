import React from 'react';
import { Text, SafeAreaView, ImageBackground, Image, View } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import InfoCard from "../../components/InfoCard";
import Title from "../../components/Title";
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const slicedImage = item?.images?.length ? item?.images.slice(0,5) : [];
  const diffImages = item?.images?.length - slicedImage?.length;
  const onBack = () => {
    navigation.goBack()
  }
  const onGalerryNavigation = () => {
    navigation.navigate('Gallery', { items: item?.images })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        style={styles.mainImage} 
        imageStyle={{ borderRadius: 20 }} 
        source={{ uri: mainImage }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/back.png')}/>
          </Pressable>
          <Pressable hitSlop={8}>
            <Image onPress={onBack}style={styles.icon} source={require('../../assets/share.png')}/>
          </Pressable>
        </View>
        <View style={styles.footer}>
          {slicedImage?.map(( image, index ) => (
            <Pressable onPress={onGalerryNavigation} key={image}>
              <Image source={{ uri: image }} style={styles.miniImage} />
              {diffImages > 0 && index === slicedImage?.length -1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                </View>
              ) : null
              }
            </Pressable>
          ))}
        </View>
      </ImageBackground> 
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Title text={item?.name} style={styles.title} />
          <Text style={styles.city}>{item?.city}</Text>
        </View> 
          <Title text={item?.entry_price} style={styles.title} />
      </View>
      <InfoCard icon={require('../../assets/location_circle.png')} text={item?.address} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <InfoCard icon={require('../../assets/schedule.png')} text={''} />
        <View>
          <Text style={{fontSize: 12}}>Open</Text>
          <Text style={{fontSize: 12}}>{`${item?.opening_time} - ${item?.closing_time}`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails); 
