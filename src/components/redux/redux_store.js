import { createStore, combineReducers } from "redux";
import profileReducer from './Profile_reducer';
import dialogsReducer from './Dialogs_reducer';
import sidebarReducer from './Sidebar_reducer';
import MusicReducer from "./Music_reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    musicPage: MusicReducer
});


let store = createStore (reducers);

window.store=store;



export default store;