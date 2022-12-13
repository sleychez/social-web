import {getAuthUserData} from "./auth-reducer";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {stopSubmit} from "redux-form";

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case 'AN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}


export const actions = {
    initializedSuccess: () => ({type: 'AN/APP/INITIALIZED_SUCCESS'} as const)

}
export const initializeApp = (): ThunkType => async (dispatch: any) => {
let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}



export default appReducer;