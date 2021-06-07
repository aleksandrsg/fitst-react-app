const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

const profileReducer = (state, action) => {
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