import profilePageReducer from "./ProfilePageReducer";
import messageReducer from "./MessagesPageReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: `Hi Victor`, likeCount: 20,},
                {id: 2, message: `Hy`, likeCount: 15,},
                {id: 3, message: `Hky`, likeCount: 1,},
                {id: 4, message: `Hghwjhg jkr`, likeCount: 0,},
                {id: 5, message: `Hwgfl wkj`, likeCount: 11,},
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                {id: 1, name: 'Victor', message: `Hi`},
                {id: 2, name: 'Vasia Pypkin', message: `kyky`},
                {id: 3, name: 'Zinedin Zidan', message: `Hello`},
                {id: 4, name: 'Ronaldo', message: `Hello`},
                {id: 5, name: 'Vasia Pypkin', message: `Hello`},
            ],
            newMessageBody: ''
        },
        friendsPage: {
            friendData: [
                {id: 1, name: 'Victor'},
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
    },

    _callSubscriber () {
        console.log('Bla-Bla')
    },
    getState(){
        return this._state;
    },
    subscibe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state);
    }

    // dispatch(action) {
    //     if(action.type === ADD_POST) {
    //         let newPost = {
    //             id: 6,
    //             message: this._state.profilePage.newPostText,
    //             likesCount: 0
    //         };
    //         this._state.profilePage.postData.push(newPost);
    //         this._state.profilePage.newPostText = ""
    //         this._callSubscriber()
    //     }
    //     else if (action.type === UPDATE_NEW_POST_TEXT ) {
    //         this._state.profilePage.newPostText = action.newText;
    //         this._callSubscriber(this._state)
    //     }
    //     else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //         this._state.messagesPage.newMessageBody = action.body;
    //         this._callSubscriber(this._state)
    //     }
    //     else if (action.type === SEND_MESSAGE) {
    //       let body = this._state.messagesPage.newMessageBody;
    //         this._state.messagesPage.newMessageBody = action.body = '';
    //         this._state.messagesPage.messagesData.push({id: 6, name: 'Vasia Pypkin', message: body});
    //         this._callSubscriber(this._state)
    //
    //     }
    // },

}















window.store = store;
export default store;