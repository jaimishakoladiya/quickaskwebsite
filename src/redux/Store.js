import RootReducer from "./RootReducer";
import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const store=createStore(RootReducer,applyMiddleware(thunk));

export default store;