// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, my name is Yurii', likesCount: 0 },
//                 { id: 2, message: 'It is my first post', likesCount: 24 },
//             ],
//             newPostText: "Hello samurai"
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Yurii' },
//                 { id: 2, name: 'Anna' },
//                 { id: 3, name: 'Dementor' },
//                 { id: 4, name: 'Vova' },
//                 { id: 5, name: 'Marta' },
//                 { id: 6, name: 'Taras' },
//             ],
//             messages: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'How are you?' },
//                 { id: 3, message: 'What are you doing?' },
//                 { id: 4, message: 'Yo' },
//                 { id: 5, message: 'Yo' },
//             ],
//             newMessageBody: ""

//         },
//         sidebar: {},
//     },
//     _callSubscriber() {
//         console.log('State changed');
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._callSubscriber(this._state);
//     }
// }

//     export default store;
//     window.store = store;
