const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: "Oleh" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Maria" },
        { id: 4, name: "Valeriy" },
        { id: 5, name: "John" },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your project?" },
        { id: 3, message: "Looks not ok" },
    ],
    newMessageBody: ""
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state, 
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 4, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: 'SEND-MESSAGE' });
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY', 
        body: body
    }
}

export default messagesReducer;