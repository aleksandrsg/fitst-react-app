const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';


let initialState = {
    posts:[
    {id:1, message:"Hi this is my first Props", likes:15, dislikes:100},
    {id:2, message:"I learn React.js", likes:100, dislikes:0},
    {id:3, message:"Use .MAP method", likes:20, dislikes:2},
    ],
    newPostText:"This text comes from State.js file"
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST){
        let newPost = {
            id:4,
            message: state.newPostText,
            likes:0,
            dislikes:0
        };
        state.posts.push(newPost);
        state.newPostText = '';       
} else if ( action.type === NEW_POST_TEXT){
    state.newPostText = action.newText;
    } 
    return state;
};

export default profileReducer;

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