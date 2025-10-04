import { createStore, combineReducers } from 'redux';

import homeReducer from '../Pages/Home/Home.redux.js'

// Combine reducers
const rootReducer = combineReducers({
  home: homeReducer
});

const Store = createStore(rootReducer);

export default Store;
