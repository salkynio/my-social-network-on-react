import React from 'react';
import  s from './Post.module.css'

const Post = (props) =>{
    return (  <div className={s.item}>
        <div><img  src='https://www.themarysue.com/wp-content/uploads/2022/12/Kate-Winslets-character-in-Avatar-The-Way-of-Water.jpg?fit=1400%2C700'/></div>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>


    </div>)
}
export default Post;