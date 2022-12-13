import axios from "axios"
import {UserType} from "../types/types"


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ddb53878-a138-494f-a8f1-858c444acf6a'
    }
})


export enum ResultCode {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCode> = {
    data: D
    messages: Array<string>
    resultCode: RC
}




