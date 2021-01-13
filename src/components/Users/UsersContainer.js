import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers } from '../../redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount } from '../../redux/reducers/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <div>
                { this.props.isFetching ? <Preloader /> : null }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    isAuth={this.props.isAuth}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

let AuthRedirectComponent = compose(
    connect(mapStateToProps, { follow, unfollow, requestUsers }),
    withAuthRedirect
)(UsersContainer)

export default AuthRedirectComponent;