import React from 'react';

//import context
import PlandContextProvider from './src/contexts/PlanContext';

// routes
import Routes from './src/routes/routes';

//SQL
import { init } from './src/database/db.js';

/// initialise the database
init().then(() => {
    console.log('Initialized the database');
}).catch(err => {
    console.log('Initialized the database failed');
    console.log(err);
}); 
///


function App() {
  return (
    <PlandContextProvider>
        <Routes />
    </PlandContextProvider>
        
  );
}

export default App;