import React from "react";
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Redirect} from "react-router";
import AddMessageFormRedux from "./AddMessageFormRedux/AddMessageFormRedux";


const Messages = (props) => {

    let state = props.messagesPage;
    let messagesDataElement = state.messages.map(d => <Message key={d.id} id={d.id} name={d.name}
                                                                   message={d.message}/>);
    let newMessageBody = state.messageBody;


    if (!props.isAuth) return <Redirect to={"/login"}/>;

    const submitMessage = (messageData) => {
       props.sendMessage(messageData.newMessageBody);
    }

    return (
        <div className={s.messages}>
            <div className={s.messagesItem}>
                <div>{messagesDataElement}</div>

            </div>
            <AddMessageFormRedux onSubmit={submitMessage} />
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