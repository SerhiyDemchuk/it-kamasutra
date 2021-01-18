import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESSFUL = 'app/INITIALIZED_SUCCESSFUL';

let initialState = {
    initialized: false,
    globalError: null,
}

const appReducer = (state = initialState, action) => {
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

const initalizedSuccessful = () => ({ type: INITIALIZED_SUCCESSFUL });

export const initializeApp = () => (dispatch) => {
    let propmise = dispatch(getAuthUserData());
    propmise.then(() => {
        dispatch(initalizedSuccessful());
    });
}

export default appReducer;