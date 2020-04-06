import React from "react";
import s from './Messages.module.css';
import Message from "./Message/Message";
import PropTypes from 'prop-types';



const Messages = (props) => {

    let messagesDataElement = props.state.messagesData.map( d => <Message id={d.id} name={d.name} message={d.message} />)

    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                {messagesDataElement}
            </div>
        </div>
    )
}

export default Messages;
/*
Messages.propTypes = {
    name: PropTypes.string;
    messagesData: PropTypes.string;
};

 */