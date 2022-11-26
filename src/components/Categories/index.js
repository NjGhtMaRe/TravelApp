import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selectedCategories, onCategoriesPress}) => {
  return (
    <FlatList
      horizontal 
      data={categories} 
      renderItem={({item}) => {
        const selected = selectedCategories === item;
        return(
          <TouchableOpacity onPress={() => onCategoriesPress(item) } style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
          </TouchableOpacity>
        );}
      } 
    />
  );
};

export default React.memo(Categories);
