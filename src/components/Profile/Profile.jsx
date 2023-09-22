import React from 'react';
import  s from './Profile.module.css'
import MyPost from "./My Posts/MyPost";
import ProfileInfo from "./ProfileInfo/PfofileInfo";

const Profile = (props) =>{
    // const messagesPost = [
    //      {id:1, message: 'Hi,how are you?', likesCount:23},
    //      {id:2, message: "It's my first post." , likesCount:3}
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts} addPost={props.addPost}/>
        </div>)
}
export default Profile;