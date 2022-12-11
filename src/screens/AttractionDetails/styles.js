import { StyleSheet, Dimensions } from 'react-native';


const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height/2,
  }
});

export default styles;