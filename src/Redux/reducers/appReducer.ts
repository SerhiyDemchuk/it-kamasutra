import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESSFUL = 'app/INITIALIZED_SUCCESSFUL';

export type initialStateType = {
    initialized: boolean,
}

let initialState: initialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESSFUL
}

const initalizedSuccessful = (): initializedSuccessActionType => ({ type: INITIALIZED_SUCCESSFUL });

export const initializeApp = () => (dispatch: any) => {
    let propmise = dispatch(getAuthUserData());
    propmise.then(() => {
        dispatch(initalizedSuccessful());
    });
}

export default appReducer;