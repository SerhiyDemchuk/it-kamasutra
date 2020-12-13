import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogueReducer from './reducers/dialogueReducer';
import sidebarReducer from './reducers/sidebarReducer';
import usersReducer from './reducers/usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguePage: dialogueReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;