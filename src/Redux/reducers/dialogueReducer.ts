import { InferActionsTypes } from "../reduxStore";

type dialogueType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        { id: 1, name: 'Dimycz' },
        { id: 2, name: 'Adam' },
        { id: 3, name: 'Puppy' },
        { id: 4, name: 'Owl' },
        { id: 5, name: 'Lion' },
        { id: 6, name: 'Dog' },
    ] as Array<dialogueType>,
    messagesData: [
        { id: 1, message: 'Czesc' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Шта О_о' },
    ] as Array<messageType>,
}


const dialogueReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SN/dialogues/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: body }],
            };
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SN/dialogues/SEND-MESSAGE', newMessageBody } as const)
}

export default dialogueReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
