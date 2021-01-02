import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                    isAuth={this.props.isAuth}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let AuthRedirectComponent = compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    // withAuthRedirect
    )(ProfileContainer);

export default AuthRedirectComponent;
