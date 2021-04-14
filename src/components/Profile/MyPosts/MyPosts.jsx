import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () =>{
    return(
          <div>
              My posts
              <div>
                New post
              </div>
              <div>
                Posts
              </div>
              <Post />
              <Post />
              <Post />
          </div>
    );
}

export default MyPosts;