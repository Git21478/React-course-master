import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {message: 'Hi', likes: 12},
        {message: 'How are you', likes: 15},
      ],

    newPostText: 'it-kamasutra.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
          
        default: 
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer