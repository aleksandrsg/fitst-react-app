import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem.jsx'
import Message from './Messeges/Messege.jsx'
import {newMessageTextActionCreator,addNewMessageActionCreator} from '../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs.jsx'


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessageText= (newMessage) =>{
        props.store.dispatch(newMessageTextActionCreator(newMessage));
      }
    
    let sendMessage = () =>{
        props.store.dispatch(addNewMessageActionCreator());
    }

    return (
    <Dialogs updateNewMessageBody={newMessageText} sendMessage={sendMessage} dialogsPage= {state}/> 
    )
}
export default DialogsContainer;