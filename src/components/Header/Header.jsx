import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/564x/d1/c0/5b/d1c05bdf98bb225b3c98f5862ad3ed02.jpg'/>
        <div className={s.loginBLock}>
            {props.isAuth ?
                <div>{props.login}  <button onClick={props.logout}>Log out</button></div>:
                <NavLink className={s.link} to={'/Login'}>Login</NavLink>}
        </div>
    </header>

};

export default Header;
