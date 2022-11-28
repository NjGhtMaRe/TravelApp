import React, { useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState('All');
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />
        <Categories 
          selectedCategories={selectedCategories} 
          onCategoriesPress={setSelectedCategories}
          categories={['All', 'Popular', 'History', 'Trending', 'Random', 'Exclusive', 'Others']} 
        />
        <View style={styles.row}>
          <AttractionCard 
            imageSrc="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80"
            title="Collesuem"
            subtitle="Rome"
          />
          <AttractionCard 
            imageSrc="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80"
            title="Collesuem"
            subtitle="Rome"
          />
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default React.memo(Home);
