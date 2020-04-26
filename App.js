import React, { useState, useContext } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import DetailsContextProvider from './contexts/DetailsContext';
import Register from './screens/register';
import { init } from './database/db';

init();
const getFonts = () => Font.loadAsync({
  'Nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});
  
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <DetailsContextProvider>
        <Navigator />
      </DetailsContextProvider>     
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}

