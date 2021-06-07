const NEW_MESSAGE = 'NEW-MESSAGE';
const NEW_MESSAGE_TEXT ='NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    if ( action.type === NEW_MESSAGE_TEXT){
    state.newMessageText = action.body;
    } else if (action.type === NEW_MESSAGE){
        let newMessage = state.newMessageText; 
        state.messages.push({id:4, message: newMessage});
        state.newMessageText= '';
    }
    return state;
}

export default dialogsReducer;

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