import React from "react";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesPageReducer";
import Messages from "./Messages";





const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body))
    }


    return (
       <Messages updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state} />
    )
}

export default MessagesContainer;
/*
Messages.propTypes = {
    name: PropTypes.string;
    messagesData: PropTypes.string;
};

 */