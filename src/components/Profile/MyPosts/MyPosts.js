import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsEls = props.postsData.map(
        posts => <Post
            name={posts.firstName}
            surname={posts.lastName}
            avatar={posts.avatar}
            key={posts.id}
            message={posts.post}
            like={posts.likesCount}
        />
    );

    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPost}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                <h3>New posts</h3>
            </div>
            <div className={s.posts}>
                {postsEls}
            </div>
        </div>
    )
}

export default MyPosts;