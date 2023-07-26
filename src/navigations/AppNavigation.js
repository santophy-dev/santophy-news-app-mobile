import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/splash/Splash';
import Home from '../screens/home/home';
import NewsDetails from '../screens/newsDetails/NewsDetails';
import NewsCategory from '../screens/newsCategory/NewsCategory';
  

const Stack = createStackNavigator();

const AppNavigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="NewsCategory"
          component={NewsCategory}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
