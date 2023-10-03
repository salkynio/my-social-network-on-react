import React from 'react';
import  s from './Profile.module.css'
import MyPost from "./My Posts/MyPost";
import ProfileInfo from "./ProfileInfo/PfofileInfo";

const Profile = (props) =>{
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText = {props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>)
}
export default Profile;