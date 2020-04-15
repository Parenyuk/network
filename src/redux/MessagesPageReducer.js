const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

    const initialState = {
        messagesData: [
            {id: 1, name: 'Victor', message: `Hi`},
            {id: 2, name: 'Vasia Pypkin', message: `kyky`},
            {id: 3, name: 'Zinedin Zidan', message: `Hello`},
            {id: 4, name: 'Ronaldo', message: `Hello`},
            {id: 5, name: 'Vasia Pypkin', message: `Hello`},
        ],
        newMessageBody: ''
    }

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = action.body = '';
             state.messagesData.push({id: 6, name: 'Vasia Pypkin', message: body});
            return state;
        default:
            return state;
    }

}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messagesPageReducer;