import { createStackNavigator } from 'react-navigation-stack';
import coach from '../screens/session';
import React from 'react';
import Header from '../shared/header';

const screens = {
  Session: {
    screen: coach,
    navigationOptions: {
        title: 'Session',
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
