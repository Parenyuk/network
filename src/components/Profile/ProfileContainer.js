import React, {Component} from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfilePageReducer";
import {withRouter} from "react-router";
import {usersAPI} from "../../API/API";



 class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)