import React from "react";
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";


const Message = (props) => {

    return (
        <div className={s.message}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
            <div className={s.head}>
                <div className={s.userName}><NavLink to={`/message/${props.id}`}>{props.name}</NavLink> </div>
                <div className={s.text}>{props.message}</div>
            </div>
        </div>
    )
}
export default Message;