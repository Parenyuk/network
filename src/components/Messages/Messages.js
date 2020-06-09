import React from "react";
import s from './Messages.module.css';
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from 'redux-form'

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

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'AddMessageForm'
})(AddMessageForm)

export default Messages;
/*
Messages.propTypes = {
    name: PropTypes.string;
    messagesData: PropTypes.string;
};

 */