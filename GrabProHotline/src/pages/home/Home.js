import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Home.module.scss';
import OrderItem from './OrderItem/OrderItem';
import ic_phone from '../../assets/svg/phone.svg';
import AddressItem from './AddressItem/AddressItem';
import FormOrder from './FormOrder/FormOrder';

const dataOrders = [
    {
        name: 'Tấn Vinh',
        phone: '039 857 2937',
        time: '10:00 24/06/2024',
    },
    {
        name: 'Tấn Vinh',
        phone: '039 857 2937',
        time: '10:00 24/06/2024',
    },
    {
        name: 'Tấn Vinh',
        phone: '039 857 2937',
        time: '10:00 24/06/2024',
    },
    {
        name: 'Tấn Vinh',
        phone: '039 857 2937',
        time: '10:00 24/06/2024',
    },
    {
        name: 'Tấn Vinh',
        phone: '039 857 2937',
        time: '10:00 24/06/2024',
    },
];

const dataAddresses = [
    '135B Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TPHCM',
    '135B Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TPHCM',
    '135B Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TPHCM',
    '135B Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TPHCM',
    '135B Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TPHCM',
];

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.home__left}>
                <h4 className={classes['home__left-title']}>Đơn hàng gần đây</h4>
                <div className={classes['home__left-list']}>
                    {dataOrders.map((item, idx) => (
                        <div key={+idx}>
                            <OrderItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.home__body}>
                <div className={classes['home__body-call']}>
                    <div className={classes['home__body-call-info']}>
                        <span>DK</span>
                        <div>
                            <h3>Duy Khương</h3>
                            <p>039 649 2049</p>
                        </div>
                    </div>
                    <div className={classes['home__body-call-time']}>
                        <p>00:00</p>
                    </div>
                    <div className={classes['home__body-call-rank']}>
                        <h4>Hạng</h4>
                        <p>Thông thường</p>
                    </div>
                    <div className={classes['home__body-call-cancel']}>
                        <img src={ic_phone} alt="" />
                    </div>
                </div>

                <div className={classes['home__body-form']}>
                    <FormOrder />
                </div>
            </div>
            <div className={classes.home__right}>
                <h4 className={classes['home__right-title']}>Địa chỉ nổi bật</h4>
                <div className={classes['home__right-list']}>
                    {dataAddresses.map((item, idx) => (
                        <div key={+idx}>
                            <AddressItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
