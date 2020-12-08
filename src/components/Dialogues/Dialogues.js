import React from 'react';
import s from './Dialogues.module.scss';
import Message from './Message/Message';
import DialogueItem from './DialogueItem/DialogueItem'

const Dialogues = (props) => {
    let messageEls = props.state.messagesData.map(
        message => <Message message={message.message} />
      );
      
      let dialogsEls = props.state.dialogsData.map(
        dialog => <DialogueItem name={dialog.name} id={dialog.id} />
      );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEls}
            </div>
            <div className={s.messages}>
                {messageEls}
            </div>
        </div>
    )
}

export default Dialogues;