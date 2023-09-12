import React from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/imgs/logo.png';
import logout from '../../assets/imgs/logout.png';
import avatar from '../../assets/imgs/avatar.png';
import { useLocation, useNavigate } from 'react-router';
import ButtonCT from '../../components/button/ButtonCT';

export default function Header() {
    const navigate = useNavigate();
    const path = useLocation();

    return (
        <div className={classes.header}>
            <div>
                <img className={classes.header__logo} src={logo} width={80} alt="" />
            </div>
            <div>
                <ButtonCT outlineBtnBlue primary={path.pathname === '/'} medium onClick={() => navigate('/')}>
                    Hotline
                </ButtonCT>
                <ButtonCT
                    outlineBtnBlue
                    primary={path.pathname === '/geolocation'}
                    medium
                    onClick={() => navigate('/geolocation')}
                >
                    Geolocation
                </ButtonCT>
                <ButtonCT
                    outlineBtnBlue
                    primary={path.pathname === '/tracking'}
                    medium
                    onClick={() => navigate('/tracking')}
                >
                    Tracking
                </ButtonCT>
            </div>
            <div className={classes.header__info}>
                <div>
                    <h4>Trần Duy Khương</h4>
                    <p>Call center</p>
                </div>
                <img src={avatar} alt="" width={40} />
                <img
                    src={logout}
                    alt=""
                    width={30}
                    height={'100%'}
                    onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
}
