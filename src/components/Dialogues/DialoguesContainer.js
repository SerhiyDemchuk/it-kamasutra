import Dialogues from './Dialogues';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/reducers/dialogueReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialoguePage: state.dialoguePage
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

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;