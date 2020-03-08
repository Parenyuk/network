import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import Profile from "./components/Profile/Profile";
import RightNavbar from "./components/RightNavbar/RightNavbar";



const App = () => {
  return (
    <div className="App-wrapper">
     <Header/>

     <LeftNavbar/>
     <Profile/>
     <RightNavbar/>

    </div>
  );
}





export default App;

