import RootReducer from "./RootReducer";
import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// import logger from 'redux-logger';

const store=createStore(RootReducer,applyMiddleware(thunk));

export default store;