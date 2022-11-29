import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json';
import categoriesData from '../../data/categories.json'

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState(categoriesData[0]);
  const [data, setData] = useState([]);

  useEffect (() => {
    console.log('categories: ', categoriesData)
    setData(jsonData);
  },[]);
  return (
    <SafeAreaView >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />
        <Categories 
          selectedCategories={selectedCategories} 
          onCategoriesPress={setSelectedCategories}
          categories={categoriesData} 
        />
        {/* <ScrollView contentContainerStyle={styles.row}>
          {[...data, ...data]?.map((item, index) => (
            <AttractionCard 
              key={item.id} 
              style={index % 2 === 0 ? { marginRight: 12 } : {}}
              imageSrc={item.images?.length ? item.images[0]: null}
              title={item.name}
              subtitle={item.city}
            />
          ))}
        </ScrollView> */}
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => String(item?.id)}
          renderItem={({item, index}) => (
            <AttractionCard 
              key={item.id} 
              style={index % 2 === 0 ? { marginRight: 12 } : {}}
              imageSrc={item.images?.length ? item.images[0]: null}
              title={item.name}
              subtitle={item.city}
            />
          )}
        />

      </ScrollView>
      
    </SafeAreaView>
  );
};

export default React.memo(Home); 
