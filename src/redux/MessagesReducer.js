const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


const profileReducer = (state, action) => {
    return state;
}


else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    this._state.messagesPage.newMessageBody = action.body;
    this._callSubscriber(this._state)
}
else if (action.type === SEND_MESSAGE) {
    let body = this._state.messagesPage.newMessageBody;
    this._state.messagesPage.newMessageBody = action.body = '';
    this._state.messagesPage.messagesData.push({id: 6, name: 'Vasia Pypkin', message: body});
    this._callSubscriber(this._state)

}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
