
import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";

let reducers = combineReducers({
    profilePage: profileReduce,
    dialogPage:dialogsReduce
})
let store = createStore(reducers);
export default store;