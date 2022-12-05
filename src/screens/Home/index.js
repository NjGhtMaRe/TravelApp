import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json';
import categoriesData from '../../data/categories.json'

const ALL = "All"
const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect (() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategories === ALL) {
      setData(jsonData)
    } else {
      const filteredData = jsonData?.filter(item => item?.categories?.includes(selectedCategories))
      setData(filteredData)
    }
  },[selectedCategories])

  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        data={[...data]}
        numColumns={2}
        keyExtractor={item => String(item?.id)}
        ListEmptyComponent={(<Text style={styles.emptyText}>No item found.</Text>)}
        ListHeaderComponent={(
          <>
          <View>
            <Title text="Where do" style={{fontWeight: 'normal'}} />
            <Title text="you want to go?" />
            <Title text="Explore Attractions" style={styles.subtitle} />
          </View>
            <Categories 
              selectedCategories={selectedCategories} 
              onCategoriesPress={setSelectedCategories}
              categories={[ALL, ...categoriesData]} 
            />
        </>
        )}
        renderItem={({item, index}) => (
          <AttractionCard 
            key={item.id} 
            style={index % 2 === 0 ? { marginRight: 12, marginLeft: 32 } : {}}
            imageSrc={item.images?.length ? item.images[0]: null}
            title={item.name}
            subtitle={item.city}
          />
        )}
      />
      
    </SafeAreaView>
  );
};

export default React.memo(Home); 
