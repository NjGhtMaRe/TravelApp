import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
    paddingVertical: 2
  },
  selectedItem: {
    color: '#000000',
    fontSize: 14,
  },
  itemContainer: {
    marginBottom: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  }
});

export default styles;
