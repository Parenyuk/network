import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Audio from "./components/Audio/Audio";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";





const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-wrapper">
                    <Header/>
                    <LeftNavbar/>
                    <div className="App-wrapper-content">
                        <Route path="/profile/:userId?"><ProfileContainer store={props.store}/></Route>
                        <Route exact path="/messages"><MessagesContainer    store={props.store} /> </Route>
                        <Route path="/news"><News/> </Route>
                        <Route path="/friends"><Friends state={props.state.friendsPage} /></Route>
                        <Route path="/audio"><Audio/> </Route>
                        <Route path='/users'><UsersContainer /></Route>
                        <Route path="/settings"><Settings/> </Route>
                    </div>
                    <RightNavbar/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

//state={props.state.friendsPage}
//store={props.state.searchUsers}
