import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView, } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import {init} from './Screens/database/db';

import CoachingScreen from './Screens/CoachingScreen'
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'

init();
 class App extends React.Component {
  
  render () {
  return (
    

<Apps/>
    
  
  )
}

}

const AppStackNavigator = createStackNavigator ({
  LoginScreen: {screen : LoginScreen},
  HomeScreen: {screen: HomeScreen},
  CoachingScreen: {screen: CoachingScreen},
})
const Apps = createAppContainer(AppStackNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
export default App;