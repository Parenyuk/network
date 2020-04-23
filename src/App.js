import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import Profile from "./components/Profile/Profile";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Audio from "./components/Audio/Audio";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import MessagesContainer from "./components/Messages/MessagesContainer";
import SearchUsers from "./components/SearchUsers/SearchUsers";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-wrapper">
                    <Header/>
                    <LeftNavbar/>
                    <div className="App-wrapper-content">
                        <Route path="/profile"><Profile store={props.store}/></Route>
                        <Route exact path="/messages"><MessagesContainer    store={props.store} /> </Route>
                        <Route path="/news"><News/> </Route>
                        <Route path="/friends"><Friends state={props.state.friendsPage} /></Route>
                        <Route path="/audio"><Audio/> </Route>
                        <Route path='/SearchUsers'>  <SearchUsers state={props.state}/> </Route>
                        <Route path="/settings"><Settings/> </Route>
                    </div>
                    <RightNavbar/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

