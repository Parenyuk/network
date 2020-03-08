import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile} >
            <img src="https://i.ytimg.com/vi/cq2Ef6rvL6g/maxresdefault.jpg" alt=""/>
            <div>ava+description</div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;