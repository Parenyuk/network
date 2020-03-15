import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import Profile from "./components/Profile/Profile";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import Dialogs from "./components/Dialogs/Dialogs";



const App = () => {
  return (
    <div className="App" >
        <div className="App-wrapper">
     <Header/>
     <LeftNavbar/>
     <div className="App-wrapper-content" >
         {/*<Profile/>*/}
         <Dialogs/>
     </div>

     <RightNavbar/>
        </div>
    </div>
  );
}





export default App;

