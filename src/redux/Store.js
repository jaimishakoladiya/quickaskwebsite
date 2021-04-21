import RootReducer from "./RootReducer";
import { createStore } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const store=createStore(RootReducer);

export default store;