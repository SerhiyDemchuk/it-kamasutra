import React from 'react';
import style from './Post.module.scss';

type PropsType = {
    avatar: string
    name: string
    surname: string
    message: string
    like: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={style.item}>
            <img src={props.avatar} alt=""/>
                {props.name} {props.surname}
                <br/>
                <span>{props.message}</span>
            <div>
                <span>like: {props.like}</span>
            </div>
        </div>
    )
}

export default Post;