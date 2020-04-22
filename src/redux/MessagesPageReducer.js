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
        let stateCopy = {
            ...state,
            messages: [...state.messagesData]
}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return  stateCopy

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.newMessageBody = action.body = '';
            stateCopy.messagesData.push({id: 6, name: 'Vasia Pypkin', message: body});
            return  stateCopy;
        default:
            return state;
    }

}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messagesPageReducer;