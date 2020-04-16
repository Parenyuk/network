import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}

export default Profile;

// <div className={s.profile}>
//     <ProfileInfo/>
//     <MyPostsContainer store={props.store}/>
// </div>
