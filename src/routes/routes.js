import * as React from 'react';

// Navigation modules
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//context
import {PlanContext} from '../contexts/PlanContext';

// Import Screens
import Home from '../screens/Home';

// import components
import ListPlan from '../screens/ListPlansScreen';
import AddPlan from '../screens/AddPlanScreen';
import ViewPlan from '../screens/ViewPlanScreen';
import EditPlan from '../screens/EditPlanScreen';

// setup Navigations
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigtator = props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lession Plans" component={ListPlan} />
        </Drawer.Navigator>
    );
}



// Main function
const Routes = props => {

        const { loadAllPlans } = React.useContext(PlanContext);
        loadAllPlans();



    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={DrawerNavigtator} />
                <Stack.Screen name="Lession Plans" component={DrawerNavigtator} />
                <Stack.Screen name="Add Plan" component={AddPlan} />
                <Stack.Screen name="View Plan" component={ViewPlan} />
                <Stack.Screen name="Edit Plan" component={EditPlan} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;