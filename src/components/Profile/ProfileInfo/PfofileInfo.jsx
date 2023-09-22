import React from 'react';
import  s from './ProfileInfo.module.css'
const ProfileInfo = () =>{
    return (
        <div >
            <div>
                <img  className={s.img} src='https://images.unsplash.com/photo-1692643667753-563480a3e952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
            </div>
            <div className={s.profileInfo}>Ava+description</div>
        </div>)
}
export default ProfileInfo;