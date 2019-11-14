/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/screens/Home';
import WebViewScreen from './src/screens/WebviewScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Business from './src/screens/Business';
import Entertainment from './src/screens/Entertainment';
import Sports from './src/screens/Sports';
import Technology from './src/screens/Technology';
import Trending from './src/screens/Trending';

const AppNavigator=createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  WebViewScreen:{
    screen:WebViewScreen
  }
});



const TabNavigator = createMaterialTopTabNavigator(
  {
      Business:Business,
      Entertainment:Entertainment,
      Sports:Sports,
      Technology:Technology,
      Trending:Trending
  },
  {  
    tabBarOptions: {  
        activeTintColor: 'white',  
        showIcon: true,  
        showLabel:false,  
        style: {  
            backgroundColor:'red'  
        }  
    },  
}  
)

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return (
    <AppContainer/>
  );
};


export default App;
