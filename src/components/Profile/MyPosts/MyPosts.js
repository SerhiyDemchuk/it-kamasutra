import React from 'react';
import { AddPostReduxForm } from '../../../reduxForm/forms';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = React.memo(props => {

    let postsEls = [...props.postsData].reverse().map(posts =>
        <Post
            name={posts.firstName}
            surname={posts.lastName}
            avatar={posts.avatar}
            key={posts.id}
            message={posts.post}
            like={posts.likesCount}
        />
    );

    let onAddPost = (value) => {
        props.addPost(value.myPostInput);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onAddPost} />
            </div>
            <div>
                <h3>New posts</h3>
            </div>
            <div className={s.posts}>
                {postsEls}
            </div>
        </div>
    )
});

export default MyPosts;