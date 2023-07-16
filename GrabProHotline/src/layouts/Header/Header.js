import React from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/imgs/logo.png';
import logout from '../../assets/imgs/logout.png';
import avatar from '../../assets/imgs/avatar.png';

export default function Header() {
    return (
        <div className={classes.header}>
            <div>
                <img className={classes.header__logo} src={logo} width={80} alt="" />
            </div>
            <div className={classes.header__info}>
                <div>
                    <h4>Trần Duy Khương</h4>
                    <p>Call center</p>
                </div>
                <img src={avatar} alt="" width={40} />
                <img src={logout} alt="" width={30} height={'100%'} />
            </div>
        </div>
    );
}
