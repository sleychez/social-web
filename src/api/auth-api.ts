import {instance, ResultCode, ResultCodeForCaptcha} from "./api"

import {APIResponseType} from "./api"


type MeResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authApi = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | boolean = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCode | ResultCodeForCaptcha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}