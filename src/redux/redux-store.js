import {combineReducers, createStore} from "redux";
import listReducer from "./list-reducer";

let reducer = combineReducers({
  listPage: listReducer
})

let store = createStore(reducer)

export default store;
