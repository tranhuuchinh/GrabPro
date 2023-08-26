import React from 'react';
import classes from './OrderItem.module.scss';

const OrderItem = ({ item }) => {
    let name = '';
    if (item?.user?.fullname) {
        const tmp = item?.user?.fullname?.toUpperCase().split(' ');
        name = tmp[0][0] + tmp[1][0];
    }

    return (
        <div className={classes.orderItem}>
            {item?.user?.fullname && <div className={classes.orderItem__avatar}>{name}</div>}
            <div className={classes.orderItem__body}>
                {item?.user?.fullname && <h5 className={classes['orderItem__body-name']}>{item?.user?.fullname}</h5>}
                <p className={classes['orderItem__body-phone']} style={{ color: '#008E3F' }}>
                    {item?.order?.from?.address}
                </p>
                <p className={classes['orderItem__body-phone']} style={{ color: 'blue' }}>
                    {item?.order?.to?.address}
                </p>
                <p className={classes['orderItem__body-time']}>{item?.order?.createdAt?.substring(0, 10)}</p>
            </div>
        </div>
    );
};

export default OrderItem;
