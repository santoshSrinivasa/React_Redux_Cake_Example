import {createStore} from "redux";
import CakeReducer from "./Reducer";

export const store = createStore(CakeReducer);