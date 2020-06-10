import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="https://image.freepik.com/free-vector/ag-free-logo-design_8035-1.jpg" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>

                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;