import React, {Suspense} from 'react';
import './App.css';
import LeftNavbar from './components/LeftNavbar/LeftNavbar';
import RightNavbar from './components/RightNavbar/RightNavbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Audio from './components/Audio/Audio';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/ReduxStore';
import state from './redux/Store'
import {withSuspense} from './hoc/withSuspense';

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    // alert('Some Error Occured');
    // console.error(promiseRejectionEvent)
    // }

    componentDidMount() {
        this.props.initializeApp();
        // window.addEventListener('unhandledrejection', function(promiseRejectionEvent))

    }
    // componentWillUnmount() {
    //     window.removeEventListener('unhandledrejection', function(promiseRejectionEvent))
    // }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <div className="App">
                <div className="App-wrapper">
                    <HeaderContainer/>
                    <LeftNavbar/>
                    <div className="App-wrapper-content">
                        <Switch>
                            <Route exact path='/'
                                   render= {() => <Redirect to={'/profile'} />} />
                            <Route path='/messages'
                                   render={withSuspense(MessagesContainer)}/>
                            <Route path='/profile/:userId?'
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path="/news"><News/> </Route>
                            <Route path="/friends"><Friends state={this.props.state.friendsPage}/></Route>
                            <Route path="/audio"><Audio/> </Route>
                            <Route path='/users'><UsersContainer/></Route>
                            <Route path="/settings"><Settings/> </Route>
                            <Route path='/login'><Login/></Route>
                            {/*<Route path='*'>404 Not Found</Route>*/}
                        </Switch>
                    </div>
                    <RightNavbar/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer state={state}/>
        </Provider>
    </BrowserRouter>
}
