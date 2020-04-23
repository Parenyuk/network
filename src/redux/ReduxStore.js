import {createStore, combineReducers} from 'redux';
import friendsPageReducer from "./FriendsPageReducer";
import profilePageReducer from "./ProfilePageReducer";
import messagesPageReducer from "./MessagesPageReducer";
import SearchUsersPageReducer from "./SearchUsersPageReducer";

let reducers = combineReducers({
       profilePage: profilePageReducer,
       messagesPage: messagesPageReducer,
       friendsPage: friendsPageReducer,
        SearchUsers: SearchUsersPageReducer,
    }
    )


let store = createStore(reducers);

export default store;