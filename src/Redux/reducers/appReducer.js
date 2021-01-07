import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESSFUL = 'INITIALIZED_SUCCESSFUL';

let initialState = {
    initialized: false,
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