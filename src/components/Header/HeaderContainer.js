import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/reducers/authReducer';
import Header from './Header';
import { header } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        header().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);