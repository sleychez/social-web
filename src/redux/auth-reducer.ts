import {ResultCode, ResultCodeForCaptcha} from '../api/api'
import {stopSubmit} from "redux-form";
import {authApi} from "../api/auth-api";
import {securityApi} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";



export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>



let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};



const authReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'AN/auth/SET_USER_DATA':
        case 'AN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {

setAuthUserData:(userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'AN/auth/SET_USER_DATA', payload:
        {userId, email, login, isAuth}
} as const),


getCaptchaUrlSuccess:(captchaUrl: string) => ({
    type: 'AN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
} as const)
}

export const getAuthUserData = ():ThunkType => async (dispatch: any) => {
    let meData = await authApi.me();

    if (meData.resultCode === ResultCode.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    // @ts-ignore
    let loginData = await authApi.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCode.Success) {
        await dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch:any) => {
    const data = await securityApi.getCaptchaUrl()
    const captchaUrl = data.url
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
    }


export const logout = (): ThunkType => async (dispatch: any) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;