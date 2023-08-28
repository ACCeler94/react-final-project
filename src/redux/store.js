import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import tablesReducer from './tablesRedux'



const reducers = {
  tables: tablesReducer,
}

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;