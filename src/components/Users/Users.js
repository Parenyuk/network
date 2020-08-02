import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";


let Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, users, portionSize, ...props}) => {


    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged} portionSize={portionSize} />
            {
                users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}/>)
            }
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged} portionSize={portionSize} />
        </div>
    )
}

export default Users;
