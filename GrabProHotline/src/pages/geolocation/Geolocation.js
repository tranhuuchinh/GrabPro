import React, { useEffect, useState } from 'react';
import classes from './Geolocation.module.scss';
import map from '../../assets/imgs/map.jpg';
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

const apiKeyGGMaps = 'AIzaSyBczGGMwmlrHDB0VMlrdE7Cx-xyBPCFKdA';
const apiKeyNominatim = '5b3ce3597851110001cf6248f1a1f6627cbd4347adf8adc8296df114';

Geocode.setApiKey(apiKeyGGMaps);
Geocode.setLanguage('vn');

const containerStyle = {
    width: '100%',
    height: '100%',
};

const Geolocation = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKeyGGMaps,
        id: 'google-map-script',
        language: 'vi',
        region: 'vn',
    });
    const customMarkerIcon = {
        url: ic_position,
        scaledSize: isLoaded ? new window.google.maps.Size(36, 36) : null,
    };

    const [map, setMap] = useState(null);
    const [search, setSearch] = useState('');
    const [address, setAddress] = useState('Hà Nội');
    const [geocode, setGeocode] = useState({ lat: 37.7749, lng: -122.4194 });
    const [newGeocode, setNewGeocode] = useState(null);

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
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(geocode);
        bounds.extend(newGeocode);
        map.fitBounds(bounds);
    };

    const handleSplitAddress = (address) => {
        const addressList = address.split(', ');
        const filteredArray = addressList.filter((item, idx) => {
            if (addressList.length - idx <= 5) return item;
        });
        setStreet(filteredArray[0]);
        setWard(filteredArray[1]);
        setDistrict(filteredArray[2]);
        setCity(filteredArray[3]);
    };

    const getAddress = (lat, lng) => {
        Geocode.fromLatLng(lat, lng).then(
            (response) => {
                const address = response.results[0].formatted_address;
                console.log(address)
                handleSplitAddress(address);
            },
            (error) => {
                console.error(error);
            }
        );
    };

    const getLatLng = async (address, type) => {
        if (typeMap === 'GoogleMaps') {
            const ggMap = new GgMap(apiKeyGGMaps);
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
        }
        else{
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
        const newLat = event.latLng.lat();
        const newLng = event.latLng.lng();
        setNewGeocode({ lat: newLat, lng: newLng });
        getAddress(newLat, newLng);
    };

    const handleReGeocode = () => {
        getLatLng(street + ', ' + ward + ', ' + district + ', ' + city, 'NEW');
    };

    useEffect(() => {
        getLatLng(address);
    }, [address]);

    // useEffect(() => {
    //     const widthButton = document.getElementById('button1');
    // }, []);

    // Xử lý khác
    // const myInput = document.getElementsByTagName('input');

    // forEach()
    // myInput.addEventListener('focus', function () {
    //     this.select();
    // });

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
                <p>135 Trần Hưng Đạo, Cầu Ông Lãnh, Quận 1, TP HCM</p>

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
                    name="street"
                    placeholder="Số nhà/Đường"
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
                <br />
                <h4>Địa chỉ định vị</h4>
                <p>
                    <strong>Lat: </strong> {newGeocode ? newGeocode.lat : geocode.lat}
                </p>
                <p>
                    <strong>Lng: </strong> {newGeocode ? newGeocode.lng : geocode.lng}
                </p>
                <br />

                <ButtonCT outlineBtnBlue borderRadius medium onClick={handleReGeocode} style={{float: 'right', display: typeMap === 'GoogleMaps' ? 'flex' : 'none'}}>
                    Định vị lại
                </ButtonCT>

                <br />
                <br />
                <br />
                <br />
                <ButtonCT
                    primary
                    borderRadius
                    medium
                    block
                    onClick={() => {
                        handleSplitAddress('135 Trần Hưng Đạo, Cầu Ông Lãnh, Quận 1, TP HCM');
                        setAddress('135 Trần Hưng Đạo, Cầu Ông Lãnh, Quận 1, TP HCM');
                    }}
                    style={{display: typeMap === 'GoogleMaps' ? 'flex' : 'none'}}
                >
                    Xác nhận
                </ButtonCT>

                <div>
                    <button id='button1' onClick={() => {setTypeMap('GoogleMaps'), toast.success('Bạn đang sử dụng Google Maps', {
                        position: toast.POSITION.TOP_LEFT
                    });}}>
                        <img src={Success} className={classes.geo__img} style={{display: typeMap === 'GoogleMaps' ? 'inline' : 'none'}}/>
                        <img src={GGMapLogo} />
                        <p>Google Maps</p>

                    </button>
                    <button onClick={() => {setTypeMap('Nominatim'), toast.success('Bạn đang sử dụng Nominatim', {
                        position: toast.POSITION.TOP_LEFT
                    });}}>
                        <img src={Success} className={classes.geo__img} style={{display: typeMap === 'GoogleMaps' ? 'none' : 'inline-block'}}/>
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
