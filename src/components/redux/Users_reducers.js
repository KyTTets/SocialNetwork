const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOWMORE = 'SHOWMORE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1, userName: 'Zheka', location: { city: 'Yoshkar-Ola', country: 'Russia' }, status: 'i am create users Page',
            avatar: 'https://zm-cs.ru/files/avatars/1537189754.jpg', follower: true
        },
        {
            id: 2, userName: 'Zheka', location: { city: 'Yoshkar-Ola', country: 'Russia' }, status: 'i am create users Page too',
            avatar: 'https://zm-cs.ru/files/avatars/1537189754.jpg', follower: true
        },
        {
            id: 3, userName: 'Sasha', location: { city: 'Moscow', country: 'Russia' }, status: 'i am create users Page',
            avatar: 'https://zm-cs.ru/files/avatars/1537189754.jpg', follower: false
        },
        {
            id: 4, userName: 'Oleg', location: { city: 'Mari-Oshaevo', country: 'Russia' }, status: 'i am create users Page',
            avatar: 'https://zm-cs.ru/files/avatars/1537189754.jpg', follower: true
        },


    ],

}

const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, follower: true }
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, follower: false }
                    }
                    return user;
                })
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW < userId })
export const showMoreAC = () => ({ type: SHOWMORE })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;