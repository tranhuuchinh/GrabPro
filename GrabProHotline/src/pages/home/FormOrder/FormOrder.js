import React from 'react';
import classes from './FormOrder.module.scss';
import ButtonCT from '../../../components/button/ButtonCT';
import ic_address from '../../../assets/svg/address.svg';
import ic_phone_black from '../../../assets/svg/phone_black.svg';
import ic_user from '../../../assets/svg/user.svg';
import ic_destination from '../../../assets/svg/destination.svg';
import map from '../../../assets/imgs/map.jpg';
// import { sendMessage, socketCallcenter, socketGeolocation } from '../../../service/socket';

const tags = {
    WAITING: '#9A9A9A',
    RECIEVED: '#F38522',
    COMPLETED: '#00B14F',
};

const FormOrder = () => {
    return (
        <div className={classes.formOrder}>
            <div className={classes.formOrder__title}>
                <h3>TẠO ĐƠN MỚI</h3>
                <div style={{ backgroundColor: tags['WAITING'] }} className={classes['formOrder__title--tag']}>
                    <p>Đang chờ</p>
                </div>
                <div style={{ backgroundColor: tags['RECIEVED'] }} className={classes['formOrder__title--tag']}>
                    <p>Đã nhận</p>
                </div>
                <div style={{ backgroundColor: tags['COMPLETED'] }} className={classes['formOrder__title--tag']}>
                    <p>Hoàn thành</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: '1' }}>
                    <div className={classes['formOrder__input']}>
                        <label htmlFor="phone">
                            <img src={ic_phone_black} width={16} alt="" />
                        </label>
                        <input type="text" name="phone" style={{ width: '80%' }} />
                    </div>
                    <div className={classes['formOrder__input']}>
                        <label htmlFor="name">
                            <img src={ic_user} width={16} alt="" />
                        </label>
                        <input type="text" name="name" style={{ width: '80%' }} />
                    </div>
                </div>
                <div style={{ flex: '3', marginLeft: '40px' }}>
                    <div className={classes['formOrder__input']}>
                        <label htmlFor="">
                            <img src={ic_address} width={16} alt="" />
                        </label>
                        <input type="text" name="street" placeholder="Số nhà/Đường" />
                        <input type="text" name="ward" placeholder="Xã/Phường" />
                        <input type="text" name="district" placeholder="Quận/Huyện" />
                        <input type="text" name="city" placeholder="Tỉnh/Thành phố" />
                    </div>
                    <div className={classes['formOrder__input']}>
                        <label htmlFor="">
                            <img src={ic_destination} width={16} alt="" />
                        </label>
                        <input type="text" name="street" placeholder="Số nhà/Đường" />
                        <input type="text" name="ward" placeholder="Xã/Phường" />
                        <input type="text" name="district" placeholder="Quận/Huyện" />
                        <input type="text" name="city" placeholder="Tỉnh/Thành phố" />
                    </div>
                </div>
            </div>
            <h4>Thông tin đơn</h4>
            <div className={classes.formOrder__info}>
                <div className={classes['formOrder__info-item']}>
                    <h5>Quãng đường</h5>
                    <p>5 km</p>
                </div>
                <div className={classes['formOrder__info-item']}>
                    <h5>Đơn giá</h5>
                    <p>30 000</p>
                </div>

                <div className={classes['formOrder__info-item']}>
                    <h5>ID</h5>
                    <p>UJKHFH435</p>
                </div>
                <div className={classes['formOrder__info-item']}>
                    <h5>Thời gian tạo</h5>
                    <p>10:02 24/06/2023</p>
                </div>
            </div>

            <div className={classes.formOrder__btn}>
                <ButtonCT outlineBtn borderRadius medium>
                    Hủy
                </ButtonCT>
                <ButtonCT
                    primary
                    borderRadius
                    medium
                    // onClick={() =>
                    //     sendMessage(socketCallcenter, 'customerBooking', {
                    //         fullname: 'Tran Duy Khuong',
                    //         phone: '0824704789',
                    //         address: '135 Trần Hưng Đạo, Quận 1',
                    //     })
                    // }
                >
                    Đặt đơn
                </ButtonCT>

                <ButtonCT
                    outlineBtnBlue
                    borderRadius
                    medium
                    // onClick={() =>
                    //     sendMessage(socketGeolocation, 'clientGeolocationResolved', {
                    //         data: {
                    //             fullname: 'Tran Duy Khuong 1',
                    //             phone: '0824704789',
                    //             address: '135 Trần Hưng Đạo, Quận 1',
                    //         },
                    //         geolocation: { lat: 123, lon: 234 },
                    //     })
                    // }
                >
                    Đặt lại
                </ButtonCT>
                <ButtonCT outlineBtn borderRadius medium>
                    Hủy đơn
                </ButtonCT>
            </div>

            <div className={classes.formOrder__map}>
                <img src={map} alt="" width={'100%'} />
            </div>
        </div>
    );
};

export default FormOrder;
