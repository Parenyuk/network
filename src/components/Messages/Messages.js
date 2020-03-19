import React from "react";
import s from './Messages.module.css';
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


const Messages = () => {
    const messagesData = [
        {id: 1, name: 'Victor', message:`Hi`},
        {id: 2, name: 'Vasia Pypkin', message: `kyky`},
        {id: 3, name: 'Zinedin Zidan', message: `Hello`},
        {id: 4, name: 'Ronaldo', message: `Hello`},
        {id: 5, name: 'Vasia Pypkin', message: `Hello`},
    ]
    let messagesDataElement = messagesData.map( d => <Message id={d.id} name={d.name} message={d.message} />)

    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                {messagesDataElement}
            </div>
        </div>
    )
}

export default Messages;