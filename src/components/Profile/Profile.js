import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile} >
            <img src="https://i.ytimg.com/vi/cq2Ef6rvL6g/maxresdefault.jpg" alt=""/>
            <div>ava+description</div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;