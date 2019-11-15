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
import Health from './src/screens/Health';


const TabNavigator = createMaterialTopTabNavigator(
  {
      Health:{screen:Health},
      Business:{screen:Business},
      Sports:{screen:Sports},
      Entertainment:{screen:Entertainment},
      Technology:{screen:Technology},
     
  },
  { 
    swipeEnabled:true,
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      }, 
      // labelStyle: {
      //   textAlign: 'center',
      // },
    },  
}  
)

const AppNavigator=createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  WebViewScreen:{
    screen:WebViewScreen
  },
  TopTabBar:{
    screen:TabNavigator
  }
});




const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return (
    <AppContainer/>
  );
};


export default App;
