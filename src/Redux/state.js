const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE= 'SEND_MESSAGE'

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if ( action.type === SEND_MESSAGE){
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody='';
            this._state.dialogPage.messages.push({id:6, message:body});
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewBodyMessageCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY ,body: body})

window.store = store;
export default store;

