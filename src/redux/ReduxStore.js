import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import friendsPageReducer from "./FriendsPageReducer";
import profilePageReducer from "./ProfilePageReducer";
import messagesPageReducer from "./MessagesPageReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";



let reducers = combineReducers({
       profilePage: profilePageReducer,
       messagesPage: messagesPageReducer,
       friendsPage: friendsPageReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers( applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;



