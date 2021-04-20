import RootReducer from "./RootReducer";
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const store=createStore(RootReducer);

export default store;