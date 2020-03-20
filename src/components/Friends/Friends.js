import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
        let friendsDataElement = props.state.friendData.map(d => <Friend id={d.id}  />)
    return (
        <div className={s.friends}>
            {friendsDataElement}
            <div>View all (45)</div>
        </div>
    )
}
export default Friends;