let rerenderEntireTree = () => {

}

let state = {
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
    },

    addPost() {
        let newPost = {
            id: 4, 
            avatar: 'https://bit.ly/39IgisU', 
            post: this.profilePage.newPostText,
            likesCount: 33,
        };
    
        state.profilePage.postsData.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(this);
    },
    
    updateNewPostText(text) {
        state.profilePage.newPostText = text;
        rerenderEntireTree(this);
    },
    
    subscribe(observer) {
        rerenderEntireTree = observer;
    }

};


export const addPost = () => {
    let newPost = {
        id: 4, 
        avatar: 'https://bit.ly/39IgisU', 
        post: state.profilePage.newPostText,
        likesCount: 33,
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;