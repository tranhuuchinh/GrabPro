import React, { useEffect, useState } from 'react';
import classes from './OrderInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
    faStar as star,
  } from '@fortawesome/free-regular-svg-icons';
import Rose from '../../assets/imgs/Rose.jpg';

const OrderInfo = ({isOpen, content}) => {
  const [contentRender, setContentRender] = useState({
    id: '',
    customer: {
      name: '',
      phone: '',
      image: '',
      feedback: {
        star: 0,
        content: []
      },
    },
    driver: {
      name: '',
      phone: '',
      image: '',
      licensePlate: '',
      feedback: {
        star: 0,
        content: []
      },
    },
    pickupLocation: '',
    destination: '',
    price: '',
    sale: '',
    tolls: '',
    time: [],
    status: ''
  });

  useEffect(() => {
    if (content !== undefined) {
        setContentRender(content);
    }
  }, [content])

  const covertNum2String= (price) => {
    if (price){
      return +price.split(' ').join('');
    }
  }

  const handleTotal = (price, sale, tolls) => {
    const total = covertNum2String(price) - covertNum2String(sale) + covertNum2String(tolls);

    return (total + '').replace(/\d(?=(?:\d{3})+$)/g, '$& ');;
  }

  return (
    <div className={classes.order__info} style={{width: isOpen ? '35%' : '0', padding: isOpen ? '2rem' : '0'}}>
    <div className={classes['order__info--header']}>
      <p>{contentRender.id}</p>
      <p style={{backgroundColor:
                    contentRender.status === 'Đã hủy'
                    ? '#f3d6bd'
                    : contentRender.status === 'Đã tạo'
                    ? '#c8adad'
                    : contentRender.status === 'Đã nhận'
                    ? '#f6dbc4'
                    : contentRender.status === 'Hoàn thành'
                    ? '#99E0B9'
                    : 'black',
                color:
                    contentRender.status === 'Đã hủy'
                    ? '#FF2F2F'
                    : contentRender.status === 'Đã tạo'
                    ? '#333'
                    : contentRender.status === 'Đã nhận'
                    ? '#F38522'
                    : contentRender.status === 'Hoàn thành'
                    ? '#00B14F'
                    : 'black'}}
        >{contentRender.status}</p>
    </div>

    <div className={classes['order__info--route']}>
      <h4>Lộ trình</h4>
      <div className={classes['order__info--route-line']}></div>
      <div className={classes['order__info--route-content']}>
        <p>{contentRender.pickupLocation}</p>
        <p>{contentRender.destination}</p>
      </div>
    </div>

    <div className={classes['order__info--customer']}>
      <h4>Khách hàng</h4>
      
      <div className={classes['order__info--customer-wrapper']}>
        <div className={classes['order__info--customer-img']}>
          <img src={contentRender.customer.image} />
        </div>

        <div className={classes['order__info--customer-content']}>
          <p>{contentRender.customer.name}</p>
          <span>{contentRender.customer.phone}</span>
        </div>
      </div>
    </div>

    <div className={classes['order__info--driver']}>
      <h4>Tài xế</h4>
      
      <div className={classes['order__info--driver-wrapper']}>
        <div className={classes['order__info--driver-img']}>
          <img src={contentRender.driver.image} />
        </div>

        <div className={classes['order__info--driver-content']}>
          <div className={classes['order__info--driver-content-left']}>
            <p>{contentRender.driver.name}</p>
            <span>{contentRender.driver.phone}</span>
          </div>

          <div className={classes['order__info--driver-content-right']}>
            <p>Biển số</p>
            <span>{contentRender.driver.licensePlate}</span>
          </div>
        </div>
      </div>
    </div>

    <div className={classes['order__info--common']}>
      <h4>Thông tin chung</h4>

      <div className={classes['order__info--common-wrapper']}>
        <div className={classes['order__info--common-wrapper-left']}>
          <p>Cước phí</p>
          <p>Khuyến mãi</p>
          <p>Phí cầu đường</p>
        </div>

        <div className={classes['order__info--common-wrapper-right']}>
          <p>{contentRender.price}</p>
          <p>-{contentRender.sale}</p>
          <p>{contentRender.tolls}</p>
        </div>
      </div>

      <div className={classes['order__info--common-line']}></div>

      <div className={classes['order__info--common-total']}>
        <p>Tổng cộng</p>
        <span>{handleTotal(contentRender.price, contentRender.sale, contentRender.tolls)}</span>
      </div>
    </div>

    <div className={classes['order__info--time']}>
      <h4>Thời gian</h4>

      <div className={classes['order__info--time-wrapper']}>
        <div className={classes['order__info--time-wrapper-left']}>
          <div></div>
        </div>

        <div className={classes['order__info--time-wrapper-right']}>
          {contentRender.time.map((item, idx) => <p key={+idx}>{item}</p>)}
        </div>
      </div>
    </div>

    <div className={classes['order__info--feedback']}>
      <h4>Feedback</h4>

      <div className={classes['order__info--feedback-wrapper']}>
        <div className={classes['order__info--feedback-wrapper-square']}>
          <h5>Khách hàng</h5>

          <div className={classes['order__info--feedback-wrapper-square-star']}>
            {Array.from({ length: contentRender.customer.feedback.star }).map((index) => <FontAwesomeIcon icon={faStar} key={+index} className={classes['order__info--feedback-wrapper-square-star-ic']}/>)}
          </div>

          <div className={classes['order__info--feedback-wrapper-square-content']}>
            {contentRender.customer.feedback.content.map((item, index) => <p key={+index}>{item}</p>)}
          </div>
        </div>

        <div className={classes['order__info--feedback-wrapper-square']}>
          <h5>Tài xế</h5>

          <div className={classes['order__info--feedback-wrapper-square-star']}>
            {Array.from({ length: contentRender.driver.feedback.star }).map(index => <FontAwesomeIcon icon={faStar} key={+index} className={classes['order__info--feedback-wrapper-square-star-ic']}/>)}
          </div>
          
          <div className={classes['order__info--feedback-wrapper-square-content']}>
            {contentRender.driver.feedback.content.map((item, index) => <p key={+index}>{item}</p>)}
          </div>
        </div>
      </div>
    </div>

    <div className={classes['order__info--destroy']}>
      <p>Hủy đơn</p>
    </div>
  </div>
  );
};

export default OrderInfo;
