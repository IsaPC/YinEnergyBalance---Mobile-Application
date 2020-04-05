import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screen imports
import Home from '../screens/home/IndexScreen';
import LessionPlanner from '../screens/planSelection/PlanSelectionScreen';
import CreatePlanScreen from '../screens/createPlan/CreatePlanScreen';
import ViewPlan from '../screens/viewPlan/viewPlanScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// /// functions call the screens
// function HomeScreen() {
//     return <Home />
// }

// function LessionPlannerScreen() {
//     return <LessionPlanner />
// }


// place all screens you wish to have a drawer
const AllDrawer = props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lession Plans" component={LessionPlanner} /> 
            <Drawer.Screen name="AddPlan" component={CreatePlanScreen} /* TODO create custom drawer, HIDE ADDPLAN */    /> 
            <Stack.Screen name="ViewPlan" component={ViewPlan} /* TODO create custom drawer, HIDE ADDPLAN */ />
        </Drawer.Navigator>
    );
}

// the last route
const Routes = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={AllDrawer} />
                <Stack.Screen name="Lession Plans" component={AllDrawer} /> 
                <Stack.Screen name="AddPlan" component={AllDrawer} />
                <Stack.Screen name="ViewPlan" component={AllDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes;