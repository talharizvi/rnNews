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

const AppNavigator=createStackNavigator({
  Home:{
    screen:Home,
  },
  WebViewScreen:{
    screen:WebViewScreen
  }
});

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return (
    <AppContainer/>
  );
};


export default App;
