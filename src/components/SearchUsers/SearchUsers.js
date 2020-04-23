import React from "react";
import s from './Search.module.css';
import {NavLink} from "react-router-dom";


const SearchUsers = (props) => {

    return (
        <div className={s.friend}>
                <div><NavLink to={`/SearchUsers/${props.id}`}>Search Users!!! </NavLink> </div>
            </div>
    )
}
export default SearchUsers;