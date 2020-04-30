import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <header className={s.logo}>
                <img src="https://www.smartbonny.com/wp-content/uploads/2019/05/551103-1TOqFD1502285018.jpg" />
            </header>
            <div className={s.welcome}> Добро пожаловать на мой первый сайт!!!</div>
        </div>
    )
}
export default Header;