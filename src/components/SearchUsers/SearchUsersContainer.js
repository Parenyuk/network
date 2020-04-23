import React from "react";
import {connect} from "react-redux";
import SearchUsers from "./SearchUsers";



const mapStateToProps = (state) => {
    return {
        users: state.searchusers .users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Follow: (usersId) => {
            dispatch(followAC(userId));
        },
        Unfollow: (usersId) => {
            dispatch(unfollowAC(userId));
        }

        SetUsers: (usersId) => {
            dispatch(setUsersAC(userId));
        }
}
const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps )(SearchUsers);

export default SearchUsersContainer;

