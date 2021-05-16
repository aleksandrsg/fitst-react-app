import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message = {p.message} likes={p.likes} dislikes={p.dislikes}/>)
    
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value ='';
    }
    
    let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

    return(
          <div className={classes.postsBlock}>
              <h3>My posts</h3>
              <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
              </div>
              <div>
                <button onClick = { addPost }>Add Post</button>
              </div>
              <div>
              {postsElements}
              </div>
          </div>
    );
}

export default MyPosts;