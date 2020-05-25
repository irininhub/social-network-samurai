import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = () => {
    return <nav className={s.nav}> 
    <div  className ={s.item}>    
      <NavLink to = "/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    {/* Ниже мы используем 2 класса для css. Если бы класс использзовался 
    глобально для всего дока, было бы classMame = "item active"  {'${s.item} ${s.active}'}  */}
    <div className ={s.item}>
      <NavLink to = "/dialogs" activeClassName={s.active}>Messages</NavLink>
    </div>
        <div className ={s.item}>
            <NavLink to = "/users" activeClassName={s.active}>Users</NavLink>
        </div>
    <div className ={s.item}>
    <NavLink to = "/news" activeClassName={s.active}>News</NavLink>
    </div>
    <div className ={s.item}>
      <NavLink to = "/music" activeClassName={s.active}>Music</NavLink>
    </div>
    <div className ={s.item}>
      <NavLink to = "/settings" activeClassName={s.active}>Settings</NavLink>
    </div>
        <div className = {s.item}>
            <NavLink to = "/friends" activeClassName={s.active}><Friends/></NavLink>

        </div>
    </nav>
}


export default Navbar;