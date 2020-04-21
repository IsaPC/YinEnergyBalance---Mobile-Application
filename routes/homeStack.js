import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Register from '../screens/register';
import Coach from '../screens/session';
import { View } from 'react-native';


const screens = {
  
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Home' navigation={navigation} />
        }
          
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
          title: 'REGISTER',
          
      }
  }, 
    Coach: {
        screen: Coach,
        navigationOptions: {
            title: 'Session',
        }
    },
    

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
defaultNavigationOptions: {
    headerStyle: {backgroundColor:'lightgreen'}

}
}); 

export default HomeStack;
