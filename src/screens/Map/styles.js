import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    paddingBottom: 40,
  },
  icon: {
    width: 50,
    height: 50,
    margin: 16,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 0,
    marginHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    width: width - 48,
  },
  title: {
    fontSize: 20,
  }
});

export default styles;