import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem.jsx'
import Message from './Messeges/Messege.jsx'
import {newMessageTextActionCreator,addNewMessageActionCreator} from '../../redux/dialogs-reducer.js'

const Dialogs = (props) => {

    
    let dialogsElements = props.store._state.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.store._state.dialogsPage.messages.map( m => <Message message={m.message}/>)
    let newMessageField = props.store._state.dialogsPage.newMessageText;

    let newMessageText= (e) =>{
        let newMessage = e.target.value;
        props.store.dispatch(newMessageTextActionCreator(newMessage));
      }
    
    let sendMessage = () =>{
        props.store.dispatch(addNewMessageActionCreator());
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div> 
            <div className={classes.messages}>
               <div>{messagesElements}</div>
               <div><textarea value={newMessageField}
                            placeholder="Type your message here"
                            onChange={newMessageText}>
                   </textarea></div>
               <div><button onClick ={sendMessage}>Send Message</button></div>
            </div>
        </div>
    );
}
export default Dialogs;