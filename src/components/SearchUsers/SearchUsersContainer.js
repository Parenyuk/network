import React from "react";
import {connect} from "react-redux";
import SearchUsers from "./SearchUsers";



const mapStateToProps = (state) => {
    return {
        users: state.searchUsers.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(userId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(user));
        }
}
const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps )(SearchUsers);

export default SearchUsersContainer;

