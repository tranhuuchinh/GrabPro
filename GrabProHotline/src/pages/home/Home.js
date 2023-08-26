import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classes from './Home.module.scss';
import OrderItem from './OrderItem/OrderItem';
import ic_phone from '../../assets/svg/phone.svg';
import AddressItem from './AddressItem/AddressItem';
import FormOrder from './FormOrder/FormOrder';
import useAxios from '../../hooks/useAxios';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { fromRecoil, locationsRecoil, nameRecoil, ordersRecoil, phoneRecoil, toRecoil } from './recoil';
import ButtonCT from '../../components/button/ButtonCT';
import { useState } from 'react';

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

const HomeRecoil = () => {
    //Axios
    const [response0d, error0d, isLoading0d] = useAxios('get', '/payments', {}, {}, []);
    const [phone, setPhone] = useRecoilState(phoneRecoil);
    const [name, setName] = useRecoilState(nameRecoil);
    const orders = useRecoilValue(ordersRecoil);
    const locations = useRecoilValue(locationsRecoil);
    const setFrom = useSetRecoilState(fromRecoil);
    const setTo = useSetRecoilState(toRecoil);

    const [isFrom, setIsFrom] = useState(true);

    const handleClick = (item) => {
        if (isFrom) setFrom(item);
        else setTo(item);
    };

    useEffect(() => {
        if (isLoading0d === false && !error0d && response0d.data) {
            console.log(response0d.data);
        }
    }, [isLoading0d]);
    return (
        <div className={classes.home}>
            <div className={classes.home__left}>
                <h4 className={classes['home__left-title']}>Đơn hàng gần đây</h4>
                <div className={classes['home__left-list']}>
                    {orders
                        .slice(-5)
                        .reverse()
                        .map((item, idx) => (
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
                            <h3>{name}</h3>
                            <p>{phone}</p>
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
                    {locations.slice(0, 5).map((item, idx) => (
                        <div key={+idx} onClick={() => handleClick(item?.data?.address)}>
                            <AddressItem item={item} />
                        </div>
                    ))}
                    <ButtonCT outlineBtn medium primary={isFrom} onClick={() => setIsFrom(true)}>
                        From
                    </ButtonCT>
                    <ButtonCT outlineBtn medium primary={!isFrom} onClick={() => setIsFrom(false)}>
                        To
                    </ButtonCT>
                </div>
            </div>
        </div>
    );
};

function Home() {
    return (
        <RecoilRoot>
            <HomeRecoil />
        </RecoilRoot>
    );
}

export default Home;
