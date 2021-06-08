const NEW_MESSAGE = 'NEW-MESSAGE';
const NEW_MESSAGE_TEXT ='NEW-MESSAGE-TEXT';

let initialState= {
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
};

const dialogsReducer = (state=initialState, action) => {
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