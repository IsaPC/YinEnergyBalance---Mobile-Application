import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Register from '../screens/register';
import Coach from '../screens/session';
import listUser from '../screens/ViewUser';
import EditUser from '../screens/edit';
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
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='REGISTRATION' navigation={navigation} />
      }
    }
  },
  ViewUser: {
    screen: listUser,
    navigationOptions: {
      title: 'Users'
    }
  },
  Coach: {
    screen: Coach,
    navigationOptions: {
      title: 'Session Plans',
    }
  },
  EditUser:{
    screen:EditUser,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'lightgreen' }

  }
});

export default HomeStack;
