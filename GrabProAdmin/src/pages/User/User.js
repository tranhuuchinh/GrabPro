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

const price = '10 000 000 vnd';

const listCustomer = [
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      },
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      },
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      },
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Khóa'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
];

const listDriver = [
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
];

const listStaff = [
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
  {
    id: 'HEGSN12',
    image: Rose,
    name: 'Trần Anh Khôi',
    phone: '083 235 5698',
    address: '135B, Trần Hưng Đạo',
    star: 4,
    history: [
      {
        time: '20:00 14/06/2023',
        location: '224, Nguyễn Văn Cừ',
        stt: 'Hủy đơn'
      }
    ],
    status: 'Hoạt động'
  },
];


const User = () => {
  const [renderData, setRenderData] = useState(listCustomer);
  const [search, setSearch] = useState(renderData);
  const [isTab, setIsTap] = useState('Customer');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [indexItem, setIndexItem] = useState(-1);
  const [valueInput, setValueInput] = useState('');

  const handleTab = (e) => {
    if (e.target.innerText === 'Customer'){
      setIsTap('Customer');
      setRenderData(listCustomer);
    }
    else if (e.target.innerText === 'Driver') {
      setIsTap('Driver');
      setRenderData(listDriver);
    }
    else{
      setIsTap('Staff');
      setRenderData(listStaff);
    }
  };

  const handleOpen = (id) => {
    setIsOpen(true);

    setIndexItem(id);
  }

  const handleChangeInput = (e) => {
    setValueInput(() => e.target.value);
  }

  useEffect(() => {
    if (valueInput.trim() === '') {
      setRenderData(search);
    } else {
      // Ngược lại, thực hiện tìm kiếm trong danh sách gốc
      const filteredData = renderData.filter(item => item.name.trim().includes(valueInput));
      setRenderData(filteredData);
    }
  }, [valueInput]);

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
                  <p style={{width: '12%'}}>{item.id}</p>
                  <p style={{width: '22%'}}>{item.name}</p>
                  <p style={{width: '22%'}}>{item.phone}</p>
                  <p style={{width: '28%'}}>{item.address}</p>
                  <p style={{
                              width: '16%',
                              color:
                                item.status === 'Khóa'
                                  ? '#FF2F2F'
                                  : item.status === 'Hoạt động'
                                  ? '#00B14F'
                                  : 'black',
                            }}>
                    {item.status}
                  </p>
                </div>
              ))
            }
          </div>        
        </div>
      </div>

      <UserInfo isOpen={isOpen} content={renderData[indexItem]}  />
      {isOpenModal && <ModalAdd onCloseModal={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default User;
