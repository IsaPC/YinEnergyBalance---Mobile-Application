import * as React from 'react';

// Navigation modules
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//context
import {PlanContext} from '../contexts/PlanContext';

// Import Screens
import Home from '../screens/Home';

/// import components
// plans
import ListPlan from '../screens/ListPlansScreen';
import AddPlan from '../screens/AddPlanScreen';
import ViewPlan from '../screens/ViewPlanScreen';
import EditPlan from '../screens/EditPlanScreen';
// calendar
import CalendarScreen from '../screens/CalendarScreen';
// register
import RegisterScreen from '../screens/register';
import ViewUserScreen from '../screens/ViewUser';
//sessions
import Sessions from '../screens/Sessions';
//coaching
import CoachingScreen from '../screens/CoachingScreen';
//notes
import Notes from '../screens/Notes';

// setup Navigations
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigtator = props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Lession Plans" component={ListPlan} />
            <Drawer.Screen name="Calendar" component={CalendarScreen} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
            <Drawer.Screen name="View customers" component={ViewUserScreen} />
            <Drawer.Screen name="Sessions" component={Sessions} />
            <Drawer.Screen name="Coachings" component={CoachingScreen} />
            <Drawer.Screen name="Add Notes" component={Notes} />
        </Drawer.Navigator>
    );
}


  
  
  



// Main function
const Routes = props => {
        // initial load when app starts
        const { loadAllPlans } = React.useContext(PlanContext);
        loadAllPlans();



    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home"
                    component={DrawerNavigtator}
                    options={{
                        title: "Yin Energy Balance",
                        headerStyle: {
                            backgroundColor: "rgb(108, 184, 58)",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center"
                    }} 
                />

                {/* stacks to drawer */}
                <Stack.Screen name="Lession Plans" component={DrawerNavigtator} />
                <Stack.Screen name="Calendar" component={DrawerNavigtator} />
                <Stack.Screen name="Register" component={DrawerNavigtator} />
                <Stack.Screen name= "View users" component={DrawerNavigtator} />
                <Stack.Screen name= "Sessions" component={DrawerNavigtator} />
                <Stack.Screen name= "Coaching" component={DrawerNavigtator} />
                <Stack.Screen name= "Notes" component={DrawerNavigtator} />
                

                {/* plain stacks */}
                <Stack.Screen name="Add Plan" component={AddPlan}
                    options={{
                    title: "Yin Energy Balance",
                    headerStyle: {
                        backgroundColor: "rgb(108, 184, 58)",
                    },
                    headerTintColor: "#fff",
                    headerTitleAlign: "center"
                    }} 
                />
                <Stack.Screen name="View Plan" component={ViewPlan}
                    options={{
                        title: "Yin Energy Balance",
                        headerStyle: {
                            backgroundColor: "rgb(108, 184, 58)",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center"
                    }} 
                />
                <Stack.Screen name="Edit Plan" component={EditPlan}
                    options={{
                        title: "Yin Energy Balance",
                        headerStyle: {
                            backgroundColor: "rgb(108, 184, 58)",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center"
                    }} 
                />
                <Stack.Screen name="Go to Notes" component={Notes}
                    options={{
                        title: "Yin Energy hey",
                        headerStyle: {
                            backgroundColor: "rgb(108, 184, 58)",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center"
                    }} 
                    />




            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;