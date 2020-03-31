
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// imported screens
import Home from "../screens/home";

//plans
import PlanSelection from "../screens/planselection";
import ViewPlan from "../screens/viewplan";
import CreatePlan from "../screens/createplan";

// import <NameofModule> from "Location";

// types of stacks apart from Main Stack
const Stack = createStackNavigator();

function MainStackNavigator() {
    return (  
        <NavigationContainer>
        {/* the main home screen will be displayed first */}
            <Stack.Navigator>
               
                <Stack.Screen name='PlanSelection' component={PlanSelection}  />
                <Stack.Screen name='CreatePlan' component={CreatePlan}  />
                <Stack.Screen name='ViewPlan' component={ViewPlan}  />

                <Stack.Screen name='Home' component={Home}  />
            </Stack.Navigator> 
        </NavigationContainer>
    );
}


export default MainStackNavigator;


