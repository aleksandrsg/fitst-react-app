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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name='Olga' id='1'/>
                <DialogItem name='Aleks' id='2'/>
                <DialogItem name='Leo' id='3'/>
            </div> 
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Well!"/>
            </div>
        </div>
    );
}
export default Dialogs;