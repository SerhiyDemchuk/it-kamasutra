import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/reducers/appReducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/reduxStore';
import { withSuspense } from './hoc/withSuspense';

const DialoguesContainer = React.lazy(() => import('./components/Dialogues/DialoguesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('Some error occured');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
          <Switch>
            <Route exact path="/"
              render={() => <Redirect to={'/profile'} />} />

            <Route path="/profile/:userId?"
              render={withSuspense(ProfileContainer)} />

            <Route path="/dialogues"
              render={withSuspense(DialoguesContainer)} />

            <Route path="/users"
              render={() => <UsersContainer />} />

            <Route path="/login"
              render={withSuspense(Login)} />

            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </Switch>
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