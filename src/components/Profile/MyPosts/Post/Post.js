import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.item}>
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