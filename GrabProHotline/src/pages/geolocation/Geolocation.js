import React, { useEffect, useState } from 'react';
import classes from './Geolocation.module.scss';
import ic_position from '../../assets/svg/address.svg';
import { DirectionsService, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import ButtonCT from '../../components/button/ButtonCT';
import Geocode from 'react-geocode';
import { forEach } from 'lodash';
import GgMap from './plugin/GgMapPlugin';
import Nominatim from './plugin/NominatimPlugin';
import GGMapLogo from '../../assets/imgs/GGMapLogo.png';
import NominatimLogo from '../../assets/imgs/Nominatim.png';
import Success from '../../assets/imgs/Success.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import socketManagerInstance, { sendMessage, socketGeolocation } from '../../service/socket';
import Swal from 'sweetalert2';

const apiKeyNominatim = '5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage('vn');

const containerStyle = {
    width: '100%',
    height: '100%',
};

const Geolocation = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
        id: 'google-map-script',
        language: 'vi',
        region: 'vn',
    });
    const customMarkerIcon = {
        url: ic_position,
        scaledSize: isLoaded ? new window.google.maps.Size(36, 36) : null,
    };

    const [message, setMessage] = useState('');
    const [stack, setStack] = useState([]);
    const [map, setMap] = useState(null);
    const [search, setSearch] = useState('');
    const [address, setAddress] = useState('Hà Nội');
    const [geocode, setGeocode] = useState({ lat: 37.7749, lng: -122.4194 });
    const [newGeocode, setNewGeocode] = useState(null);

    const [noHome, setNoHome] = useState('');
    const [street, setStreet] = useState('');
    const [ward, setWard] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');

    const [typeMap, setTypeMap] = useState('GoogleMaps');

    const onLoad = React.useCallback(function callback(mapInstance) {
        const bounds = new window.google.maps.LatLngBounds(geocode);
        mapInstance.fitBounds(bounds);

        setMap(mapInstance);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const fitBoundsToMarkers = (newGeocode) => {
        try {
            const bounds = new window.google.maps.LatLngBounds();

            bounds.extend(geocode);

            if (newGeocode) {
                bounds.extend(new window.google.maps.LatLng(newGeocode.lat, newGeocode.lng));
            }

            if (map) map.fitBounds(bounds);
        } catch (e) {}
    };

    const handleSplitAddress = (address) => {
        const addressList = address.split(', ');
        const filteredArray = addressList.filter((item, idx) => {
            if (addressList.length - idx <= 5) return item;
        });
        const noHomeSplit = filteredArray[0].split(' ');
        setNoHome(noHomeSplit[0]);
        noHomeSplit.splice(0, 1);
        setStreet(noHomeSplit.join(' '));
        setWard(filteredArray[1]);
        setDistrict(filteredArray[2]);
        setCity(filteredArray[3]);
    };

    const getAddress = (lat, lng) => {
        Geocode.fromLatLng(lat, lng).then(
            (response) => {
                const address = response.results[0].formatted_address;
                handleSplitAddress(address);
            },
            (error) => {
                console.error(error);
            }
        );
    };

    const getLatLng = async (address, type) => {
        if (typeMap === 'GoogleMaps') {
            const ggMap = new GgMap(process.env.REACT_APP_GOOGLE_API);
            const location = await ggMap.getLocation(address);

            if (type === 'NEW') {
                setNewGeocode(location);
            } else if (type === 'SEARCH') {
                setNewGeocode(location);
                getAddress(location.lat, location.lng);
            } else {
                setGeocode(location);
            }

            fitBoundsToMarkers(location);
        } else {
            const nominatim = new Nominatim(apiKeyNominatim);
            const location = await nominatim.getLocation(address);

            if (type === 'NEW') {
                setNewGeocode(location);
            } else if (type === 'SEARCH') {
                setNewGeocode(location);
                getAddress(location.lat, location.lng);
            } else {
                setGeocode(location);
            }

            fitBoundsToMarkers(location);
        }
    };

    const handleMapClickPosition = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setNewGeocode({ lat, lng });
        getAddress(lat, lng);
        fitBoundsToMarkers({
            lat,
            lng,
        });
    };

    const handleReGeocode = () => {
        getLatLng(street + ', ' + ward + ', ' + district + ', ' + city, 'NEW');
    };

    useEffect(() => {
        getLatLng(address);
    }, [address]);

    // Xử lý khác
    useEffect(() => {
        const myInput = document.getElementsByTagName('input');

        forEach(myInput, (item) => {
            item.addEventListener('focus', function () {
                this.select();
            });
        });
    }, []);

    const handleContinue = () => {
        console.log(message);

        setStack((prev) => prev.filter((item) => item !== 'geocodeStart'));
        const tmp = message;
        tmp.data.geocodeStart = newGeocode || geocode;
        tmp.data.addressStart = noHome + ' ' + street + ', ' + ward + ', ' + district + ', ' + city;
        setMessage(tmp);

        setAddress(message.data.addressEnd);
        handleSplitAddress(message.data.addressEnd);
    };

    const handleComplete = () => {
        if (stack[0] === 'geocodeStart') {
            const tmp = message;
            tmp.data.geocodeStart = newGeocode || geocode;
            tmp.data.addressStart = noHome + ' ' + street + ', ' + ward + ', ' + district + ', ' + city;
            setMessage(tmp);
        } else {
            const tmp = message;
            tmp.data.geocodeEnd = newGeocode || geocode;
            tmp.data.addressEnd = noHome + ' ' + street + ', ' + ward + ', ' + district + ', ' + city;
            setMessage(tmp);
        }
        setStack([]);
        setAddress('');
        setGeocode({ lat: '', lng: '' });
        setNoHome('');
        setStreet('');
        setWard('');
        setDistrict('');
        setCity('');
    };

    useEffect(() => {
        if (stack.length == 0) {
            console.log(message);
            sendMessage(socketGeolocation, 'clientGeolocationResolved', message);
        }
    }, [stack]);

    useEffect(() => {
        console.log(socketManagerInstance);
        if (!socketManagerInstance) {
            socketManagerInstance = new SingletonManager().getInstance();
        }

        socketGeolocation.on('connect', () => {
            console.log('Connected to server geolocation');
        });

        socketGeolocation.on('GEOLOCATION_CLIENT', async (message) => {
            console.log(message);
            await Swal.fire({
                title: 'Định vị mới',
                text: message.data.phone,
                icon: 'info',
                confirmButtonText: 'Định vị',
            });

            const tmp = [];
            if (message.data.geocodeStart === undefined) {
                tmp.push('geocodeStart');
                setAddress(message.data.addressStart);
                handleSplitAddress(message.data.addressStart);
                message.data.geocodeStart = {};
            }
            if (message.data.geocodeEnd === undefined) {
                if (tmp.length === 0) {
                    setAddress(message.data.addressEnd);
                    handleSplitAddress(message.data.addressEnd);
                }
                tmp.push('geocodeEnd');
                message.data.geocodeEnd = {};
            }
            setMessage(message);
            setStack(tmp);
        });

        socketGeolocation.on('disconnect', () => {
            console.log('Disconnected from server geolocation');
            socketManagerInstance.reconnect(socketGeolocation);
        });

        return () => {
            socketGeolocation.disconnect();
        };
    }, []);

    return (
        <div className={classes.geo}>
            <div className={classes.geo__map}>
                {isLoaded ? (
                    <GoogleMap
                        style={{ cursor: 'default !important' }}
                        mapContainerStyle={containerStyle}
                        center={geocode}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        onClick={handleMapClickPosition}
                    >
                        <Marker position={geocode} />
                        <Marker position={newGeocode} icon={customMarkerIcon} />

                        {/* <DirectionsService
                            options={{
                                geocode,
                                destination,
                                travelMode: 'DRIVING',
                            }}
                            callback={(response) => {
                                if (response !== null) {
                                    return <DirectionsRenderer directions={response} />;
                                }
                            }}
                        /> */}
                    </GoogleMap>
                ) : (
                    <>Loading...</>
                )}
            </div>
            <div className={classes.geo__info}>
                <h4>Địa chỉ từ khách hàng</h4>
                <p>{address}</p>

                <br />
                <input
                    type="text"
                    name="search"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ButtonCT
                    outlineBtn
                    borderRadius
                    medium
                    style={{ float: 'right' }}
                    onClick={() => {
                        getLatLng(search, 'SEARCH');
                        setSearch('');
                    }}
                >
                    Tìm kiếm
                </ButtonCT>
                <br />
                <br />
                <br />
                <br />
                <input
                    type="text"
                    name="noHome"
                    placeholder="Số nhà"
                    value={noHome}
                    onChange={(e) => setNoHome(e.target.value)}
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Đường"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <input
                    type="text"
                    name="ward"
                    placeholder="Xã/Phường"
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                />
                <input
                    type="text"
                    name="district"
                    placeholder="Quận/Huyện"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="Tỉnh/Thành phố"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br />

                <ButtonCT
                    outlineBtnBlue
                    borderRadius
                    medium
                    style={{ float: 'right', display: typeMap === 'GoogleMaps' ? 'flex' : 'none' }}
                    onClick={handleReGeocode}
                >
                    Định vị lại
                </ButtonCT>

                <br />
                <h4>Địa chỉ định vị</h4>
                <p>
                    <strong>Lat: </strong> {newGeocode ? newGeocode?.lat : geocode?.lat}
                </p>
                <p>
                    <strong>Lng: </strong> {newGeocode ? newGeocode?.lng : geocode?.lng}
                </p>

                <br />
                {stack.length == 2 ? (
                    <ButtonCT
                        primary
                        borderRadius
                        medium
                        block
                        onClick={handleContinue}
                        // style={{ display: typeMap === 'GoogleMaps' ? 'flex' : 'none' }}
                    >
                        Xác nhận & Tiếp tục
                    </ButtonCT>
                ) : (
                    <ButtonCT
                        primary
                        borderRadius
                        medium
                        block
                        onClick={handleComplete}
                        // style={{ display: typeMap === 'GoogleMaps' ? 'flex' : 'none' }}
                    >
                        Hoàn thành
                    </ButtonCT>
                )}
                <br />
                <br />

                <div>
                    <button
                        onClick={() => {
                            setTypeMap('GoogleMaps'),
                                toast.success('Bạn đang sử dụng Google Maps', {
                                    position: toast.POSITION.TOP_LEFT,
                                });
                        }}
                    >
                        <img
                            src={Success}
                            className={classes.geo__img}
                            style={{ display: typeMap === 'GoogleMaps' ? 'inline' : 'none' }}
                        />
                        <img src={GGMapLogo} />
                        <p>Google Maps</p>
                    </button>
                    <button
                        onClick={() => {
                            setTypeMap('Nominatim'),
                                toast.success('Bạn đang sử dụng Nominatim', {
                                    position: toast.POSITION.TOP_LEFT,
                                });
                        }}
                    >
                        <img
                            src={Success}
                            className={classes.geo__img}
                            style={{ display: typeMap === 'GoogleMaps' ? 'none' : 'inline-block' }}
                        />
                        <img src={NominatimLogo} />
                        <p>Nominatim</p>
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Geolocation);
