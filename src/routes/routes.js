//import required modules
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// imported screens
import Home from "../screens/home";
// import <NameofModule> from "Location";

// types of stacks apart from Main Stack
const Stack = createStackNavigator();

function MainStackNavigator() {
    return (  
        <NavigationContainer>
        {/* the main home screen will be displayed first */}
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}  />
            </Stack.Navigator> 
        </NavigationContainer>
    );
}


export default MainStackNavigator;


