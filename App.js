import React, {useState, useContext} from 'react';

//import contexts
import PlandContextProvider from './src/contexts/PlanContext';
import CalandContextProvider from './src/contexts/CalendarContext';
import DetailsContextProvider from './src/contexts/DetailsContext';
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
} // END main

export default App;