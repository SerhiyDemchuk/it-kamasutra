import React from 'react';
import style from '../Dialogues.module.scss';
import { NavLink } from 'react-router-dom';

type PropsType = {
    name: string
    id: number
}

const DialogueItem: React.FC<PropsType> = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogueItem;