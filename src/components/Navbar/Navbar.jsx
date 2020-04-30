import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from '../Friends/Friendsbar';
import FriendsBarContainer from '../Friends/FriendsbarContainer';


const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>Профиль</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='dialogs' activeClassName={s.active}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.active}>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName={s.active}>Музыка</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.active}>Настройки</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to='friends' activeClassName={s.active}> Друзья (56) </NavLink>
      </div>
      <div className={s.fbar}>
      <FriendsBarContainer/>
      </div>
    </nav>
   
  )
}
export default Navbar;