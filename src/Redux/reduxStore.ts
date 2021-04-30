import {combineReducers, createStore, applyMiddleware, compose, Action} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogueReducer from './reducers/dialogueReducer';
import sidebarReducer from './reducers/sidebarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducers/appReducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguePage: dialogueReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never; 

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;

export default store;