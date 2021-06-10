import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js'
import MyPosts from './MyPosts.jsx'

// 
const MyPostsContainer = (props) => {

    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    
    let onPostChange = (newText) =>{
        let action = updateNewPostTextActionCreator(newText);
        props.store.dispatch(action);
    }

    return(
          <MyPosts onPostChange={onPostChange} addPost={addPost} 
          posts ={state.profilePage.posts} newPostText={state.profilePage.newPostText}/> 
    );
}

export default MyPostsContainer;