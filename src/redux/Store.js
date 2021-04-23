import RootReducer from "./RootReducer";
import { createStore,applyMiddleware } from 'redux';
<<<<<<< HEAD
import logger from 'redux-logger';
 import thunk from 'redux-thunk';

const store=createStore(RootReducer,applyMiddleware(logger,thunk));
=======
import thunk from "redux-thunk";
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const store=createStore(RootReducer,applyMiddleware(thunk));
>>>>>>> 55af9dd36935d1e6ccb03203bdca33af83c6fb41

export default store;