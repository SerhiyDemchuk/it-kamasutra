import dialogueReducer from "./reducers/dialogueReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, avatar: 'https://bit.ly/3orDK1x', post: 'O_o', likesCount: 23 },
                { id: 2, avatar: 'https://bit.ly/36L1ibZ', post: 'Woof woof!', likesCount: 73 },
                { id: 3, avatar: 'https://bit.ly/39Kx6iV', post: 'Woof!!!', likesCount: 64 },
                { id: 4, avatar: 'https://bit.ly/3lQ9hsd', post: 'Bend your knees, bitch', likesCount: 216 },
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialoguePage: {
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
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguePage = dialogueReducer(this._state.dialoguePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;