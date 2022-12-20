import React from 'react';
import {SafeAreaView, View, Pressable, Image, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const Map = ({ navigation, route }) => {
  const { item } = route?.params || {};
  console.log("item:>> ", item)
  const coords = {
    latitude: item?.coordinates.lat, 
    longitude: item?.coordinates.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.007,
  };
  const onBack = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
        <MapView style={styles.map} initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name}/>
        </MapView> 
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/back.png')}/>
          </Pressable>
          <Text style={styles.title}>{`${item.name}, ${item.city}`}</Text>
        </View>    
    </View>
  );
};

export default React.memo(Map); 
