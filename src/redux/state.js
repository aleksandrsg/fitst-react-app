let rerenderEntireTree = () => {
    console.log ('State changed');
}

let state = {
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
    }     
};


export const addPost = (postMessage) =>{
    let newPost = {
        id:4,
        message: postMessage,
        likes:0,
        dislikes:0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;