import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) =>{

    let posts = [
      {id:1, message:"Hi this is my first Props", likes:15, dislikes:100},
      {id:2, message:"I learn React.js", likes:100, dislikes:0},
      {id:3, message:"Use .MAP method", likes:20, dislikes:2},
    ]

    let postsElements = posts.map( p => <Post message = {p.message} likes={p.likes} dislikes={p.dislikes}/>)
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
              {postsElements}
              </div>
          </div>
    );
}

export default MyPosts;