import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo} >
            <img src="https://i.ytimg.com/vi/cq2Ef6rvL6g/maxresdefault.jpg" alt=""/>
            <div>ava+description</div>
        </div>
    )
}

export default ProfileInfo;