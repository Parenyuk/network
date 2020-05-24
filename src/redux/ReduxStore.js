import {createStore, combineReducers, applyMiddleware} from 'redux';
import friendsPageReducer from "./FriendsPageReducer";
import profilePageReducer from "./ProfilePageReducer";
import messagesPageReducer from "./MessagesPageReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
       profilePage: profilePageReducer,
       messagesPage: messagesPageReducer,
       friendsPage: friendsPageReducer,
        usersPage: usersReducer,
        auth: authReducer
    });
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;



