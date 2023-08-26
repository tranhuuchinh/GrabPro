import React from 'react';
import classes from './OrderItem.module.scss';
import { useSetRecoilState } from 'recoil';
import { fromRecoil, toRecoil } from '../recoil';

const OrderItem = ({ item }) => {
    const setFrom = useSetRecoilState(fromRecoil);
    const setTo = useSetRecoilState(toRecoil);

    let name = '';
    if (item?.name) {
        const tmp = item?.name?.toUpperCase().split(' ');
        name = tmp[0][0] + tmp[1][0];
    }

    const handleClick = () => {
        setFrom(item?.from?.address);
        setTo(item?.to?.address);
    };

    return (
        <div className={classes.orderItem} onClick={handleClick}>
            {item?.name && <div className={classes.orderItem__avatar}>{name}</div>}
            <div className={classes.orderItem__body}>
                {item?.name && <h5 className={classes['orderItem__body-name']}>{item?.name}</h5>}
                <p className={classes['orderItem__body-phone']} style={{ color: '#008E3F' }}>
                    {item?.from?.address}
                </p>
                <p className={classes['orderItem__body-phone']} style={{ color: 'blue' }}>
                    {item?.to?.address}
                </p>
                <p className={classes['orderItem__body-time']}>{item?.createdAt?.slice(0, 16).replace('T', ' ')}</p>
            </div>
        </div>
    );
};

export default OrderItem;
