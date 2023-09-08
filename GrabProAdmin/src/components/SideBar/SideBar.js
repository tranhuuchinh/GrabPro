import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faHome, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import classes from './SideBar.module.scss';
import Rose from '../../assets/imgs/Rose.jpg';

const SideBar = () => {
    const [moveTab, setMoveTab] = useState('Dashboard');
    const navigation = useNavigate();

    const handleTab = (e) => {
        console.log(e.target);
        if (e.target.innerHTML === 'Dashboard'){
            setMoveTab('Dashboard');
        }
        else if (e.target.innerHTML === 'Invoice'){
            setMoveTab('Invoice');
        }
        else{
            setMoveTab('User');
        } 
    };

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__wrapper} onClick={() => {setMoveTab('Dashboard'); navigation('/home')}}>
                <FontAwesomeIcon icon={faHome} className={`${classes['sidebar__wrapper--ic']} ${moveTab === 'Dashboard' ? classes.active : ''}`}/>
                <p style={{color: moveTab === 'Dashboard' ? '#5FCCFF' : ''}}>Dashboard</p>
            </div>

            <div className={classes.sidebar__wrapper} onClick={() => {setMoveTab('Invoice'); navigation('/invoice')}}>
                <FontAwesomeIcon icon={faFileInvoice} className={`${classes['sidebar__wrapper--ic']} ${moveTab === 'Invoice' ? classes.active : ''}`}/>
                <p style={{color: moveTab === 'Invoice' ? '#5FCCFF' : ''}}>Invoice</p>
            </div>

            <div className={classes.sidebar__wrapper} onClick={() => {setMoveTab('User'); navigation('/user')}}>
                <FontAwesomeIcon icon={faUser} className={`${classes['sidebar__wrapper--ic']} ${moveTab === 'User' ? classes.active : ''}`}/>
                <p style={{color: moveTab === 'User' ? '#5FCCFF' : ''}}>User</p>
            </div>
        </div>
    );
};

export default SideBar;
