import React from "react";
import s from './LeftNavbar.module.css'

const LeftNavbar = () => {
    return (
        <nav className={s.lnav} >
            <div><a href="/profile">Profile</a></div>
            <div><a href="/messages">Messages</a></div>
            <div><a href="/news">News</a></div>
            <div><a href="/audio">Audio</a></div>
            <div><a href="/settings">Settings</a></div>
        </nav>
    )
}
export default LeftNavbar;