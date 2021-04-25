import React from 'react';
import Dialogues from './Dialogues';
import { actions } from '../../redux/reducers/dialogueReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialoguePage: state.dialoguePage,
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (newMessageBody) => {
        dispatch(actions.sendMessageCreator(newMessageBody));
    }
})

let DialoguesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogues);

export default DialoguesContainer;