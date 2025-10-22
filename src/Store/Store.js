import { createStore, combineReducers } from 'redux';

import homeReducer from '../Pages/Home/Home.redux.js'
import aboutReducer from '../Pages/About/About.redux.js'
import projectsReducer from '../Pages/Projects/Projects.redux.js'
import experienceReducer from '../Pages/Experience/Experience.redux.js'

// Combine reducers
const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer,
  projects: projectsReducer,
  experience: experienceReducer
});

const Store = createStore(rootReducer);

export default Store;
