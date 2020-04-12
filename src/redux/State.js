
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
            newPostText: 'vaid'
        },
        messagesPage: {
            messagesData: [
                {id: 1, name: 'Victor', message: `Hi`},
                {id: 2, name: 'Vasia Pypkin', message: `kyky`},
                {id: 3, name: 'Zinedin Zidan', message: `Hello`},
                {id: 4, name: 'Ronaldo', message: `Hello`},
                {id: 5, name: 'Vasia Pypkin', message: `Hello`},
            ]
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
    getState(){
        return this._state;
    },
    _callSubscriber () {
        console.log('Bla-Bla')
    },
    addPost () {
    debugger;
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    subscibe (observer)  {
        this._callSubscriber = observer;
    },
}















window.store = store;
export default store;