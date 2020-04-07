import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//import reducer
import plansReducer from './src/store/reducers/plans-reducer';

// routes
import Routes from './src/routes/routes';


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