import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";


let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {


    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {
                users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}/>)
            }
        </div>
    )
}

export default Users;