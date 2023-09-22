import React, {createRef} from 'react';
import  s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) =>{
    let newPostElement = React.createRef(); // создаем ссылку
    let addPost = () =>{
       let text = newPostElement.current.value; //в ссылку засовываем текст
       props.addPost(text)
    }
    let messagesElements = props.posts.map(p=><Post message = {p.message} likesCount = {p.likesCount}/>)
    return (  <div className={s.myPost}>
               <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}> </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>

        {messagesElements}

            </div>)
}
export default MyPost;