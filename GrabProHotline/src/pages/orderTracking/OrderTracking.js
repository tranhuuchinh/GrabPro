import React, { useState } from 'react';
import classes from './OrderTracking.module.scss';
import OrderItem from './OrderItem/OrderItem';
import ic_position from '../../assets/svg/address.svg';
import { DirectionsRenderer, DirectionsService, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import socketManagerInstance, { socketCallcenter } from '../../service/socket';
import { useEffect } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
};

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

const OrderTracking = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
        id: 'google-map-script',
        language: 'vi',
        region: 'vn',
    });
    const [map, setMap] = useState(null);
    const [selected, setSelected] = useState(null);
    const [geocode, setGeocode] = useState({ lat: 37.7749, lng: -122.4194 });
    const [newGeocode, setNewGeocode] = useState({ lat: 38.7749, lng: -122.4194 });
    const [orders, setOrders] = useState([]);

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const handleSelected = (item) => {
        setSelected(item);
        setGeocode({
            lat: item?.order?.from?.latitude,
            lng: item?.order?.from?.altitude,
        });
        setNewGeocode({
            lat: item?.order?.to?.latitude,
            lng: item?.order?.to?.altitude,
        });
    };

    const onLoad = React.useCallback(function callback(mapInstance) {
        const bounds = new window.google.maps.LatLngBounds(geocode);
        mapInstance.fitBounds(bounds);

        setMap(mapInstance);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    useEffect(() => {
        socketCallcenter.on('connect', () => {
            console.log('Connected to server callcenter');
        });

        socketCallcenter.on('FOLLOW_ORDER_CLIENT', (message) => {
            setOrders((tmp) => [message, ...tmp]);
        });

        socketCallcenter.on('disconnect', () => {
            console.log('Disconnected from server callcenter');
            socketManagerInstance.reconnect(socketCallcenter);
        });

        return () => {
            socketCallcenter.disconnect();
        };
    }, []);

    console.log(selected);

    const customMarkerIcon = {
        url: ic_position,
        scaledSize: isLoaded ? new window.google.maps.Size(36, 36) : null,
    };

    async function calculateRoute() {
        try {
            const directionsService = new google.maps.DirectionsService();
            const results = await directionsService.route({
                origin: geocode,
                destination: newGeocode,
                travelMode: google.maps.TravelMode.DRIVING,
            });
            setDirectionsResponse(results);
            setDistance(results.routes[0].legs[0].distance.text);
            setDuration(results.routes[0].legs[0].duration.text);
        } catch (e) {}
    }

    useEffect(() => {
        calculateRoute();
    }, [geocode?.lat, newGeocode?.lat]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (selected) console.log(selected);
            // Send Socket get location driver
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [selected]);

    return (
        <div className={classes.orderTracking}>
            <div className={classes.orderTracking__left}>
                <h3 style={{ color: 'blue', padding: '10px', boxShadow: '1px 2px 3px #ddd' }}>Đơn đang thực hiện</h3>
                <div className={classes['orderTracking__left-list']}>
                    {orders.map((item, idx) => (
                        <div key={+idx} onClick={() => handleSelected(item)}>
                            <OrderItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.orderTracking__info}>
                <h4>Khách hàng</h4>
                <div style={{ border: '1px solid #ddd', padding: '10px' }}>
                    <strong>{selected ? selected?.user?.fullname : 'No name'}</strong>
                    <p>{selected ? selected?.user?.idAccount?.phone : 'No phone'}</p>
                </div>
                <br />
                <h4>Đơn hàng</h4>
                <div>
                    <h5>Bắt đầu</h5>
                    <p>{selected ? selected?.order?.from?.address : 'None'}</p>
                    <h5 style={{ paddingTop: '10px' }}>Kết thúc</h5>
                    <p>{selected ? selected?.order?.to?.address : 'None'}</p>
                    <h5 style={{ paddingTop: '10px' }}>Thời gian đặt</h5>
                    <p>{selected ? selected?.order?.createdAt.slice(0, 16).replace('T', ' ') : 'None'}</p>
                </div>
                <br />
                <h5>Khoảng cách</h5>
                <p>{distance}</p>
                <br />
                <h5>Ước lượng thời gian</h5>
                <p>{duration}</p>
                <h4>Tài xế</h4>
                <div style={{ padding: '10px', backgroundColor: 'lightcyan' }}>
                    <strong>Trần Hữu Chính</strong>
                    <p>097 894 2432</p>
                    <p style={{ color: 'blue' }}>52-L2 35263</p>
                </div>
            </div>
            <div className={classes.orderTracking__content}>
                {isLoaded ? (
                    <GoogleMap
                        style={{ cursor: 'default !important' }}
                        mapContainerStyle={containerStyle}
                        center={geocode}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {/* <Marker position={geocode} />
                        <Marker position={newGeocode} icon={customMarkerIcon} /> */}

                        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                    </GoogleMap>
                ) : (
                    <>Loading...</>
                )}
            </div>
        </div>
    );
};

export default OrderTracking;
