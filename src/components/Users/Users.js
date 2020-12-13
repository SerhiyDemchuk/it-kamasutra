import React from 'react';
import s from './Users.module.scss'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, followed: true, name: 'Owl', surname: 'Lee', avatar: 'https://bit.ly/3orDK1x', status: 'BLM!', location: {city: 'Los Angeles', country: 'USA'} },
                { id: 2, followed: false, name: 'Bark', surname: 'Woofson', avatar: 'https://bit.ly/36L1ibZ', status: 'On December 21st see you near monument', location: {city: 'Kyiv', country: 'Ukraine'} },
                { id: 3, followed: false, name: 'Woof', surname: 'Barkson', avatar: 'https://bit.ly/39Kx6iV', status: 'Come and visit me someday', location: {city: 'Ljubljana', country: 'Slovenia'} },
                { id: 4, followed: true, name: 'Lion', surname: 'Kingston', avatar: 'https://bit.ly/3lQ9hsd', status: 'One more time, bend your knees, bitch', location: {city: 'London', country: 'UK'} },
            ]
        )
    }

    let onFollow = (user) => {
        props.follow(user);
    };

    let onUnfollow = (user) => {
        props.unfollow(user);
    };

    return (
        <div className={s.item}>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.avatar} alt="" />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => onUnfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => onFollow(user.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name} {user.surname}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                    <div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;