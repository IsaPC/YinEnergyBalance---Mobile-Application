import { createStackNavigator } from 'react-navigation-stack';
import coach from '../screens/coach';
import React from 'react';
import Header from '../shared/header';

const screens = {
    Coach: {
      screen: coach,
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

export default coachStack;
