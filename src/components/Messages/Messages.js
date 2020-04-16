import React from "react";
import s from './Messages.module.css';
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesPageReducer";





const Messages = (props) => {

    let state = props.messagesPage;

    let messagesDataElement = state.messagesData.map( d => <Message id={d.id} name={d.name} message={d.message} />);
    let newMessageBody = state.messageBody;



    let onSendMessageClick = () => {

    props.sendMessage();

}
    let onNewMessageChange = (e) => {
     let body =   e.target.value;
     props.store.dispatch( updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                <div>{messagesDataElement}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea> </div>
                <div><button onClick={onSendMessageClick} >Send</button></div>

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