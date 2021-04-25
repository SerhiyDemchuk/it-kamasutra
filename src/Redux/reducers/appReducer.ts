import { InferActionsTypes } from "../reduxStore";
import { getAuthUserData } from "./authReducer";

let initialState = {
    initialized: false
}

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESSFUL':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const actions = {
    initalizedSuccessful: () => ({ type: 'SN/APP/INITIALIZED_SUCCESSFUL' } as const)
}

export const initializeApp = () => (dispatch: any) => {
    let propmise = dispatch(getAuthUserData());
    propmise.then(() => {
        dispatch(actions.initalizedSuccessful());
    });
}

export default appReducer;