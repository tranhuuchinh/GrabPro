import React, { useEffect, useState } from 'react';
import classes from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import OrderInfo from './OrderInfo';
import Rose from '../../assets/imgs/Rose.jpg';
import useAxios from '../../hooks/useAxios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import moment from 'moment';

const Order = () => {
    const [listApp, setListApp] = useState([]);
    const [listCall, setListCall] = useState([]);
    const [listCustomer, setListCustomer] = useState([]);
    const [listDriver, setListDriver] = useState([]);
    const [listAccount, setListAccount] = useState([]);
    const [renderData, setRenderData] = useState(listApp);
    const [search, setSearch] = useState([]);
    const [isTab, setIsTap] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    // const [indexItem, setIndexItem] = useState(-1);
    const [valueInput, setValueInput] = useState('');
    const [dataSend, setDataSend] = useState({});

    const [response, error, isLoading] = useAxios('get', '/orders', {}, {}, []);
    const [responseCustomer, errorCustomer, isLoadingCustomer] = useAxios('get', '/user/customer', {}, {}, []);
    const [responseDriver, errorDriver, isLoadingDriver] = useAxios('get', '/user/driver', {}, {}, []);
    const [responseAccount, errorAccount, isLoadingAccount] = useAxios('get', '/user/account', {}, {}, []);

    useEffect(() => {
        if (isLoading === false && !error && response.data) {
            setListApp(response.data.filter((item) => item.method === 0));
            setListCall(response.data.filter((item) => item.method === 1));
        }
    }, [response]);

    useEffect(() => {
        if (isLoadingCustomer === false && !errorCustomer && responseCustomer.data) {
            setListCustomer(responseCustomer.data);
            setSearch(responseCustomer.data)
        }
    }, [responseCustomer]);

    useEffect(() => {
        if (isLoadingDriver === false && !errorDriver && responseDriver.data) {
            setListDriver(responseDriver.data);
        }
    }, [responseDriver]);

    useEffect(() => {
        if (isLoadingAccount === false && !errorAccount && responseAccount.data) {
            setListAccount(responseAccount.data);
        }
    }, [responseAccount]);

    useEffect(() => {
        if (listApp) {
            setRenderData(listApp);
        }
    }, [listApp]);

    // useEffect(() => {
    //     if (search) {
    //         setSearch(renderData);
    //     }
    // }, [renderData]);

    useEffect(() => {
        if (valueInput.trim() === '') {
            if (isTab) setRenderData(listApp);
            else setRenderData(listCall);
        } else {
            // Ngược lại, thực hiện tìm kiếm trong danh sách gốc
            const filteredData = renderData.filter((item) => handleGetCustomer(item.idCustomer).includes(valueInput));
            setRenderData(filteredData);
        }
    }, [valueInput]);

    const handleTab = (e) => {
        if (e.target.innerText === 'Đặt qua ứng dụng') {
            if (isTab) {
                setIsOpen(false);
            }
            setIsTap(true);
            setRenderData(listApp);
        } else {
            if (!isTab) {
                setIsOpen(false);
            }
            setIsTap(false);
            setRenderData(listCall);
        }
    };

    const handlePhoneNumber = (id) => {
        const account = listAccount.find((item) => item._id === id);

        return account ? account.phone : '';
    };

    const handleGetCustomer = (id) => {
        const customer = listCustomer.find((item) => item.idAccount === id);
        return customer ? customer.fullname : '';
    };

    const handleGetDriver = (id) => {
        const driver = listDriver.find((item) => item.idAccount === id);
        return driver ? driver.fullname : '';
    };

    const handleGetLicensePlateDriver = (id) => {
        const driver = listDriver.find((item) => item.idAccount === id);
        return driver ? driver.transport.code : '';
    };

    const handleFormatTime = (time) => {
        const momentObj = moment(time);

        // Định dạng lại thành "20:00 16/06/23"
        const formattedStr = momentObj.format('HH:mm DD/MM/YY');

        return formattedStr;
    };

    const handleOpen = (id) => {
        setIsOpen(true);

        const data = {
            id: renderData[id]._id,
            code: renderData[id].code,
            from: renderData[id].from.address,
            to: renderData[id].to.address,
            nameCustomer: handleGetCustomer(renderData[id].idCustomer),
            phoneCustomer: handlePhoneNumber(renderData[id].idCustomer),
            nameDriver: handleGetDriver(renderData[id].idDriver),
            phoneDriver: handlePhoneNumber(renderData[id].idDriver),
            licensePlate: handleGetLicensePlateDriver(renderData[id].idDriver),
            sale: renderData[id].sale,
            tax: renderData[id].tax,
            price: renderData[id].totalPrice,
            time: [
                handleFormatTime(renderData[id].updatedAt),
                handleFormatTime(renderData[id].updatedAt),
                handleFormatTime(renderData[id].updatedAt),
            ],
            star: renderData[id].feedback,
            status: renderData[id].status,
        };

        setDataSend({ ...data });

        // setIndexItem(id);
    };

    const covertNum2String = (price) => {
        if (price) {
            return +price.split(' ').join('');
        }
    };

    const handleTotal = (price, sale, tax) => {
        const total = covertNum2String('' + price) - covertNum2String('' + sale) + covertNum2String('' + tax);

        return (total + '').replace(/\d(?=(?:\d{3})+$)/g, '$& ');
    };

    const handleChangeInput = (e) => {
        setValueInput(e.target.value);
    };

    return (
        <div className={classes.order}>
            <div
                className={classes.order__wrapper}
                style={{ width: isOpen ? '65%' : '100%', marginRight: !isOpen ? '0' : '' }}
            >
                <div className={classes.order__header}>
                    <div className={classes['order__header--left']}>
                        <p
                            onClick={handleTab}
                            className={classes[isTab ? 'order__header--left-active' : 'order__header--left-none']}
                        >
                            Đặt qua ứng dụng
                        </p>
                        <span
                            onClick={handleTab}
                            className={classes[!isTab ? 'order__header--left-active' : 'order__header--left-none']}
                        >
                            Đặt qua call center
                        </span>
                    </div>

                    <div className={classes['order__header--right']}>
                        <input type="text" onChange={(e) => handleChangeInput(e)} placeholder="Tìm kiếm" />
                        <FontAwesomeIcon icon={faSearch} className={classes['order__header--right-ic']} />
                    </div>
                </div>

                <div className={classes.order__table}>
                    <div className={classes['order__table--titlebar']}>
                        <p style={{ width: '12%' }}>ID</p>
                        <p style={{ width: '20%' }}>Customer</p>
                        <p style={{ width: '20%' }}>Driver</p>
                        <p style={{ width: '12%' }}>Total</p>
                        <p style={{ width: '20%' }}>Time</p>
                        <p style={{ width: '16%' }}>Status</p>
                    </div>

                    <div className={classes['order__table--list']}>
                        {renderData.map((item, index) => (
                            <div
                                className={classes['order__table--row']}
                                key={+index}
                                style={{ backgroundColor: index % 2 !== 0 ? '#F8F8F8' : '#fff' }}
                                onClick={() => handleOpen(index)}
                            >
                                <p style={{ width: '12%' }}>{index + 1}</p>
                                <p style={{ width: '20%' }}>{handleGetCustomer(item.idCustomer)}</p>
                                <p style={{ width: '20%' }}>{handleGetDriver(item.idDriver)}</p>
                                <p style={{ width: '12%' }}>{handleTotal(item.totalPrice, item.sale, item.tax)}</p>
                                <p style={{ width: '20%' }}>{handleFormatTime(item.updatedAt)}</p>
                                <p
                                    style={{
                                        width: '16%',
                                        color:
                                            item.status === 3
                                                ? '#FF2F2F'
                                                : item.status === 0
                                                ? '#333'
                                                : item.status === 1
                                                ? '#F38522'
                                                : item.status === 2
                                                ? '#00B14F'
                                                : 'black',
                                    }}
                                >
                                    {item.status === 0
                                        ? 'Đã tạo'
                                        : item.status === 1
                                        ? 'Đã nhận'
                                        : item.status === 2
                                        ? 'Hoàn thành'
                                        : 'Đã hủy'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <OrderInfo isOpen={isOpen} content={dataSend} />
        </div>
    );
};

export default Order;

