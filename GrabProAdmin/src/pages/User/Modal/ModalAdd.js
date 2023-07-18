import React from 'react';
import classes from './ModalAdd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ModalAdd = ({onCloseModal}) => {
    return (
        <div className={classes.modaladd}>
            <div style={{position: 'relative'}}>
                <h2>THÊM MỚI</h2>
                <FontAwesomeIcon icon={faClose} className={classes.modaladd__ic} onClick={onCloseModal}/>
            </div>

            <div className={classes.modaladd__info}>
                <div className={classes.modaladd__input}>
                    <p>Họ và tên</p>
                    <input type='text' placeholder='Nhập họ và tên'/>
                </div>

                <div className={classes.modaladd__input}>
                    <p>Số điện thoại</p>
                    <input type='text' placeholder='Nhập họ và tên'/>
                </div>

                <div className={classes.modaladd__input}>
                    <p>Địa chỉ</p>
                    <input type='text' placeholder='Nhập họ và tên'/>
                </div>

                <div className={classes.modaladd__button}>
                    <button onClick={onCloseModal}>Hủy</button>
                    <button>Thêm</button>
                </div>
            </div>


        </div>
    );
};

export default ModalAdd;
