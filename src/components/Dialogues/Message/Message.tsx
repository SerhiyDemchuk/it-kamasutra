import React from 'react';
import style from '../Dialogues.module.scss';

type PropsType = {
    message: string
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Message;