import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return(
        <div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg" alt=""/>
          </div>
          
          <div className={classes.descriptionBlock}>
            <img className={classes.avatar} src="https://cdn.arstechnica.net/wp-content/uploads/2014/04/2014-01-28_00-19-14-640x363.png" alt="Avatar"/>
            Avatar +Desc
          </div>
      </div>
    );
}

export default ProfileInfo;