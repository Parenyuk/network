import React from 'react';
import './App.css';
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Audio from "./components/Audio/Audio";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/ReduxStore";
import state from './redux/Store'
import Paginator from "./components/Common/Paginator/Paginator";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <BrowserRouter>
                <div className="App">
                    <div className="App-wrapper">
                        <HeaderContainer/>
                        <LeftNavbar/>
                        <div className="App-wrapper-content">
                            <Route path="/profile/:userId?"><ProfileContainer store={this.props.store}/></Route>
                            <Route exact path="/messages"><MessagesContainer store={this.props.store}/> </Route>
                            <Route path="/news"><News/> </Route>
                            <Route path="/friends"><Friends state={this.props.state.friendsPage}/></Route>
                            <Route path="/audio"><Audio/> </Route>
                            <Route path='/users'><UsersContainer/></Route>
                            <Route path="/settings"><Settings/> </Route>
                            <Route path='/login'><Login/></Route>
                            {/*<Route path='/paginator'><Paginator totalItemsCount={800} pageSize={10} currentPage={1}*/}
                            {/*                                    onPageChanged={2} portionSize={10} /></Route>*/}
                        </div>
                        <RightNavbar/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const MainApp = (props)=> {
 return   <BrowserRouter>
        <Provider store={store}>
           <AppContainer state={state} />
        </Provider>
    </BrowserRouter>
}
