import React from 'react';
import s from './Dialogues.module.scss';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/reducers/dialogueReducer';

const Dialogues = (props) => {

    let state = props.store.getState().dialoguePage;

    let messageEls = state.messagesData.map(
        message => <Message message={message.message} />
    );

    let dialogsEls = state.dialogsData.map(
        dialog => <DialogueItem name={dialog.name} id={dialog.id} />
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEls}
            </div>
            <div className={s.messages}>
                <div>{messageEls}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder='Enter your message'
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogues;