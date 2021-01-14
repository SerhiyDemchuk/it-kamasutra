import React from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/reducers/appReducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/reduxStore';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/profile/:userId?"
            render={() => <ProfileContainer />} />

          <Route path="/dialogues"
            render={() => <DialoguesContainer />} />

          <Route path="/users"
            render={() => <UsersContainer />} />

          <Route path="/login"
            render={() => <Login />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJSApp = (props) => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default SamuraiJSApp;