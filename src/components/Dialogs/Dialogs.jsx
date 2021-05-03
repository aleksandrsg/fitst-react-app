import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem.jsx'
import Message from './Messeges/Messege.jsx'

const Dialogs = (props) => {

   
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map( m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div> 
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;