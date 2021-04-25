import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) =>{
    let path = '/dialogs/'+ props.id;
    return (
        <div className={classes.dialog +' '+ classes.active}> 
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    )
}

const Message =(props) =>{
    return (
        <div className={classes.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name:'Olga'},
        {id: 2, name:'Alex'},
        {id: 3, name:'Leo'},
        {id: 4, name:'Lada'},
        {id: 5, name:'Anna'}
    ]

    let messagesData = [
        {id:1, message:"Hi"},
        {id:2, message:"How are you?"},
        {id:3, message:"Well!"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div> 
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
}
export default Dialogs;