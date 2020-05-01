import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView, } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, DrawerItem} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';


//import contexts
import PlandContextProvider from './src/contexts/PlanContext';
import CalandContextProvider from './src/contexts/CalendarContext';
import DetailsContextProvider from './src/contexts/DetailsContext';
//import screens
import CoachingScreen from './src/screens/CoachingScreen';
import Sessions from './src/screens/Sessions';
import Notes from './src/screens/Notes';

// fonts
import * as Font from 'expo-font';

// routes
import Routes from './src/routes/routes';
import { AppLoading } from 'expo';

//SQL
import { init } from './src/database/db.js';



/// initialise the database
init();
///

/// get the fonts
const getFonts = () => Font.loadAsync({
    'Nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
/// 

function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded)
        return (
        /* nest contexts */
        <DetailsContextProvider>
            <CalandContextProvider>
                <PlandContextProvider>
                    {/* go to routes */}
                    <Routes />
                </PlandContextProvider>
            </CalandContextProvider>
        </DetailsContextProvider>
        );
    else {
        return (
            <AppLoading 
            startAsync={getFonts} 
            onFinish={() => setFontsLoaded(true)} 
            />
        );
    }
    
      
      
    
      
      
      
}// END main
const AppStackNavigator = createStackNavigator ({
  Sessions: {screen : Sessions},
  CoachingScreen: {screen: CoachingScreen},
  Notes: {screen: Notes},
})
const Apps = createAppContainer(AppStackNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;