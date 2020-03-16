import React from "react";
import s from './Messeges.module.css';
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


const Messeges = () => {
    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                <Message name={'Victor'} id={1} message={`Hi`} />
                <Message name={'Vasia Pypkin'} id={2} message={`kyky`}/>
                <Message name={'Zinedin Zidan'} id={3} message={`Hello`} />
                <Message name={'Ronaldo'} id={4} message={`Hello`}/>
                <Message name={'Messi'} id={5} message={`Hello`}/>
            </div>
        </div>
    )
}

export default Messeges;