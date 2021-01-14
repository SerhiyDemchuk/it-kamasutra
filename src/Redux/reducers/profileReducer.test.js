import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    postsData: [
        { id: 1, avatar: 'https://bit.ly/39IgisU', post: 'O_o', likesCount: 23 },
        { id: 2, avatar: 'https://bit.ly/39IgisU', post: 'T_T', likesCount: 73 },
    ]
}

it('postsData array\'s length should be incremented', () => {
    // 1. test data:
    let action = addPost('test result');
    // 2. action:
    let newState = profileReducer(state, action);
    // 3. expectation:
    expect(newState.postsData.length).toBe(3);
});

it('after delete posts count should be decremented', () => {
    // 1. test data:
    let action = deletePost(1);
    // 2. action:
    let newState = profileReducer(state, action);
    // 3. expectation:
    expect(newState.postsData.length).toBe(1);
});

it('after delete posts count should not be decremented', () => {
    // 1. test data:
    let action = deletePost(1000);
    // 2. action:
    let newState = profileReducer(state, action);
    // 3. expectation:
    expect(newState.postsData.length).toBe(2);
});