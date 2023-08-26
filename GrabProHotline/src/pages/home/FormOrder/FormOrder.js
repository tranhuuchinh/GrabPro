import React, { useState, useEffect } from 'react';
import classes from './FormOrder.module.scss';
import ButtonCT from '../../../components/button/ButtonCT';
import ic_address from '../../../assets/svg/address.svg';
import ic_phone_black from '../../../assets/svg/phone_black.svg';
import ic_user from '../../../assets/svg/user.svg';
import ic_destination from '../../../assets/svg/destination.svg';
import { useRecoilState } from 'recoil';
import { fromRecoil, locationsRecoil, nameRecoil, ordersRecoil, phoneRecoil, toRecoil } from '../recoil';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import socketManagerInstance, { sendMessage, socketCallcenter } from '../../../service/socket';

const tags = {
    WAITING: '#9A9A9A',
    RECIEVED: '#F38522',
    COMPLETED: '#00B14F',
};

const FormOrder = () => {
    const [phone, setPhone] = useRecoilState(phoneRecoil);
    const [name, setName] = useRecoilState(nameRecoil);
    const [orders, setOrders] = useRecoilState(ordersRecoil);
    const [locations, setLocations] = useRecoilState(locationsRecoil);
    const [from, setFrom] = useRecoilState(fromRecoil);
    const [to, setTo] = useRecoilState(toRecoil);

    const [noHomeStart, setNoHomeStart] = useState('');
    const [streetStart, setStreetStart] = useState('');
    const [wardStart, setWardStart] = useState('');
    const [districtStart, setDistrictStart] = useState('');
    const [cityStart, setCityStart] = useState('');

    const [noHomeEnd, setNoHomeEnd] = useState('');
    const [streetEnd, setStreetEnd] = useState('');
    const [wardEnd, setWardEnd] = useState('');
    const [districtEnd, setDistrictEnd] = useState('');
    const [cityEnd, setCityEnd] = useState('');

    const [typeTransport, setTypeTransport] = useState('motobike');

    const handlePlaceSelectStart = (place) => {
        let idx = place.value.terms.length - 1;
        setCityStart(place.value.terms[idx--].value);
        setDistrictStart(place.value.terms[idx--].value);
        setWardStart(idx > 0 ? place.value.terms[idx--].value : '');
        setStreetStart(place.value.terms[idx].value);
    };
    const handlePlaceSelectEnd = (place) => {
        let idx = place.value.terms.length - 1;
        setCityEnd(place.value.terms[idx--].value);
        setDistrictEnd(place.value.terms[idx--].value);
        setWardEnd(idx > 0 ? place.value.terms[idx--].value : '');
        setStreetEnd(place.value.terms[idx].value);
    };
    const handlePlaceSelectStartRecoil = (place) => {
        const tmp = place.split(', ');
        let idx = tmp.length - 1;
        setCityStart(tmp[idx--]);
        setDistrictStart(tmp[idx--]);
        setWardStart(idx > 0 ? tmp[idx--] : '');
        setStreetStart(tmp[idx]);
    };
    const handlePlaceSelectEndRecoil = (place) => {
        const tmp = place.split(', ');
        let idx = tmp.length - 1;
        setCityEnd(tmp[idx--]);
        setDistrictEnd(tmp[idx--]);
        setWardEnd(idx > 0 ? tmp[idx--] : '');
        setStreetEnd(tmp[idx]);
    };

    const handleGetAddress = () => {
        sendMessage(socketCallcenter, 'queryAddress', phone);
    };

    useEffect(() => {
        socketCallcenter.on('connect', () => {
            console.log('Connected to server callcenter');
        });

        socketCallcenter.on('getUser', (message) => {
            console.log(message);
            if (message) {
                setName(message.fullname);
                setOrders(message.listOrder);

                // Handle locations
                const locationsSet = {};
                for (let i = 0; i < message.favoriteLocations.length; i++) {
                    const e = message.favoriteLocations[i];
                    if (!locationsSet[e.address]) {
                        locationsSet[e.address] = [e];
                    } else {
                        locationsSet[e.address].push(e);
                    }
                }
                console.log(locationsSet);
                const tmp = [];
                for (let e in locationsSet) {
                    tmp.push({
                        data: locationsSet[e][0],
                        number: locationsSet[e].length,
                    });
                }
                tmp.sort((a, b) => a.number > b.number);
                console.log(tmp);
                setLocations(tmp);
            }
        });

        socketCallcenter.on('disconnect', () => {
            console.log('Disconnected from server callcenter');
            socketManagerInstance?.reconnect(socketCallcenter);
        });

        return () => {
            socketCallcenter.disconnect();
        };
    }, []);

    useEffect(() => {
        if (from) handlePlaceSelectStartRecoil(from);
    }, [from]);
    useEffect(() => {
        if (to) handlePlaceSelectEndRecoil(to);
    }, [to]);

    return (
        <div className={classes.formOrder}>
            <div className={classes.formOrder__title}>
                <h3>TẠO ĐƠN MỚI</h3>
                {/* <div style={{ backgroundColor: tags['WAITING'] }} className={classes['formOrder__title--tag']}>
                    <p>Đang chờ</p>
                </div>
                <div style={{ backgroundColor: tags['RECIEVED'] }} className={classes['formOrder__title--tag']}>
                    <p>Đã nhận</p>
                </div>
                <div style={{ backgroundColor: tags['COMPLETED'] }} className={classes['formOrder__title--tag']}>
                    <p>Hoàn thành</p>
                </div> */}
            </div>
            <div>
                <div className={classes['formOrder__input_info']}>
                    <label htmlFor="phone">
                        <img src={ic_phone_black} width={16} alt="" />
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={handleGetAddress}
                    />
                </div>
                <div className={classes['formOrder__input_info']}>
                    <label htmlFor="name">
                        <img src={ic_user} width={16} alt="" />
                    </label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <br />
            <div style={{ marginBottom: '10px' }}>
                <GooglePlacesAutocomplete
                    apiKey={process.env.REACT_APP_GOOGLE_API}
                    apiOptions={{ language: 'vi', region: 'VN' }}
                    autocompletionRequest={{
                        componentRestrictions: {
                            country: ['VN'],
                        },
                        types: ['route'],
                    }}
                    selectProps={{
                        value: '',
                        onChange: handlePlaceSelectStart,
                    }}
                />
            </div>
            <div className={classes['formOrder__input']}>
                <label htmlFor="">
                    <img src={ic_address} width={16} alt="" />
                </label>
                {/* <input
                    type="text"
                    name="noHome"
                    placeholder="Số nhà"
                    style={{ width: '80px' }}
                    value={noHomeStart}
                    onChange={(e) => setNoHomeStart(e.target.value)}
                /> */}
                <input
                    type="text"
                    name="street"
                    placeholder="Đường"
                    value={streetStart}
                    onChange={(e) => setStreetStart(e.target.value)}
                />
                <input
                    type="text"
                    name="ward"
                    placeholder="Xã/Phường"
                    value={wardStart}
                    onChange={(e) => setWardStart(e.target.value)}
                />
                <input
                    type="text"
                    name="district"
                    placeholder="Quận/Huyện"
                    value={districtStart}
                    onChange={(e) => setDistrictStart(e.target.value)}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Tỉnh/Thành phố"
                    value={cityStart}
                    onChange={(e) => setCityStart(e.target.value)}
                />
            </div>
            <div style={{ marginBottom: '10px', marginTop: '20px' }}>
                <GooglePlacesAutocomplete
                    apiKey={process.env.REACT_APP_GOOGLE_API}
                    apiOptions={{ language: 'vi', region: 'VN' }}
                    autocompletionRequest={{
                        componentRestrictions: {
                            country: ['VN'],
                        },
                        types: ['route'],
                    }}
                    selectProps={{
                        value: '',
                        onChange: handlePlaceSelectEnd,
                    }}
                />
            </div>
            <div className={classes['formOrder__input']}>
                <label htmlFor="">
                    <img src={ic_destination} width={16} alt="" />
                </label>
                {/* <input
                    type="text"
                    name="noHome"
                    placeholder="Số nhà"
                    style={{ width: '80px' }}
                    value={noHomeEnd}
                    onChange={(e) => setNoHomeEnd(e.target.value)}
                /> */}
                <input
                    type="text"
                    name="street"
                    placeholder="Đường"
                    value={streetEnd}
                    onChange={(e) => setStreetEnd(e.target.value)}
                />
                <input
                    type="text"
                    name="ward"
                    placeholder="Xã/Phường"
                    value={wardEnd}
                    onChange={(e) => setWardEnd(e.target.value)}
                />
                <input
                    type="text"
                    name="district"
                    placeholder="Quận/Huyện"
                    value={districtEnd}
                    onChange={(e) => setDistrictEnd(e.target.value)}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Tỉnh/Thành phố"
                    value={cityEnd}
                    onChange={(e) => setCityEnd(e.target.value)}
                />
            </div>

            <h4>Loại xe</h4>
            <label htmlFor="motobike" style={{ marginRight: '10px', cursor: 'pointer' }}>
                Xe máy
            </label>
            <input
                required
                type="radio"
                name="typeTransport"
                id="motobike"
                value="motobike"
                style={{ marginRight: '60px' }}
                onChange={(e) => setTypeTransport(e.target.value)}
                checked={typeTransport === 'motobike'}
            />
            <label htmlFor="4seats" style={{ marginRight: '10px', cursor: 'pointer' }}>
                4 chổ
            </label>
            <input
                required
                type="radio"
                name="typeTransport"
                id="4seats"
                value="4seats"
                style={{ marginRight: '60px' }}
                onChange={(e) => setTypeTransport(e.target.value)}
                checked={typeTransport === '4seats'}
            />
            <label htmlFor="7seats" style={{ marginRight: '10px', cursor: 'pointer' }}>
                7 chổ
            </label>
            <input
                required
                type="radio"
                name="typeTransport"
                id="7seats"
                value="7seats"
                onChange={(e) => setTypeTransport(e.target.value)}
                checked={typeTransport === '7seats'}
            />

            <div className={classes.formOrder__btn}>
                {/* <ButtonCT outlineBtn borderRadius medium>
                    Hủy
                </ButtonCT> */}
                <ButtonCT
                    primary
                    borderRadius
                    medium
                    onClick={() =>
                        sendMessage(socketCallcenter, 'customerBooking', {
                            name,
                            phone,
                            addressStart:
                                noHomeStart +
                                ' ' +
                                streetStart +
                                ', ' +
                                wardStart +
                                ', ' +
                                districtStart +
                                ', ' +
                                cityStart,
                            addressEnd:
                                noHomeEnd + ' ' + streetEnd + ', ' + wardEnd + ', ' + districtEnd + ', ' + cityEnd,
                            type: typeTransport,
                        })
                    }
                >
                    Đặt đơn
                </ButtonCT>

                {/* <ButtonCT outlineBtnBlue borderRadius medium>
                    Đặt lại
                </ButtonCT> */}
                <ButtonCT outlineBtn borderRadius medium>
                    Hủy đơn
                </ButtonCT>
            </div>

            {/* <h4>Thông tin đơn</h4>
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
            </div> */}
        </div>
    );
};

export default FormOrder;
