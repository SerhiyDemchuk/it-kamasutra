import React from 'react';
import Dialogues from './Dialogues';
import { actions } from '../../redux/reducers/dialogueReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';

const mapStateToProps = (state: AppStateType) => {
    return {
        dialoguePage: state.dialoguePage,
    }
}

let DialoguesContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogues);

export default DialoguesContainer;