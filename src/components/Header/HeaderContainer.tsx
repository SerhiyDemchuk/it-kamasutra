import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { MapPropsType, DispatchPropsType } from './Header'
import { AppStateType } from '../../redux/reduxStore';
import { logout } from '../../redux/reducers/authReducer';


class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect<MapPropsType, MapPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer);