import React from "react";
import s from './LeftNavbar.module.css'
import {NavLink} from "react-router-dom";

const LeftNavbar = () => {
    return (
        <nav className={s.lnav} >
            <div><NavLink to="/profile" activeClassName={s.activeLink} >Profile</NavLink>  </div>
            <div><NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink></div>
            <div><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
            <div><NavLink to="/audio" activeClassName={s.activeLink}>Audio</NavLink></div>
            <div><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
        </nav>
    )
}
export default LeftNavbar;