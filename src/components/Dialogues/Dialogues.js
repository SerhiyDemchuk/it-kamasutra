import React from 'react';
import s from './Dialogues.module.scss';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem';
import { Redirect } from 'react-router-dom';

const Dialogues = (props) => {
    
    let state = props.dialoguePage;

    let messageEls = state.messagesData.map(
        message => <Message message={message.message} key={message.id} />
    );

    let dialogsEls = state.dialogsData.map(
        dialog => <DialogueItem name={dialog.name} key={dialog.id} id={dialog.id} />
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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