import {createStore, combineReducers} from 'redux';
import friendsPageReducer from "./FriendsPageReducer";
import profilePageReducer from "./ProfilePageReducer";
import messagesPageReducer from "./MessagesPageReducer";

let reducers = combineReducers({
       profilePage: profilePageReducer,
       messagesPage: messagesPageReducer,
       friendsPage: friendsPageReducer
    }
    )


let store = createStore(reducers);

export default store;