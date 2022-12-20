import React from 'react';
import { Text, SafeAreaView, ImageBackground, Image, View, ScrollView } from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MapView, { Marker } from 'react-native-maps';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';
import InfoCard from "../../components/InfoCard";
import Title from "../../components/Title";
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const slicedImage = item?.images?.length ? item?.images.slice(0,5) : [];
  const diffImages = item?.images?.length - slicedImage?.length;

  const coords = {
    latitude: item?.coordinates.lat, 
    longitude: item?.coordinates.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.007,
  };

  const onBack = () => {
    navigation.goBack()
  };

  const onShare = async () => {
    try {
      const imageWithoutParams = mainImage?.split('?')[0]
      const imageParts = imageWithoutParams.split('.')
      const imageExtension = imageParts[imageParts?.length - 1]
      const base64Image = await ImgToBase64.getBase64String(mainImage)
      Share.open({ 
        title: item?.name, 
        message: "Hello, I would like to share this",
        url: `data: image/${imageExtension || 'jpg'};base64,${base64Image}`
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });    
    } catch (e) {
      console.log("Sharing error:>> ", e);
    }
  }

  const onGalerryNavigation = () => {
    navigation.navigate('Gallery', { images: item?.images })
  };

  const onMapNavigation = () => {
    navigation.navigate('Map', {item})
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground 
        style={styles.mainImage} 
        imageStyle={{ borderRadius: 20 }} 
        source={{ uri: mainImage }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/back.png')}/>
          </Pressable>
          <Pressable onPress={onShare} hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/share.png')}/>
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
        <InfoCard icon={require('../../assets/schedule.png')}/>
        <View>
          <Text style={{ fontSize: 12, fontWeight: '400' }}>Open</Text>
          <Text style={{ fontSize: 12, fontWeight: '400' }}>{`${item?.opening_time} - ${item?.closing_time}`}</Text>
        </View>
      </View>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name}/>
      </MapView>
      <Text style={styles.showMap} onPress={onMapNavigation}>Show fullscreen Map</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails); 
