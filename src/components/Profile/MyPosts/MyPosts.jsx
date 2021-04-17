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
              <Post message = "Hi this is my first Props" likes="15" dislikes="1"/>
              <Post message = "I learn React.js" likes="100" dislikes="0"/>
              <Post />
          </div>
    );
}

export default MyPosts;