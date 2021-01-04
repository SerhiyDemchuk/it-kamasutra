const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Dimycz' },
        { id: 2, name: 'Adam' },
        { id: 3, name: 'Puppy' },
        { id: 4, name: 'Owl' },
        { id: 5, name: 'Lion' },
        { id: 6, name: 'Dog' },
    ],
    messagesData: [
        { id: 1, message: 'Czesc' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Шта О_о' },
    ],
}

const dialogueReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogueReducer;