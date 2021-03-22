import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store; 