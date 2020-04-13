import { createStackNavigator } from 'react-navigation-stack';
import register from '../screens/register';
import React from 'react';
import Header from '../shared/header';

const screens = {
    register: {
      screen: register,
      navigationOptions: {
          headerTitle: () => <Header />
      }
    }  
       
};

// home stack navigator screens
const coachStack = createStackNavigator(screens, {
defaultNavigationOptions: {
  headerStyle: {backgroundColor:'lightgreen'}
}
}); 

//for all the screens, can do: headerStyle: {backgroundColor:'lightgreen'}

export default registerStack;
