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
    latitudeDelta: 0.005,
    longitudeDelta: 0.003,
  };
  const onBack = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
        <MapView style={styles.map} initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name}/>
        </MapView>     
        <Pressable style={styles.header} onPress={onBack} hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/back.png')}/>
            <Text style={styles.title}>{`${item.name}, ${item.city}`}</Text>
        </Pressable>
    </View>
  );
};

export default React.memo(Map); 
