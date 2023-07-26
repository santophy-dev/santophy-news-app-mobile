import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { styles } from './styles';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View
      style={styles.container}>
      <Text style={styles.textStyle}>
        Santohpy News
      </Text>
      <Text style={styles.appStyle}> App</Text>
    </View>
  );
};

export default Splash;
