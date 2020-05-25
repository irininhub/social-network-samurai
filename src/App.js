import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialisedApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import WithSuspense from "./components/hoc/WithSuspense";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initialisedApp()
    }

    render() {
        if (!this.props.initialised) {
            return <Preloader/>
        }
        return <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                <Route path='/dialogs' render={() => {
                    return <React.Suspense fallback={<Preloader/>}>
                    <DialogsContainer/>
                    </React.Suspense>}}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <Login/>}/>
                {/*<Route path='/friends' render ={()=> Friends}/>*/}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initialisedApp})
)(App)


