import {createStore, combineReducers} from 'redux';
import friendsPageReducer from "./FriendsPageReducer";
import profilePageReducer from "./ProfilePageReducer";
import messagesPageReducer from "./MessagesPageReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";


let reducers = combineReducers({
       profilePage: profilePageReducer,
       messagesPage: messagesPageReducer,
       friendsPage: friendsPageReducer,
        usersPage: usersReducer,
        auth: authReducer
    });
let store = createStore(reducers);

export default store;



