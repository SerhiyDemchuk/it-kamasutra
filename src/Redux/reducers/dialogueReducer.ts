const SEND_MESSAGE = 'SEND-MESSAGE';

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

export type initialStateType = typeof initialState;

const dialogueReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: body }],
            };
        default:
            return state;
    }
}

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogueReducer;