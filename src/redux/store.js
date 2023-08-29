import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import initialState from './initialState';
import tablesReducer from './tablesRedux'
import thunk from 'redux-thunk'



const reducers = {
  tables: tablesReducer,
}

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

export default store;