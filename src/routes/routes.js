import * as React from 'react';

// Navigation modules
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



// Import Screens
import Home from '../screens/Home';
import LessionPlanScreen from '../screens/plans/lessionPlan/LessionPlanScreen';
import ViewPlanScreen from '../screens/plans/viewPlan/ViewPlanScreen';
import AddPlan from '../screens/plans/addPlan/AddPlanScreen';
// import components


// setup Navigations
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigtator = props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lession Plan" component={LessionPlanScreen} />
        </Drawer.Navigator>
    );
}



// Main function
const Routes = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={DrawerNavigtator} />
                <Stack.Screen name="Lession Plan" component={DrawerNavigtator} />
                <Stack.Screen name="View Plan" component={ViewPlanScreen} />
                <Stack.Screen name="Add Plan" component={AddPlan} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;