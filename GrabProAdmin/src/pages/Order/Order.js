import React, { useEffect, useState } from 'react';
import classes from './Order.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import OrderInfo from './OrderInfo';
import Rose from '../../assets/imgs/Rose.jpg';

const price = '10 000 000 vnd';

const listApp = [
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã nhận'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã hủy'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Hoàn thành'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS12',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
];

const listCall = [
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
  {
    id: 'HEGS13',
    customer: {
      name: 'Trần Anh Khôi',
      phone: '089 898 1234',
      image: Rose,
      feedback: {
      star: 4,
      content: ['Thân thiện', 'Nhiệt tình', 'Đúng giờ']
    },
    },
    driver: {
      name: 'Trần Duy Khương',
      phone: '039 998 1634',
      image: Rose,
      licensePlate: '71B-99.999',
      feedback: {
        star: 4,
        content: ['Hòa đồng', 'Vui tính']
      },
    },
    pickupLocation: '135 Trần Hưng Đạo, quận 1, TPHCM',
    destination: '224 Nguyễn Văn Cừ, quận 5, TPHCM',
    price: '23 000',
    sale: '10 000',
    tolls: '5 000',
    time: ['20:00 16/06/23', '20:05 16/06/23', '20:35 16/06/23'],
    status: 'Đã tạo'
  },
];

const Order = () => {
  const [renderData, setRenderData] = useState(listApp);
  const [search, setSearch] = useState(renderData);
  const [isTab, setIsTap] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [indexItem, setIndexItem] = useState(-1);
  const [valueInput, setValueInput] = useState('');

  const handleTab = (e) => {
    if (e.target.innerText === 'Đặt qua ứng dụng'){
      setIsTap(true);
      setRenderData(listApp);
    }
    else {
      setIsTap(false);
      setRenderData(listCall);
    }
  };

  const handleOpen = (id) => {
    setIsOpen(true);

    setIndexItem(id);
  }

  const covertNum2String= (price) => {
    if (price){
      return +price.split(' ').join('');
    }
  }

  const handleTotal = (price, sale, tolls) => {
    const total = covertNum2String(price) - covertNum2String(sale) + covertNum2String(tolls);

    return (total + '').replace(/\d(?=(?:\d{3})+$)/g, '$& ');;
  }

  const handleChangeInput = (e) => {
    setValueInput(() => e.target.value);
  }

  useEffect(() => {
    if (valueInput.trim() === '') {
      setRenderData(search);
    } else {
      // Ngược lại, thực hiện tìm kiếm trong danh sách gốc
      const filteredData = renderData.filter(item => item.customer.name.includes(valueInput));
      setRenderData(filteredData);
    }
  }, [valueInput]);

  return (
    <div className={classes.order}>
      <div className={classes.order__wrapper} style={{width: isOpen ? '65%' : '100%', marginRight: !isOpen ? '0' : ''}}>
        <div className={classes.order__header}>
          <div className={classes['order__header--left']}>
            <p onClick={handleTab} className={classes[isTab ? 'order__header--left-active' : 'order__header--left-none']}>Đặt qua ứng dụng</p>
            <span onClick={handleTab} className={classes[!isTab ? 'order__header--left-active' : 'order__header--left-none']}>Đặt qua call center</span>
          </div>

          <div className={classes['order__header--right']}>
            <input type='text' value={valueInput} onChange={(e) => handleChangeInput(e)} placeholder='Tìm kiếm'/>
            <FontAwesomeIcon icon={faSearch} className={classes['order__header--right-ic']}/>
          </div>
        </div>

        <div className={classes.order__table}>
          <div className={classes['order__table--titlebar']} >
            <p style={{width: '12%'}}>ID</p>
            <p style={{width: '20%'}}>Customer</p>
            <p style={{width: '20%'}}>Driver</p>
            <p style={{width: '12%'}}>Total</p>
            <p style={{width: '20%'}}>Time</p>
            <p style={{width: '16%'}}>Status</p>
          </div>

          <div className={classes['order__table--list']}>
            {
              renderData.map((item, index) => (
                <div className={classes['order__table--row']} 
                    key={+index} 
                    style={{backgroundColor: index%2 !== 0 ? '#F8F8F8' : '#fff'}}
                    onClick={() => handleOpen(index)}
                >
                  <p style={{width: '12%'}}>{item.id}</p>
                  <p style={{width: '20%'}}>{item.customer.name}</p>
                  <p style={{width: '20%'}}>{item.driver.name}</p>
                  <p style={{width: '12%'}}>{handleTotal(item.price, item.sale, item.tolls)}</p>
                  <p style={{width: '20%'}}>{item.time[0]}</p>
                  <p style={{
                              width: '16%',
                              color:
                                item.status === 'Đã hủy'
                                  ? '#FF2F2F'
                                  : item.status === 'Đã tạo'
                                  ? '#333'
                                  : item.status === 'Đã nhận'
                                  ? '#F38522'
                                  : item.status === 'Hoàn thành'
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

      <OrderInfo isOpen={isOpen} content={renderData[indexItem]}  />
    </div>
  );
};

export default Order;
