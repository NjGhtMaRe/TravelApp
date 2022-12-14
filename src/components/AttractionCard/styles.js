import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 4,
    borderColor: '#E2E2E2',
    marginBottom: 8
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius:15
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
    marginLeft: 8,
    color: '#000000',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '200',
    margin: 2
  },
  icon: {
    width: 8,
    height: 8,
    marginTop: 6,
    marginLeft: 8,
    marginRight: 4,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row'
  }
});
export default styles;
