import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New posts
            </div>
            <div className={s.posts}>
                <Post message='Proud to be US" symbol!' like='20'/>
                <Post message='Hey buddy, how are you doing?' like='2'/>
                <Post message='Just watched The Rise of Planet of Apes, did you cast there?' like='73'/>
                {/* <div className={s.item}>
                    <img src="https://i2-prod.crewechronicle.co.uk/incoming/article16583395.ece/ALTERNATES/s1200c/0_Lions-6.jpg"/>
                    post 2
                </div> */}
            </div>
        </div>
    )
}

export default MyPosts;