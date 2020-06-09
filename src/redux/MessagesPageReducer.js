const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    messages: [
        {id: 1, name: 'Victor', message: `Hi`},
        {id: 2, name: 'Vasia Pypkin', message: `kyky`},
        {id: 3, name: 'Zinedin Zidan', message: `Hello`},
        {id: 4, name: 'Ronaldo', message: `Hello`},
        {id: 5, name: 'Vasia Pypkin', message: `Hello`},
    ]
}

const messagesPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default messagesPageReducer;