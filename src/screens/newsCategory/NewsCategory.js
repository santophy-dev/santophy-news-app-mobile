import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';

const NewsCategory = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(
      'https://saurav.tech/NewsAPI/top-headlines/category/' +
        route.params.category +
        '/in.json',
    )
      .then(res => res.json())
      .then(output => {
        setNews(output.articles);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Headlines</Text>
      <View>
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={styles.urlToImage}
                />
                <View style={styles.innerContainer}>
                  <Text
                    style={styles.titleStyle}>
                    {item.title ? item.title.substring(0, 30) + '...' : '...'}
                  </Text>
                  <Text
                    style={styles.description}>
                    {item.description
                      ? item.description.substring(0, 30) + '...'
                      : '...'}
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

export default NewsCategory;
