import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import classes from './Header.module.scss';
import Rose from '../../assets/imgs/Rose.jpg';

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img src={Rose} />
            </div>

            <div className={classes.header__right}>
                <div className={classes['header__right--info']}>
                    <div className={classes['header__right--info-content']}>
                        <p>Trần Duy Khương</p>
                        <span>Admin</span>
                    </div>
                    <div className={classes['header__right--info-img']}>
                        <img src={Rose} />
                    </div>
                </div>

                <FontAwesomeIcon icon={faRightFromBracket} className={classes['header__right--logout']}/>
            </div>
        </div>
    );
};

export default Header;
