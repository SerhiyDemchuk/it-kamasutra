import React from 'react';
import styles from './Dialogues.module.scss';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem';
import { Redirect } from 'react-router-dom';
import { AddMessageReduxForm } from '../../reduxForm/forms';
import { initialStateType } from '../../redux/reducers/dialogueReducer';

type OwnPropsType = {
    dialoguePage: initialStateType
    sendMessage: (messageText: string) => void
};

export type NewMessageFormValuesType = {
    newMessageBody: string
};

const Dialogues: React.FC<OwnPropsType> = (props) => {

    let state = props.dialoguePage;

    let messageEls = state.messagesData.map(message => <Message message={message.message} key={message.id} />);
    let dialogsEls = state.dialogsData.map(dialog => <DialogueItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let addNewMessage = (value: NewMessageFormType) => {
        props.sendMessage(value.newMessageBody);
        value.newMessageBody = '';
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsEls}
            </div>
            <div className={styles.messages}>
                <div>{messageEls}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogues;