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

    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                <Message id={messagesData[0].id} name = {messagesData[0].name} message={messagesData[0].message} />
                <Message id={messagesData[1].id} name = {messagesData[1].name} message={messagesData[1].message}/>
                <Message id={messagesData[2].id} name = {messagesData[2].name} message={messagesData[2].message} />
                <Message id={messagesData[3].id} name = {messagesData[3].name} message={messagesData[3].message}/>
                <Message id={messagesData[4].id} name = {messagesData[4].name} message={messagesData[4].message}/>
            </div>
        </div>
    )
}

export default Messages;