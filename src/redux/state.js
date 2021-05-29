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
        },
    },
    getState(){
        return this._state;
    },

    addPost(){
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
        },

    subscribe(observer){
            this.rerenderEntireTree = observer;
        }
}

export default store;
window.state = store;
