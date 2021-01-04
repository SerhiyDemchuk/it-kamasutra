import React from 'react';
import s from './Dialogues.module.scss';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem';
import { Redirect } from 'react-router-dom';
import { AddMessageReduxForm } from '../../reduxForm/forms';

const Dialogues = (props) => {

    let state = props.dialoguePage;

    let messageEls = state.messagesData.map(message => <Message message={message.message} key={message.id} />);
    let dialogsEls = state.dialogsData.map(dialog => <DialogueItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
        value.newMessageBody = '';
    }

    if (props.isAuth === false) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEls}
            </div>
            <div className={s.messages}>
                <div>{messageEls}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogues;