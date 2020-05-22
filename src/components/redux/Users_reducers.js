const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOWMORE = 'SHOWMORE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, follower: true }
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
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
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const showMoreAC = () => ({ type: SHOWMORE })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;