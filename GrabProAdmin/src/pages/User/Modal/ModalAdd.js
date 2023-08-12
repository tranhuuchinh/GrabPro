import React, {useEffect, useState} from 'react';
import classes from './ModalAdd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { axiosClient } from '../../../api/axios';

const ModalAdd = ({onCloseModal, type}) => {
    const [isType, setIsType] = useState(type === 'Customer' ? 'customer' : type === 'Driver' ? 'driver' : 'hotline');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState({
                                        email:'',
                                        phone: '',
                                        password: '',
                                        fullname: '',
                                    });

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const randomPass = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const handleSubmit = (e) => {
        setData({
            email: email,
            phone: phone,
            password: randomPass(8),
            fullname: name
        })
    }

    useEffect(() => {
        if (data.email !== '') {
            axiosClient.post(`/user/${isType}`, data).then((res) => {
                if (res) {
                    window.location.reload();
                }
            });
        }
    }, [data])

    return (
        <div className={classes.modaladd}>
            <div style={{position: 'relative'}}>
                <h2>THÊM MỚI</h2>
                <FontAwesomeIcon icon={faClose} className={classes.modaladd__ic} onClick={onCloseModal}/>
            </div>

            <div className={classes.modaladd__info}>
                <div className={classes.modaladd__input}>
                    <p>Họ và tên</p>
                    <input type='text' placeholder='Nhập họ và tên' onChange={handleName}/>
                </div>

                <div className={classes.modaladd__input}>
                    <p>Số điện thoại</p>
                    <input type='text' placeholder='Nhập số điện thoại' onChange={handlePhone} maxLength={10}/>
                </div>

                <div className={classes.modaladd__input}>
                    <p>Địa chỉ</p>
                    <input type='email' placeholder='Nhập email' onChange={handleEmail}/>
                </div>

                <div className={classes.modaladd__button}>
                    <button onClick={onCloseModal}>Hủy</button>
                    <button onClick={() => handleSubmit()}>Thêm</button>
                </div>
            </div>
        </div>
    );
};

export default ModalAdd;
