import { createStackNavigator } from 'react-navigation-stack';
import editUser from '../screens/edit';
import React from 'react';
import Header from '../shared/header';

const screens = {
    register: {
      screen: editUser,
      navigationOptions: {
         title: 'Edit User'
      }
    }  
};

// home stack navigator screens
const editUserStack = createStackNavigator(screens, {
defaultNavigationOptions: {
  headerStyle: {backgroundColor:'lightgreen'}
}
}); 

//for all the screens, can do: headerStyle: {backgroundColor:'lightgreen'}

export default editUserStack;