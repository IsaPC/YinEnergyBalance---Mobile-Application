import * as React from 'react';

// Navigation modules
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//context
import {PlanContext} from '../contexts/PlanContext';

///--- Import Screens
import Home from '../screens/Home';

// plans
import ListPlan from '../screens/ListPlansScreen';
import AddPlan from '../screens/AddPlanScreen';
import ViewPlan from '../screens/ViewPlanScreen';
import EditPlan from '../screens/EditPlanScreen';

// calendar
import CalendarScreen from '../screens/CalendarScreen';
import DateListScreen from '../screens/DateListScreen';

// register
import RegisterScreen from '../screens/register';
import ViewUserScreen from '../screens/ViewUser';
import EditScreen from '../screens/edit';

//sessions
import Sessions from '../screens/Sessions';
import CoachingScreen from '../screens/CoachingScreen';
import Notes from '../screens/Notes';
//import Header from '../../shared/header';
///---///

// setup Navigations
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigtator = props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lession Plans" component={ListPlan} />
            <Drawer.Screen name="Calendar" component={DateListScreen} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
            <Drawer.Screen name="View customers" component={ViewUserScreen} />
            <Drawer.Screen name="Sessions" component={Sessions} />
            {/* <Drawer.Screen name="Coachings" component={CoachingScreen} />
            <Drawer.Screen name="Add Notes" component={Notes} /> */}
        </Drawer.Navigator>
    );
}

const MainStack = props => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                title:"Yin-Energy Balance",
                headerStyle: {
                    backgroundColor: "rgb(108, 184, 58)",
                },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
                headerLeft: () => {}
                
                }} 
        >

            {/* stacks to drawer */}
            <Stack.Screen name="Home" component={DrawerNavigtator}/>
            <Stack.Screen name="Lession Plans" component={DrawerNavigtator} />
            <Stack.Screen name="Calendar" component={DrawerNavigtator} />
            <Stack.Screen name="Register" component={DrawerNavigtator} />
            <Stack.Screen name= "View users" component={DrawerNavigtator} />
            <Stack.Screen name= "Sessions" component={DrawerNavigtator} />

            {/* non drawer screens */}
            <Stack.Screen name="Add Plan" component={AddPlan} />
            <Stack.Screen name="View Plan" component={ViewPlan} />
            <Stack.Screen name="Edit Plan" component={EditPlan} />
            <Stack.Screen name="Go to Notes" component={Notes} />
            <Stack.Screen name= "Coachings" component={CoachingScreen} />
            <Stack.Screen name= "Notes" component={Notes} />
            <Stack.Screen name= "EditUser" component={EditScreen} />
            <Stack.Screen name="DateList" component={CalendarScreen} />
    </Stack.Navigator>
    )
    
} // END


// Main function
const Routes = (props, {navigation}) => {
        // initial load when app starts
        const { loadAllPlans } = React.useContext(PlanContext);
        loadAllPlans();


    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}

export default Routes;