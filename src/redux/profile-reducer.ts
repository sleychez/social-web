import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileApi} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 14},
        {id: 2, message: 'Its my first post', likesCount: 43},
        {id: 3, message: 'Blabla', likesCount: 42},
        {id: 4, message: 'Dada', likesCount: 43}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AN/PROFILE/ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'AN/PROFILE/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'AN/PROFILE/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'AN/PROFILE/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}}
        default:
            return state;
    }
}



export const actions = {

 addPost: (newPostText: string) => ({type: 'AN/PROFILE/ADD-POST', newPostText} as const),



 setUserProfile: (profile: ProfileType) => ({type: 'AN/PROFILE/SET_USER_PROFILE', profile} as const),



setStatus: (status: string)  => ({type: 'AN/PROFILE/SET_STATUS', status} as const),


savePhotoSuccess: (photos: PhotosType)  => ({type: 'AN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileApi.getProfile(userId)
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileApi.getStatus(userId)
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileApi.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileApi.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileApi.saveProfile(profile)

    if (data.resultCode === 0) {
        if (userId != null) {
        await dispatch(getUserProfile(userId));
            } else {
            throw new Error('userId cant be null')
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;