import React from 'react';
import s from '../Dialogues.module.scss';
import { NavLink } from 'react-router-dom';

const DialogueItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogues/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogueItem;