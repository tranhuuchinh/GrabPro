import React, { useEffect, useState, useRef } from 'react';
import classes from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCircleUp, faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { Chart, LinearScale } from 'chart.js';
import useAxios from '../../hooks/useAxios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Home = () => {
    const [isDown, setIsDown] = useState(false);
    const [contentUp, setContentUp] = useState('');
    const [contentDown, setContentDown] = useState('');
    const [price, setPrice] = useState('');
    const [dataHome, setDataHome] = useState({});

    //Calculate width, height chart
    const chartContainerRef = useRef(null);
    const [chartContainerWidth, setWidth] = useState(0);
    const [chartContainerHeight, setHeight] = useState(0);

    //Axios
    const [response, error, isLoading] = useAxios('get', '/homeAdmin', {}, {}, []);
    useEffect(() => {
        if (isLoading === false && !error && response.data) {
            setDataHome({ ...response.data });
            setPrice(`${response.data.totalSale} vnd`);
        }
    }, [isLoading]);

    useEffect(() => {
        // Khi có API thì phải kiểm tra trước
        const spaceText = price.split(' ');

        if (spaceText.length - 2 < 2 && spaceText.length - 2 > 0) {
            // setIsDown(false);
            setContentUp(spaceText[0] + ' ' + spaceText[1]);
            setContentDown(() => {
                let save = '';
                for (let i = 2; i < spaceText.length - 1; i++) {
                    save += spaceText[i] + ' ';
                }
                save = save + spaceText[spaceText.length - 1];

                return save;
            });
        } else if (spaceText.length - 2 <= 0) {
            setIsDown(true);
            setContentUp(spaceText[0] + ' vnd');
            setContentDown('');
        } else {
            setContentUp(spaceText[0] + ' ' + spaceText[1]);
            setContentDown(() => {
                let save = '';
                for (let i = 2; i < spaceText.length - 1; i++) {
                    save += spaceText[i] + ' ';
                }
                save = save + spaceText[spaceText.length - 1];

                return save;
            });
        }
    }, [price]);

    useEffect(() => {
        if (chartContainerRef.current) {
            setWidth(chartContainerRef.current.getBoundingClientRect().width);
            setHeight(chartContainerRef.current.getBoundingClientRect().height);
        }
    }, []);

    useEffect(() => {
        Chart.register(LinearScale);
    }, []);

    const handleFormatTime = () => {
        if (dataHome && dataHome.timeUpdate) {
            const dateString = dataHome.timeUpdate;

            const dateObj = new Date('2023-09-08T17:33:12.091+00:00');

            const hours = dateObj.getUTCHours();
            const minutes = dateObj.getUTCMinutes();
            const day = dateObj.getUTCDate();
            const month = dateObj.getUTCMonth() + 1;
            const year = dateObj.getUTCFullYear();

            const formattedString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} ngày ${
                day < 10 ? '0' : ''
            }${day}/${month < 10 ? '0' : ''}${month}/${year}`;

            return formattedString;
        }
    };

    const data = [
        { name: 'January', Sales: 10 },
        { name: 'February', Sales: 20 },
        { name: 'March', Sales: 30 },
        { name: 'April', Sales: 25 },
        { name: 'May', Sales: 40 },
        { name: 'June', Sales: 35 },
        { name: 'July', Sales: 50 },
    ];
    return (
        <div className={classes.home}>
            <p className={classes.home__time}>Thống kê lúc {handleFormatTime()}</p>

            <div className={classes.home__data}>
                <div className={classes['home__data--item']}>
                    <div className={classes['home__data--item-left']}>
                        <span>Doanh thu hôm nay</span>
                        <p id="price" style={{ fontSize: isDown && '5rem' }}>
                            {contentUp}
                            <span>{contentDown}</span>
                        </p>
                    </div>

                    <div className={classes['home__data--item-right']}>
                        <div>
                            <p>100%</p>
                            <FontAwesomeIcon icon={faCircleUp} className={classes['home__data--item-right-icon']} />
                        </div>
                    </div>
                </div>

                <div className={classes['home__data--item']}>
                    <div className={classes['home__data--item-left']}>
                        <span>Tổng số đơn hàng</span>
                        <h4>{dataHome.totalOrder}</h4>
                    </div>

                    <div className={classes['home__data--item-right']}>
                        <div>
                            <p>100%</p>
                            <FontAwesomeIcon icon={faCircleUp} className={classes['home__data--item-right-icon']} />
                        </div>
                    </div>
                </div>

                <div className={classes['home__data--item']}>
                    <div className={classes['home__data--item-left']}>
                        <span>Khách hàng mới</span>
                        <h4>{dataHome.totalCustomer}</h4>
                    </div>

                    <div className={classes['home__data--item-right']}>
                        <div>
                            <p className={classes.increase}>100%</p>
                            <FontAwesomeIcon
                                icon={faCircleUp}
                                className={`${classes['home__data--item-right-icon']} ${classes.increase}`}
                            />
                        </div>
                    </div>
                </div>

                <div className={classes['home__data--item']}>
                    <div className={classes['home__data--item-left']}>
                        <span>Tài xế mới</span>
                        <h4>{dataHome.totalDriver}</h4>
                    </div>

                    <div className={classes['home__data--item-right']}>
                        <div>
                            <p>100%</p>
                            <FontAwesomeIcon icon={faCircleUp} className={classes['home__data--item-right-icon']} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.home__order}>
                <div className={classes['home__order--chart']} ref={chartContainerRef}>
                    <LineChart width={chartContainerWidth - 40} height={chartContainerHeight - 40} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Sales" stroke="blue" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>

                <div className={classes['home__order--about']}>
                    <div className={classes['home__order--about-same']}>
                        <div>
                            <FontAwesomeIcon
                                icon={faMobileScreenButton}
                                className={`${classes['home__order--about-same-icon']} ${classes.decrease}`}
                            />
                            <p>Đơn hàng đặt qua ứng dụng</p>
                        </div>
                        <h4>{dataHome.totalOrderApp}</h4>
                    </div>

                    <div className={classes['home__order--about-same']}>
                        <div>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={`${classes['home__order--about-same-icon']} ${classes.decrease}`}
                            />
                            <p>Đơn hàng đặt qua Call center</p>
                        </div>
                        <h4>{dataHome.totalOrderCall}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

