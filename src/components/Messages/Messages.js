import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                <div className={s.userName}><NavLink to={`/message/${props.id}`}>{props.name}</NavLink> </div>
            </div>
        </div>
    )
}
const Message = (props) => {
    return <div className={s.text}>{props.message}</div>
}

const Messages = (props) => {

    let dialogsData = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Vasia Pypkin'},
        {id: 3, name: 'Zinedin Zidan'},
        {id: 4, name: 'Ronaldo'},
        {id: 5, name: 'Vasia Pypkin'},
        {id: 6, name: 'Messiii'},
        {id: 7, name: 'Petr'}
    ]

    let messagesData = [
        {id: 1,  message:`Hi`},
        {id: 2,  message: `kyky`},
        {id: 3,  message: `Hello`},
        {id: 4,  message: `Hello`},
        {id: 5,  message: `Hello`},
        {id: 6,  message: `The ejkgje`},
    ]
    let dialogsDataElement = dialogsData.map(d => <DialogsItem id={d.id} name={d.name}  />)
    let messagesDataElement = messagesData.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.message}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
            <div className={s.head}>
                <div>{dialogsDataElement}</div>
                <div>{messagesDataElement}</div>


            </div>
        </div>
    )
}



export default Messages;