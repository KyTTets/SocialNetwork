const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';


let initialState = {
    posts: [
        { id: 1, message: 'Hello, world', likeValue: 12 },
        { id: 2, message: 'This is my first post', likeValue: 101 },
        { id: 3, message: 'BLABLA', likeValue: 101 },
        { id: 4, message: 'My name iz Zhenya', likeValue: 101 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeValue: 2
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };

        }

        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default profileReducer;