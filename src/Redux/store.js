import { reducer } from "./Reducers";
import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(reducer);