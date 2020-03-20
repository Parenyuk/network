import React from "react";
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";


const Friend = (props) => {

    return (
        <div className={s.friend}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
            <div>
                <div><NavLink to={`/friend/${props.id}`}>{props.name}</NavLink> </div>
            </div>
        </div>
    )
}
export default Friend;