import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    postsData: [
        { id: 1, avatar: 'https://bit.ly/39IgisU', post: 'O_o', likesCount: 23 },
        { id: 2, avatar: 'https://bit.ly/39IgisU', post: 'T_T', likesCount: 73 },
    ]
}

it('postsData array\'s length should be incremented', () => {
    let action = addPost('test result');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});

it('after delete posts count should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(1);
});

it('after delete posts count should not be decremented', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});