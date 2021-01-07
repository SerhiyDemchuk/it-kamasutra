import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogueReducer from './reducers/dialogueReducer';
import sidebarReducer from './reducers/sidebarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducers/appReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguePage: dialogueReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;