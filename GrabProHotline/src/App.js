import React, { useEffect } from 'react';
import './styles/style.scss';

import Navigation from './routes';

// import { socketCallcenter, socketGeolocation } from './service/socket';

const App = () => {
    // useEffect(() => {
    //     socketCallcenter.on('connect', () => {
    //         console.log('Connected to server callcenter');
    //     });

    //     socketGeolocation.on('GEOLOCATION_CLIENT', (message) => {
    //         console.log(message);
    //     });

    //     socketCallcenter.on('FOLLOW_ORDER_CLIENT', (message) => {
    //         console.log(message);
    //     });

    //     socketCallcenter.on('disconnect', () => {
    //         console.log('Disconnected from server callcenter');
    //     });

    //     return () => {
    //         socketCallcenter.disconnect();
    //     };
    // }, []);

    return (
        <div>
            <Navigation />
        </div>
    );
};

export default App;
