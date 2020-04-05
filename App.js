import React from 'react';
import Routes from './src/routes/Routes';

//import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//reducers
import plansReducer from './src/store/plans-reducer';


const rootRedcuer = combineReducers({
    //maping
    plans: plansReducer
});

const store = createStore(rootRedcuer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;