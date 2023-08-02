// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk"; // Or any other middleware you prefer
import dataReducer from "./reducer";

const rootReducer = combineReducers({
  data: dataReducer
  // Add other reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
