import React, { useEffect, useState } from 'react';
import classes from './User.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import UserInfo from './UserInfo';
import Rose from '../../assets/imgs/Rose.jpg';
import ModalAdd from './Modal/ModalAdd';
import useAxios from '../../hooks/useAxios';

const User = () => {
  const [listCustomer, setListCustomer] = useState([]);
  const [listDriver, setListDriver] = useState([]);
  const [listStaff, setListStaff] = useState([]);
  const [listAccount, setListAccount] = useState([]);
  const [listLocation, setListLocation] = useState([]);
  const [listOrder, setListOrder] = useState([]);
  const [renderData, setRenderData] = useState(listCustomer);
  const [search, setSearch] = useState(renderData);
  const [isTab, setIsTap] = useState('Customer');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [indexItem, setIndexItem] = useState(-1);
  const [valueInput, setValueInput] = useState('');
  const [dataSend, setDataSend] = useState({});

  const [responseOrder, errorOrder, isLoadingOrder] = useAxios('get', '/orders', {}, {}, []);
  const [responseCustomer, errorCustomer, isLoadingCustomer] = useAxios('get', '/user/customer', {}, {}, []);
  const [responseDriver, errorDriver, isLoadingDriver] = useAxios('get', '/user/driver', {}, {}, []);
  const [responseStaff, errorStaff, isLoadingStaff] = useAxios('get', '/user/hotline', {}, {}, []);
  const [responseAccount, errorAccount, isLoadingAccount] = useAxios('get', '/user/account', {}, {}, []);
  const [responseLocation, errorAccountLocation, isLoadingAccountLocation] = useAxios('get', '/user/location', {}, {}, []);

  useEffect(() => {
    if (isLoadingOrder === false && !errorOrder && responseOrder.data) {
      setListOrder(responseOrder.data);
    }
}, [responseOrder]);

  useEffect(() => {
    if (isLoadingCustomer === false && !errorCustomer && responseCustomer.data) {
      setListCustomer(responseCustomer.data);
    }
  }, [responseCustomer]);

  useEffect(() => {
    if (isLoadingDriver === false && !errorDriver && responseDriver.data) {
      setListDriver(responseDriver.data);
    }
  }, [responseDriver]);

  useEffect(() => {
    if (isLoadingStaff === false && !errorStaff && responseStaff.data) {
      setListStaff(responseStaff.data);
    }
  }, [responseStaff]);

  useEffect(() => {
    if (isLoadingAccount === false && !errorAccount && responseAccount.data) {
      setListAccount(responseAccount.data);
    }
  }, [responseAccount]);

  useEffect(() => {
    if (isLoadingAccountLocation === false && !errorAccountLocation && responseLocation.data) {
      setListLocation(responseLocation.data);
    }
  }, [responseLocation]);

  useEffect(() => {
    setRenderData(listCustomer);
  }, [listCustomer])

  useEffect(() => {
    if (valueInput.trim() === '') {
      setRenderData(search);
    } else {
      // Ngược lại, thực hiện tìm kiếm trong danh sách gốc
      const filteredData = renderData.filter(item => item.name.trim().includes(valueInput));
      setRenderData(filteredData);
    }
  }, [valueInput]);

  const handleTab = (e) => {
    if (e.target.innerText === 'Customer'){
      setIsOpen(false);
      setIsTap('Customer');
      setRenderData(listCustomer);
    }
    else if (e.target.innerText === 'Driver') {
      setIsOpen(false);
      setIsTap('Driver');
      setRenderData(listDriver);
    }
    else{
      setIsOpen(false);
      setIsTap('Staff');
      setRenderData(listStaff);
    }
  };

  const handlePhoneNumber = (id) => {
    const account = listAccount.find(item => item._id === id)    

    return account ? account.phone : ''
  }

  const handleLocation = (id) => {
    if (id !== undefined) {
      const location = listLocation.find(item => item._id === id)
      
      return location ? location.address : ''
    }
    return '';
  }

  const handleHistoryOrder = (id) => {
    if (isTab === 'Customer') {
      const listHistory = listOrder.filter(item => item.idCustomer === id);

      return listHistory ? listHistory : [];
    }
    else if (isTab === 'Driver') {
      const listHistory = listOrder.filter(item => item.idDriver === id);

      return listHistory ? listHistory : [];
    }
    else{
      return [];
    }
  }

  const handleOpen = (id) => {
    setIsOpen(true);

    const data = {
      id: renderData[id].idAccount,
      code: id + 1,
      name: renderData[id].fullname,
      phone: handlePhoneNumber(renderData[id].idAccount),
      location: handleLocation(renderData[id].location),
      star: isTab === 'Customer' || isTab === 'Staff' ? 0 : renderData[id].rating,
      listHistoryOrder: handleHistoryOrder(renderData[id].idAccount), 
      type: isTab
    }

    setDataSend({...data});

    setIndexItem(id);
  }

  const handleChangeInput = (e) => {
    setValueInput(() => e.target.value);
  }

  return (
    <div className={classes.user}>
      <div className={classes.user__wrapper} style={{width: isOpen ? '65%' : '100%', marginRight: !isOpen ? '0' : ''}}>
        <div className={classes.user__header}>
          <div className={classes['user__header--left']}>
            <p onClick={handleTab} className={classes[isTab === 'Customer' ? 'user__header--left-active' : 'user__header--left-none']}>Customer</p>
            <span onClick={handleTab} className={classes[isTab === 'Driver' ? 'user__header--left-active' : 'user__header--left-none']}>Driver</span>
            <span onClick={handleTab} className={classes[isTab === 'Staff' ? 'user__header--left-active' : 'user__header--left-none']}>Staff</span>
          </div>

          <div className={classes['user__header--right']} style={{display: 'flex', alignItems: 'center'}}>
              <input type='text' value={valueInput} onChange={(e) => handleChangeInput(e)} placeholder='Tìm kiếm'/>
              <FontAwesomeIcon icon={faSearch} className={classes['user__header--right-ic']}/>
              <FontAwesomeIcon onClick={() => setIsOpenModal(true)} icon={faPlus} style={{padding: '1rem 2rem', borderStyle: 'solid', borderWidth: '2px', borderColor: '#006A2F', borderRadius: '6px', cursor: 'pointer'}}/>
          </div>
        </div>

        <div className={classes.user__table}>
          <div className={classes['user__table--titlebar']}>
            <p style={{width: '12%'}}>ID</p>
            <p style={{width: '22%'}}>Họ và tên</p>
            <p style={{width: '22%'}}>Số điện thoại</p>
            <p style={{width: '28%'}}>Địa chỉ</p>
            <p style={{width: '16%'}}>Status</p>
          </div>

          <div className={classes['user__table--list']}>
            {
              renderData.map((item, index) => (
                <div className={classes['user__table--row']} 
                    key={+index} 
                    style={{backgroundColor: index%2 !== 0 ? '#F8F8F8' : '#fff'}}
                    onClick={() => handleOpen(index)}
                >
                  <p style={{width: '12%'}}>{index + 1}</p>
                  <p style={{width: '22%'}}>{item.fullname}</p>
                  <p style={{width: '22%'}}>{handlePhoneNumber(item.idAccount)}</p>
                  <p style={{width: '28%'}}>{handleLocation(item.location)}</p>
                  <p style={{
                              width: '16%',
                              color:
                                item.status === 1
                                  ? '#FF2F2F'
                                  : 'Hoạt động'
                                  ? '#00B14F'
                                  : 'black',
                            }}>
                    {/* {item.status === 1 ? 'Khóa' : item.status === 0 ? 'Hoạt động' : ''} */}
                    Hoạt động
                  </p>
                </div>
              ))
            }
          </div>        
        </div>
      </div>

      <UserInfo isOpen={isOpen} content={dataSend} type={isTab} />
      {isOpenModal && <ModalAdd onCloseModal={() => setIsOpenModal(false)} type={isTab}/>}
    </div>
  );
};

export default User;
