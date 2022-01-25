const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Yurii' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Dementor' },
        { id: 4, name: 'Vova' },
        { id: 5, name: 'Marta' },
        { id: 6, name: 'Taras' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'What are you doing?' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: 6,
                message: body,
            }
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;