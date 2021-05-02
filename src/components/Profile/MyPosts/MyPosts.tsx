import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss';
import { AddPostReduxForm, AddPostFormValuesType } from '../../../reduxForm/forms';
import { PostType } from '../../../types/types';

export type MapPropsType = {
    postsData: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {

    let postsEls = [...props.postsData].reverse().map(posts =>
        <Post
            key={posts.id}
            message={posts.post}
            avatar={posts.avatar}
            name={posts.firstName}
            like={posts.likesCount}
            surname={posts.lastName}
        />
    );

    let onAddPost = (value: AddPostFormValuesType) => {
        props.addPost(value.newPostText);
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
};

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;