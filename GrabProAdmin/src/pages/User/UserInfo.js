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
import { axiosClient } from '../../api/axios';

const UserInfo = ({isOpen, content, type}) => {
  const [contentRender, setContentRender] = useState({
    id: '',
    code: '',
    name: '',
    phone: '',
    location: '',
    star: 0,
    listHistoryOrder: [],
    type: ''
  });
  const [idAccount, setIdAccount] = useState('');

  console.log(type);

  useEffect(() => {
    if (content !== undefined) {
        setContentRender(content);
    }
  }, [content])

  const handleDeleteAccount = (id) => {
    setIdAccount(id);
  } 

  useEffect(() => {
    if (idAccount !== '') {
      axiosClient.delete(`/user/${idAccount}?type=${type}`, {}).then((res) => {
        if (res) {
          window.location.reload();
        }
      });
    }
  }, [idAccount])

  return (
    <div className={classes.user__info} style={{width: isOpen ? '35%' : '0', padding: isOpen ? '2rem' : '0'}}>
    <div className={classes['user__info--header']}>
      <p>{contentRender.code}</p>
      <p style={{backgroundColor:
                    contentRender.status === 'Khóa'
                    ? '#da8d8d'
                    : 'Hoạt động'
                    ? '#99E0B9'
                    : 'black',
                color:
                    contentRender.status === 'Khóa'
                    ? '#FF2F2F'
                    : 'Hoạt động'
                    ? '#00B14F'
                    : 'black'}}
        >Hoạt động</p>
    </div>

    <div className={classes['user__info--detail']}>
      <div className={classes['user__info--detail-wrapper']}>
        {/* <div className={classes['user__info--detail-img']}>
          <img src={contentRender.image} />
        </div> */}

        <div className={classes['user__info--detail-content']}>
          <div className={classes['user__info--detail-content-left']} style={{width: contentRender.star === 0 && '100%'}}>
            <p>{contentRender.name}</p>
            <span>{contentRender.phone}</span>
            <h6>{contentRender.location}</h6>
          </div>

          <div className={classes['user__info--detail-content-right']}>
              {Array.from({ length: contentRender.star }).map(index => <FontAwesomeIcon icon={faStar} key={+index} className={classes['user__info--detail-content-right-ic']}/>)}
          </div>
        </div>
      </div>
    </div>

    <div className={classes['user__info--history']} style={{display: contentRender.type === 'Staff' && 'none'}}>
      <h4>Lịch sử đơn hàng</h4>
      <div className={classes['user__info--history-list']} style={{backgroundColor: 'rgba(243, 243, 243, 0.95)', borderRadius: '6px', padding: '1rem 2rem', marginBottom: '1.8rem'}}>
        {contentRender.listHistoryOrder !== undefined ? contentRender.listHistoryOrder.map((item, idx) => (
          <div className={classes['user__info--history-row']}>
            <p>{item.time}</p>
            <h6>{item.location}</h6>
            <h7>{item.stt}</h7>
          </div>
        )) : ''}
      </div>
    </div>

    <div className={classes['user__info--destroy']}>
      {/* <button>{contentRender.status === 'Khóa' ? 'Mở khóa' : 'Khóa'}</button> */}
      <button onClick={() => handleDeleteAccount(contentRender.id)}>Xóa Tài Khoản</button>
    </div>
  </div>
  );
};

export default UserInfo;
