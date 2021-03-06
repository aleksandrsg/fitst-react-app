import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer.js'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

const Profile = (props) => {

    return (
      <div>
        <ProfileInfo />
        <MyPostsContainer store = {props.store}/>
      </div>
    );
}

export default Profile;