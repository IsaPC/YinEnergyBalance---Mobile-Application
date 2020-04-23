import React, {useContext} from 'react';

//import contexts
import PlandContextProvider from './src/contexts/PlanContext';
import CalandContextProvider from './src/contexts/CalendarContext';

// routes
import Routes from './src/routes/routes';

//SQL
import { init } from './src/database/db.js';



/// initialise the database
init();

///


function App() {

  return (
    /* nest contexts */
    <CalandContextProvider>
        <PlandContextProvider>
            {/* go to routes */}
            <Routes />
        </PlandContextProvider>
    </CalandContextProvider>
  );
}

export default App;