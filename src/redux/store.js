import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 14},
                {id: 2, message: 'Its my first post', likesCount: 43},
                {id: 2, message: 'Blabla', likesCount: 42},
                {id: 2, message: 'Dada', likesCount: 43}],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Danil'},
                {id: 4, name: 'Vlad'},
                {id: 5, name: 'Yarik'},
                {id: 6, name: 'Slava'}],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your dog?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: '',
        },
        sidebar: {}
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        }

}



export default store;
window.store = store;