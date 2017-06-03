import { combineReducers, createStore } from "redux";
import TourReducer from './tour.js';

const rootReducer = combineReducers({
    TourReducer
});

const store = createStore(rootReducer);

export default store;

