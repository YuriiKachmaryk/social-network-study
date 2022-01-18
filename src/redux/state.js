import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, my name is Yurii', likesCount: 0 },
            { id: 2, message: 'It is my first posts', likesCount: 24 },
        ],
        newPostText: "Heloo samurai"
    },
    messagesPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'What are you doing?' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' },
        ],
        // newMessageText: "hi hi",
        dialogs: [
            { id: 1, name: 'Yurii' },
            { id: 2, name: 'Anna' },
            { id: 3, name: 'Dementor' },
            { id: 4, name: 'Vova' },
            { id: 5, name: 'Marta' },
            { id: 6, name: 'Taras' },
        ]
    },
}

window.state = state;

// export let addMessage = () => {
//     let newPost = {
//         id: 7,
//         message: state.messagesPage.newMessageText,
//     };

//     state.messagesPage.posts.push(newPost);
//     state.messagesPage.newMessageText = '';
//     rerenderEntireTree(state);
// };

// export let updateNewMessageText = (newText) => {

//     state.messagePage.newPostText= newText;
//     rerenderEntireTree(state);
// };

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
};



export default state;