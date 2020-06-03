import React from "react";
// import PropTypes from 'prop-types';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
           dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: (body) => {
            dispatch(sendMessageCreator());
        }
    }
}





export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Messages);





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