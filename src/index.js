import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message:"Hi this is my first Props", likes:15, dislikes:100},
  {id:2, message:"I learn React.js", likes:100, dislikes:0},
  {id:3, message:"Use .MAP method", likes:20, dislikes:2},
]

let dialogs = [
  {id: 1, name:'Olga'},
  {id: 2, name:'Alex'},
  {id: 3, name:'Leo'},
  {id: 4, name:'Lada'},
  {id: 5, name:'Anna'}
]

let messages = [
  {id:1, message:"Hi"},
  {id:2, message:"How are you?"},
  {id:3, message:"Well!"},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts = { posts } dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
