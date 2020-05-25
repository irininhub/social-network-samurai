
const SEND_MESSAGE = 'dialogReducer/SEND-MESSAGE';

let initialState = {
    dialogs: [
        {name: "Dimych", id: 1},
        {name: "Andrey", id: 2},
        {name: "Marat", id: 3},
        {name: "Irina", id: 4},
        {name: "Victoria", id: 5}

    ],
    messages: [
        {message: "Hi!", id: 1},
        {message: "Hello, mallo!", id: 2},
        {message: "What's up!!", id: 3}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: body, id: 4}]
            };
        default:
            return state;

    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;