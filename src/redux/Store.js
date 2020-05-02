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
        },
        usersPage: {
            usersData: [
                {id: 1,  name: 'Victor'},
                {id: 2, name: 'Vasia Pypkin'},
                {id: 3, name: 'Zinedin Zidan'},
                {id: 4, name: 'Ronaldo'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'Vasia '},
                {id: 7, name: 'Kaka'},
                {id: 8, name: 'Victoria'},
                {id: 9, name: 'Nikola'},

            ]
        },

        // searchUsers: {
        //     users: [
        //         {
        //             id: 1,
        //             photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: true,
        //             name: 'Victor',
        //             surname: 'P',
        //             status: 'I am learning  React',
        //             location: {city: 'Kyiv', country: 'Ukraine'}
        //         },
        //         {
        //             id: 2,
        //             photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: true,
        //             name: 'Vasia',
        //             surname: 'Pypkin',
        //             status: 'I am learn  Redux',
        //             location: {city: 'Poltava', country: 'Ukraine'}
        //         },
        //         {
        //             id: 3,
        //                 photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: true,
        //             name: 'Zinedin',
        //             surname: 'Zidan',
        //             status: 'I am learn  CSS',
        //             location: {city: 'Odesa', country: 'Ukraine'}
        //         },
        //         {
        //             id: 4,
        //                 photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: false,
        //             name: 'Ronaldo',
        //             surname: 'P',
        //             status: 'I am learn  React',
        //             location: {city: 'Lviv', country: 'Ukraine'}
        //         },
        //         {
        //             id: 5,
        //                 photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: false,
        //             name: 'Sveta',
        //             surname: 'R',
        //             status: 'I am learn  React',
        //             location: {city: 'Kyiv', country: 'Ukraine'}
        //         },
        //         {
        //             id: 6,
        //                 photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: true,
        //             name: 'Rikardo',
        //             surname: 'Kaka',
        //             status: 'I am playing football',
        //             location: {city: 'Berlin', country: 'Germany'}
        //         },
        //         {
        //             id: 7,
        //                 photoUrl: 'https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2015/2015_dewa-mavhinga_03_web-bio.jpg?itok=YFRPAxZy',
        //             followed: true,
        //             name: 'Jordan',
        //             surname: 'R',
        //             status: 'I am paying basktball',
        //             location: {city: 'LA', country: 'USA'}
        //         },
        //     ]
        // }
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


}








window.store = store;
export default store;