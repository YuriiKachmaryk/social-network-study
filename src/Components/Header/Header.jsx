import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://geeksprep.com/wp-content/uploads/2021/06/javascrip.jpg' alt='Logo' />
    </header>;
}

export default Header;