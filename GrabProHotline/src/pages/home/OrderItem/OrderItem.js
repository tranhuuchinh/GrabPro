import React from 'react';
import classes from './OrderItem.module.scss';

const OrderItem = ({ item }) => {
    return (
        <div className={classes.orderItem}>
            <div className={classes.orderItem__avatar}>TV</div>
            <div className={classes.orderItem__body}>
                <h5 className={classes['orderItem__body-name']}>{item.name}</h5>
                <p className={classes['orderItem__body-phone']}>{item.phone}</p>
                <p className={classes['orderItem__body-time']}>{item.time}</p>
            </div>
        </div>
    );
};

export default OrderItem;
