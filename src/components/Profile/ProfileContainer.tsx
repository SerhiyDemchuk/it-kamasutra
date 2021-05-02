import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Profile from './Profile';

import { AppStateType } from '../../redux/reduxStore';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/reducers/profileReducer';
import { ProfileType } from '../../types/types';
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    login: string
    status: string
    profile: ProfileType
    updateStatus: () => void
    savePhoto: () => Promise<any>
    saveProfile: () => Promise<any>
    getStatus: (number: number) => void
    getUserProfile: (number: number) => void
}
type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                // tood: may be replaced with Redirect??
                this.props.history.push('profile/13574');
            }
        }
        if (!userId) {
            console.error("ID should exist in URI params or in state ('authorizedUserID')");
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }


    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    login={this.props.login}
                    status={this.props.status}
                    profile={this.props.profile}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    login: state.auth.login
});

let AuthRedirectComponent = compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

export default AuthRedirectComponent;
