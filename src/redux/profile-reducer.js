const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, message: 'Hi, my name is Yurii', likesCount: 0 },
        { id: 2, message: 'It is my first post', likesCount: 24 },
    ],
    newPostText: "Hello samurai"
};

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
     ({ type: UPDATE_NEW_POST_TEXT, newText: text });
    export default profileReducer;