import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        setTimeout(() => {
            this.props.getStatus(userId);
        }, 1000);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                    isAuth={this.props.isAuth}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    login={this.props.login}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

let AuthRedirectComponent = compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
    )(ProfileContainer);

export default AuthRedirectComponent;
