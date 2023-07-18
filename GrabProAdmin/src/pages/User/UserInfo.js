import React, { useEffect, useState } from 'react';
import classes from './UserInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
    faStar as star,
  } from '@fortawesome/free-regular-svg-icons';
import Rose from '../../assets/imgs/Rose.jpg';

const UserInfo = ({isOpen, content}) => {
  const [contentRender, setContentRender] = useState({
    id: '',
    image: '',
    name: '',
    phone: '',
    address: '',
    star: 0,
    history: [],
    status: ''
  });

  useEffect(() => {
    if (content !== undefined) {
        setContentRender(content);
    }
  }, [content])

  return (
    <div className={classes.user__info} style={{width: isOpen ? '35%' : '0', padding: isOpen ? '2rem' : '0'}}>
    <div className={classes['user__info--header']}>
      <p>{contentRender.id}</p>
      <p style={{backgroundColor:
                    contentRender.status === 'Khóa'
                    ? '#da8d8d'
                    : contentRender.status === 'Hoạt động'
                    ? '#99E0B9'
                    : 'black',
                color:
                    contentRender.status === 'Khóa'
                    ? '#FF2F2F'
                    : contentRender.status === 'Hoạt động'
                    ? '#00B14F'
                    : 'black'}}
        >{contentRender.status}</p>
    </div>

    <div className={classes['user__info--detail']}>
      <div className={classes['user__info--detail-wrapper']}>
        <div className={classes['user__info--detail-img']}>
          <img src={contentRender.image} />
        </div>

        <div className={classes['user__info--detail-content']}>
          <div className={classes['user__info--detail-content-left']}>
            <p>{contentRender.name}</p>
            <span>{contentRender.phone}</span>
            <h6>135B Trần Hưng Đạo, phường Cầu Ông Lãnh, Quận 1, TPHCM</h6>
          </div>

          <div className={classes['user__info--detail-content-right']}>
              {Array.from({ length: contentRender.star }).map(index => <FontAwesomeIcon icon={faStar} key={+index} className={classes['user__info--detail-content-right-ic']}/>)}
          </div>
        </div>
      </div>
    </div>

    <div className={classes['user__info--history']}>
      <h4>Lịch sử đơn hàng</h4>
      <div className={classes['user__info--history-list']} style={{backgroundColor: 'rgba(243, 243, 243, 0.95)', borderRadius: '6px', padding: '1rem 2rem', marginBottom: '1.8rem'}}>
        {contentRender.history !== undefined ? contentRender.history.map((item, idx) => (
          <div className={classes['user__info--history-row']}>
            <p>{item.time}</p>
            <h6>{item.location}</h6>
            <h7>{item.stt}</h7>
          </div>
        )) : ''}
      </div>
    </div>

    <div className={classes['user__info--destroy']}>
      <button>{contentRender.status === 'Khóa' ? 'Mở khóa' : 'Khóa'}</button>
      <button>Xóa Tài Khoản</button>
    </div>
  </div>
  );
};

export default UserInfo;
