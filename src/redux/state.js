const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';
const NEW_MESSAGE_TEXT ='NEW-MESSAGE-TEXT';

let store = {
    rerenderEntireTree() {
        console.log ('State changed');
    },
    
    _state:{
        profilePage:{
            posts:[
            {id:1, message:"Hi this is my first Props", likes:15, dislikes:100},
            {id:2, message:"I learn React.js", likes:100, dislikes:0},
            {id:3, message:"Use .MAP method", likes:20, dislikes:2},
            ],
            newPostText:"This text comes from State.js file"
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name:'Olga'},
                {id: 2, name:'Alex'},
                {id: 3, name:'Leo'},
                {id: 4, name:'Lada'},
                {id: 5, name:'Anna'}
            ],
            messages:[
                {id:1, message:"Hi"},
                {id:2, message:"How are you?"},
                {id:3, message:"Well!"},
              ],
            newMessageText:''
        },
    },

    getState(){
        return this._state;
    },

    dispatch(action){ // action is OBJECT { type:'ADD-POST'}
        if (action.type === ADD_POST){
            let newPost = {
                id:4,
                message: this._state.profilePage.newPostText,
                likes:0,
                dislikes:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state);

        } else if ( action.type === NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        } else if ( action.type === NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.body;
            this.rerenderEntireTree(this._state);
        } else if (action.type === NEW_MESSAGE){
            let newMessage =this._state.dialogsPage.newMessageText; 
            this._state.dialogsPage.messages.push({id:4, message: newMessage});
            this._state.dialogsPage.newMessageText= '';
            this.rerenderEntireTree(this._state);
        }
    },
    
    /*addPost(){
            let newPost = {
                id:4,
                message: this._state.profilePage.newPostText,
                likes:0,
                dislikes:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state);
        },

    updateNewPostText(newText){
            this._state.profilePage.newPostText = newText;
            this.rerenderEntireTree(this._state);
        },*/

    subscribe(observer){
            this.rerenderEntireTree = observer;
        }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: NEW_POST_TEXT,
        newText:text}
};

export const addNewMessageActionCreator = () => {
    return {
        type: NEW_MESSAGE
    }
};

export const newMessageTextActionCreator = (newMessage) => {
    return {
        type: NEW_MESSAGE_TEXT,
        body: newMessage,
    }
};

export default store;
window.state = store;
