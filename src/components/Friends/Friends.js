import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import {connect} from "react-redux";


const Friends = (props) => {
    debugger;

    let friendsDataElement = props.friendData.map(d => <Friend id={d.id}  />)
    return (
        <div className={s.friends}>
            {friendsDataElement}
            <div>View all (45)</div>
        </div>
    )
}

const mstp = (state) => {
    debugger
    return {
        friendData: state.friendsPage.friendData
    }
}

export default connect(mstp)(Friends);