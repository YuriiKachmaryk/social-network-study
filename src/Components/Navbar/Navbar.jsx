import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
  <nav className={s.nav}>
    <div className={s.item} >
      <NavLink to="/profile" className = { NavActive => NavActive.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs/" className = { NavActive => NavActive.isActive ? s.active : s.item }>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" className = { NavActive => NavActive.isActive ? s.active : s.item }>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" className = { NavActive => NavActive.isActive ? s.active : s.item }>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings" className = { NavActive => NavActive.isActive ? s.active : s.item }>Settings</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/friends" className = { NavActive => NavActive.isActive ? s.active : s.item }>Friends</NavLink>
    </div>
  </nav>
  )
}
export default Navbar;