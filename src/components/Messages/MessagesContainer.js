import React from "react";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesPageReducer";
import Messages from "./Messages";
import {connect, mapStateToProps, mapStateToProps} from "react-redux";



const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;


//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().messagesPage;
//
//                     let onSendMessageClick = () => {
//
//                         store.dispatch(sendMessageCreator());
//                     }
//                     let onNewMessageChange = (body) => {
//                         store.dispatch( updateNewMessageBodyCreator(body))
//                     }
//
//                     return <Messages updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                                      messagesPage={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }


/*
Messages.propTypes = {
    name: PropTypes.string;
    messagesData: PropTypes.string;
};

 */