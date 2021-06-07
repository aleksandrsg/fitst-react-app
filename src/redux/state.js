import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";

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
        sidebar:{}
    },

    getState(){
        return this._state;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer){
            this.rerenderEntireTree = observer;
        }
};

export default store;
window.state = store;
