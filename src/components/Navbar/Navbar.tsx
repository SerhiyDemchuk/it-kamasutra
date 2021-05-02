import React from 'react';
import c from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogues">Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;