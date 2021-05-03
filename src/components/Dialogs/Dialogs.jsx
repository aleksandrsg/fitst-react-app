import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogItem.jsx'
import Message from './Messeges/Messege.jsx'

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name:'Olga'},
        {id: 2, name:'Alex'},
        {id: 3, name:'Leo'},
        {id: 4, name:'Lada'},
        {id: 5, name:'Anna'}
    ]
    
    let messages = [
        {id:1, message:"Hi"},
        {id:2, message:"How are you?"},
        {id:3, message:"Well!"},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map( m => <Message message={m.message}/>)

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