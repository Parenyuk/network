import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div className={s.profileInfo} >
            {/*<img src="https://i.ytimg.com/vi/cq2Ef6rvL6g/maxresdefault.jpg" alt=""/>*/}
            <div className={s.prof}>
                <img src={props.profile.photos.large} className={s.profileImg}/>
                <ProfileStatus status='Hello' />
            </div>
        </div>
    )
}

export default ProfileInfo;