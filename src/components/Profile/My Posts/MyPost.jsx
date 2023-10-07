import React, {createRef} from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {type} from "@testing-library/user-event/dist/type";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reduce";

const MyPost = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef(); // создаем ссылку

    let addPost = () => {
        // let text = newPostElement.current.value; //в ссылку засовываем текст // нету смысла брать отсюда значение
        props.dispatch(addPostActionCreator());
        // props.updateNewTextPost(' ');

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.myPost}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>

            {postsElements}

        </div>)
}
export default MyPost;