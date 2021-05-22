import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, subscribe, updateNewPostText} from './redux/state.js'
import state from './redux/state.js'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = { state } addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  }

rerenderEntireTree(state);

subscribe(rerenderEntireTree);