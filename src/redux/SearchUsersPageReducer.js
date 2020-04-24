const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: 'Victor',
            surname: 'P',
            status: 'I am learning  React',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: 2,
            followed: true,
            name: 'Vasia',
            surname: 'Pypkin',
            status: 'I am learn  Redux',
            location: {city: 'Poltava', country: 'Ukraine'}
        },
        {
            id: 3,
            followed: true,
            name: 'Zinedin',
            surname: 'Zidan',
            status: 'I am learn  CSS',
            location: {city: 'Odesa', country: 'Ukraine'}
        },
        {
            id: 4,
            followed: true,
            name: 'Ronaldo',
            surname: 'P',
            status: 'I am learn  React',
            location: {city: 'Lviv', country: 'Ukraine'}
        },
        {
            id: 5,
            followed: true,
            name: 'Sveta',
            surname: 'R',
            status: 'I am learn  React',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
        {
            id: 6,
            followed: true,
            name: 'Rikardo',
            surname: 'Kaka',
            status: 'I am playing football',
            location: {city: 'Berlin', country: 'Germany'}
        },
        {
            id: 7,
            followed: true,
            name: 'Jordan',
            surname: 'R',
            status: 'I am paying basktball',
            location: {city: 'LA', country: 'USA'}
        },
    ]
}

const SearchUsersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                  return   u
                })

            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return   u
                })

            };

        case SET_USERS: {
            return {...state, users: [...state.searchusers.users, ...action.users]}
        }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default SearchUsersPageReducer;







