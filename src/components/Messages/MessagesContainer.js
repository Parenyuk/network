import React from "react";
import {sendMessageCreator} from "../../redux/MessagesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,

    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Messages);


/*
Messages.propTypes = {
    name: PropTypes.string;
    messagesData: PropTypes.string;
};

 */