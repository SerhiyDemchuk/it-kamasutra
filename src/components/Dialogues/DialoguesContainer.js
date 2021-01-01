import React from 'react';
import Dialogues from './Dialogues';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/reducers/dialogueReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialoguePage: state.dialoguePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }   
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogues);

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialoguesContainer;