import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={s.header}>
            {/* <img src="https://www.uokpl.rs/fpng/f/80-804768_owl-vector-logo.png" alt=""/> */}

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;