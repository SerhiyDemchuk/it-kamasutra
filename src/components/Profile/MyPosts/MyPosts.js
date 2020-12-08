import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    // debugger;
    let newPost = React.createRef();

    let addPost = () => {
        props.store.addPost();
    }
    // debugger;
    let postsEls = props.store.profilePage.postsData.map(
        posts => <Post avatar={posts.avatar} message={posts.post} like={posts.likesCount} />
    );

    let onPostChange = () => {
        let text = newPost.current.value;
        props.store.updateNewPostText(text);
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
                    <button onClick={addPost}>Add post</button>
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