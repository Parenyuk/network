import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import Profile from "./components/Profile/Profile";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Audio from "./components/Audio/Audio";
import News from "./components/News/News";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-wrapper">
                    <Header/>
                    <LeftNavbar/>
                    <div className="App-wrapper-content">
                        <Route path="/profile"><Profile/> </Route>
                        <Route exact path="/messages"><Messages/> </Route>
                        <Route path="/news"><News/> </Route>
                        <Route path="/audio"><Audio/> </Route>
                        <Route path="/settings"><Settings/> </Route>

                    </div>

                    <RightNavbar/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

