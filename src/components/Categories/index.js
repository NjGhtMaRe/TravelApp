import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selectedCategories, onCategoriesPress}) => {
  return (
    <FlatList
      horizontal 
      data={categories} 
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const selected = selectedCategories === item;
        return(
          <TouchableOpacity 
            onPress={() => onCategoriesPress(item) } 
            style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? {marginLeft: 32} : {}]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
          </TouchableOpacity>
        );}
      } 
    />
  );
};

export default React.memo(Categories);
