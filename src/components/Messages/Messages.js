import React from "react";
import s from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {

    let messagesDataElement = props.messagesData.map( d => <Message id={d.id} name={d.name} message={d.message} />)

    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                {messagesDataElement}
            </div>
        </div>
    )
}

export default Messages;