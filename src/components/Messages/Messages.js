import React from "react";
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Redirect} from "react-router";

const Messages = (props) => {

    let state = props.messagesPage;

    let messagesDataElement = state.messagesData.map( d => <Message key={d.id} id={d.id} name={d.name} message={d.message} />);
    let newMessageBody = state.messageBody;



    let onSendMessageClick = () => {
    props.sendMessage();

}
    let onNewMessageChange = (e) => {
     let body =   e.target.value;
     props.updateNewMessageBody(body)
    }


    if (!props.isAuth) return <Redirect to={"/login"} /> ;
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