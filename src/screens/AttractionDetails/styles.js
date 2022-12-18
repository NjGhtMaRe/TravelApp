import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height/2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    marginLeft: 4,
    marginTop: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    margin: 16,
  },
  title: {
    color: 'black',
    marginLeft: 0,
    fontSize: 24
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' ,
    marginTop: 40,
  },
  textContainer: {
    justifyContent: 'space-between'
  },
  city: {
    fontWeight: '400',
    fontSize: 20,
    marginVertical: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 14
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  showMap: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#4681A3',
    marginBottom: 40,
  }
});

export default styles;