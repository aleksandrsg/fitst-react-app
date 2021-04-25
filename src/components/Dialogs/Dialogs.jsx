import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog +' '+ classes.active}> 
                    <NavLink to="/dialogs/1">Olga</NavLink>
                </div>
                <div className={classes.dialog}> 
                <NavLink to="/dialogs/2">Aleks</NavLink>
                </div>
                <div className={classes.dialog}> 
                <NavLink to="/dialogs/3">Leo</NavLink>
                </div>
            </div> 
            <div className={classes.messages}>
                <div className={classes.message}>
                    Message 1
                </div>
                <div className={classes.message}>
                    Message 2
                </div>
                <div className={classes.message}>
                    Message 3
                </div>
            </div>
        </div>
    );
}
export default Dialogs;