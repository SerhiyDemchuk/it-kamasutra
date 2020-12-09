import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/reducers/profileReducer';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let postsEls = props.postsData.map(
        posts => <Post avatar={posts.avatar} message={posts.post} like={posts.likesCount} />
    );

    let onPostChange = () => {
        let text = newPost.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
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