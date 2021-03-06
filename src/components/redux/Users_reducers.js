const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOWMORE = 'SHOWMORE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCH = 'IS_FETCH'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pagesSize: 5,
    currentPage: 4,
    isFetch: false


}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users }

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
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }

        case IS_FETCH:
            return {
                ...state, isFetch: action.isFetch
            }
        default:
            return state;
    }

}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const showMore = () => ({ type: SHOWMORE })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const isFetcher = (isFetch) => ({ type: IS_FETCH, isFetch })

export default usersReducer;