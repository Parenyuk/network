import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {savePhoto} from "../../redux/ProfilePageReducer";

const Profile = (props) => {
    return (

        <div className={s.profile}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile;

// <div className={s.profile}>
//     <ProfileInfo/>
//     <MyPostsContainer store={props.store}/>
// </div>
