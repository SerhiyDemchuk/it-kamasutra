import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers } from '../../redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount } from '../../redux/reducers/usersSelectors';
import { userType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<userType>    
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    isFetching: boolean
    pageTitle: string
}

type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <div>
                <h2>{this.props.pageTitle}</h2>
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
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

let AuthRedirectComponent = compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, requestUsers }),
    withAuthRedirect
)(UsersContainer)

export default AuthRedirectComponent;