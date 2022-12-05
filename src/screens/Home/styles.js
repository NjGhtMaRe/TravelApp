import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    marginTop: 40,
  }
});

export default styles;