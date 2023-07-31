import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './FrameAuth.module.scss';
import logo from '../../../assets/imgs/Rose.jpg';

const FrameAuth = (props) => (
    <div className={classes.frame}>
      <Link to="/">
        <FontAwesomeIcon className={classes.frame__iconBack} icon={faArrowLeft} />
      </Link>
      <div className={classes.frame__content}>
        <div className={classes['frame__content-logo']}>
          <img src={logo} alt="logo" />
        </div>
        <span className={classes.frame__line} />
        <div className={classes['frame__content-form']}>
          {props.children}
        </div>
      </div>
    </div>
);

FrameAuth.propTypes = {
  children: PropTypes.element
};

FrameAuth.defaultProps = {
  children: null
};

export default FrameAuth;
