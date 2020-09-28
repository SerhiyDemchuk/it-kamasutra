import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/animals/5-reasons/5-reasons-eagle.adapt.1900.1.jpg" />
                {props.message}
            <div>
                <span>like: {props.like}</span>
            </div>
        </div>
    )
}

export default Post;