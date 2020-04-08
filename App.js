import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//import reducer
import plansReducer from './src/store/reducers/plans-reducer';

// routes
import Routes from './src/routes/routes';

//SQL
import { init } from './src/helpers/db';

/// initialise the database
init().then(() => {
    console.log('Initialized the database');
}).catch(err => {
    console.log('Initialized the database failed');
    console.log(err);
}); 
///

const rootReducer = combineReducers({
    plans: plansReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;