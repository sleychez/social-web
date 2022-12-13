import {InferActionsTypes} from "./redux-store";


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}


let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Danil'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Yarik'},
        {id: 6, name: 'Slava'}
        ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your dog?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessagesType>
};




const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}


export const  actions= {
    sendMessage:(newMessageBody: string) => ({type: 'AN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}


export default dialogsReducer