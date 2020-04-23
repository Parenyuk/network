const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    friendData: [
        {id: 1, name: 'Victor', surname: 'P', status: 'I am learn  React', location: {city: 'Kyiv', country: 'Ukraine'} },
        {id: 2, name: 'Vasia Pypkin'},
        {id: 3, name: 'Zinedin Zidan'},
        {id: 4, name: 'Ronaldo'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Vasia '},
        {id: 7, name: 'Kaka'},
        {id: 8, name: 'Victoria'},
        {id: 9, name: 'Nikola'},

    ]
}

const friendsPageReducer = (state = initialState, action) => {

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
                messages: [...state.messagesData, {id: 6, name: 'Vasia Pypkin', message: body}]
            }

        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default friendsPageReducer;







