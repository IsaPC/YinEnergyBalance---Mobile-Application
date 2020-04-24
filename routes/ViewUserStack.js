import { createStackNavigator } from 'react-navigation-stack';
import ViewUser from '../screens/ViewUser';
import React from 'react';
import Header from '../shared/header';

const screens = {
  ViewUser: {
    screen: ViewUser,
    navigationOptions: {
        title: 'Users',
    }
  }  
     
};

// home stack navigator screens
const ViewUserStack = createStackNavigator(screens, {
defaultNavigationOptions: {
  headerStyle: {backgroundColor:'lightgreen'}
}
}); 

//for all the screens, can do: headerStyle: {backgroundColor:'lightgreen'}

export default ViewUserStack;
