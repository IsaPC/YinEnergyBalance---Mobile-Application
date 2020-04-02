import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Register from '../screens/register';



const screens = {
  
    Home: {
      screen: Home,
      navigationOptions: {
          headerTitle: () => <Header />,
          
      }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            title: 'REGISTER',
            
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
