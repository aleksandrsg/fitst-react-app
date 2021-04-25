import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () =>{
    return(
          <div className={classes.postsBlock}>
              <h3>My posts</h3>
              <div>
                <textarea></textarea>
              </div>
              <div>
                <button>Add Post</button>
              </div>
              <div>
              <Post message = "Hi this is my first Props" likes="15" dislikes="1"/>
              <Post message = "I learn React.js" likes="100" dislikes="0"/>
              <Post />
              </div>
          </div>
    );
}

export default MyPosts;