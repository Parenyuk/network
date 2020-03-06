import React from 'react';
import './App.css';
import Header from "./components/header";
import LeftNavbar from "./components/LeftNavbar";
import Profile from "./components/Profile";
import RightNavbar from "./components/RightNavbar";



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

