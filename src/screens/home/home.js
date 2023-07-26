import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { ImageData } from '../../constants/imageData';

const Home = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json')
      .then(res => res.json())
      .then(output => {
        setNews(output.articles);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.categories}>Categories</Text>
      <View style={styles.innerContainer}>
        <FlatList
          data={ImageData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  navigation.navigate('NewsCategory', {
                    category: item.title,
                  });
                }}>
                <View style={styles.imageStyle}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.titleStyle}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.headline}>Headlines</Text>
      <View>
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.listStyle}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={styles.imageStyles}
                />
                <View style={{padding: 10}}>
                  <Text numberOfLines={3} style={styles.titleStyles}>{item.title}</Text>
                  <Text style={styles.desStyle}>
                    {item.description.substring(0, 32) + '...'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
