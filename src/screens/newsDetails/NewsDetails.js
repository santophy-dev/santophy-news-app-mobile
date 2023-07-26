import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { styles } from './styles';

const NewsDetails = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Image
        source={{uri: route.params.data.urlToImage}}
        style={styles.urlToImage}
      />
      <Text
        style={styles.titleText}>
        {route.params.data.title}
      </Text>
      <Text
        style={styles.desText}>
        {route.params.data.description}
      </Text>
      <Text
        style={styles.publishAt}>
        {route.params.data.publishedAt}
      </Text>

      <Text
        style={styles.contentStyle}>
        {route.params.data.content}
      </Text>
    </View>
  );
};

export default NewsDetails;
