import React from 'react';
import classes from './AddressItem.module.scss';
import ic_address from '../../../assets/svg/address.svg';

const AddressItem = ({ item }) => {
    return (
        <div className={classes.addressItem}>
            <img src={ic_address} alt="" width={14} />
            <p className={classes['addressItem__text']}>{item?.data?.address}</p>
        </div>
    );
};

export default AddressItem;
