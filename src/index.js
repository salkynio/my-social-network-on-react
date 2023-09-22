import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from "./Redux/state";

let posts = [
    {id:1, message: 'Hi,how are you?', likesCount:23},
    {id:2, message: "It's my first post." , likesCount:3}
]
let dialogs = [
    {id:1, name:'Salkyn'},
    {id:2, name:'Tolkun'},
    {id:3, name:'Beksultan'},
    {id:4, name:'Samat'},
    {id:5, name:'Medet'}
]
let messages=[
    {id:1, message : 'Hi'},
    {id:2, message : 'How is your IT- kamasutra'},
    {id:3, message : 'Yo'}
]
const addPost = (postMessage)=> {
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    posts.push(newPost)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} addPost={addPost}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
