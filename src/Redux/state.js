import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 23},
                {id: 2, message: "It's my first post.", likesCount: 3}
            ],
            newPostText: ' it'

        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Salkyn'},
                {id: 2, name: 'Tolkun'},
                {id: 3, name: 'Beksultan'},
                {id: 4, name: 'Samat'},
                {id: 5, name: 'Medet'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT- kamasutra'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody :''
        },
    },
    _callSubscriber() {
        console.log('render has changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduce(this._state.profilePage,action);
        this._state.dialogPage = dialogsReduce(this._state.dialogPage,action);
        this._callSubscriber(this._state);
    }

}
window.store = store;
export default store;

