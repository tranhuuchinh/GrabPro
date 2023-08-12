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
import useAxios from '../../hooks/useAxios';
import { axiosClient } from '../../api/axios';

const OrderInfo = ({isOpen, content}) => {
  const [contentRender, setContentRender] = useState({
    id: '',
    code: '',
    from: '',
    to: '',
    nameCustomer: '',
    phoneCustomer: '',
    nameDriver: '',
    phoneDriver: '',
    licensePlate: '',
    sale: 0,
    tax: 0,
    price: 0,
    time: [],
    star: 0
  });
  const [idOrderLock, setIdOrderLock] = useState('');

  useEffect(() => {
    if (content !== undefined) {
        setContentRender(content);
    }
  }, [content])

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

  const handleTotal = (price, sale, tax) => {
    const total = covertNum2String('' + price) - covertNum2String('' + sale) + covertNum2String('' + tax);

    return (total + '').replace(/\d(?=(?:\d{3})+$)/g, '$& ');;
  }

  const handleCancelOrder = (id) => {
    setIdOrderLock(id);
  }

  useEffect(() => {
    if (idOrderLock !== '') {
      axiosClient.patch(`/orders/${idOrderLock}`, {status: 3}).then((res) => {
        if (res) {
          window.location.reload();
        }
      });
    }
  }, [idOrderLock])

  return (
    <div className={classes.order__info} style={{width: isOpen ? '35%' : '0', padding: isOpen ? '2rem' : '0'}}>
    <div className={classes['order__info--header']}>
      <p>{contentRender.code}</p>
      <p style={{backgroundColor:
                    contentRender.status === 3
                    ? '#f3d6bd'
                    : contentRender.status === 0
                    ? '#c8adad'
                    : contentRender.status === 1
                    ? '#f6dbc4'
                    : contentRender.status === 2
                    ? '#99E0B9'
                    : 'black',
                color:
                    contentRender.status === 3
                    ? '#FF2F2F'
                    : contentRender.status === 0
                    ? '#333'
                    : contentRender.status === 1
                    ? '#F38522'
                    : contentRender.status === 2
                    ? '#00B14F'
                    : 'black'}}
        >{contentRender.status === 0 ? 'Đã tạo' : contentRender.status === 1 ? 'Đã nhận' : contentRender.status === 2 ? 'Hoàn thành' : 'Đã hủy'}</p>
    </div>

    <div className={classes['order__info--route']}>
      <h4>Lộ trình</h4>
      <div className={classes['order__info--route-line']}></div>
      <div className={classes['order__info--route-content']}>
        <p>{contentRender.from}</p>
        <p>{contentRender.to}</p>
      </div>
    </div>

    <div className={classes['order__info--customer']}>
      <h4>Khách hàng</h4>
      
      <div className={classes['order__info--customer-wrapper']}>
        {/* <div className={classes['order__info--customer-img']}>
          <img src={contentRender.customer.image} />
        </div> */}

        <div className={classes['order__info--customer-content']}>
          <p>{contentRender.nameCustomer}</p>
          <span>{contentRender.phoneCustomer}</span>
        </div>
      </div>
    </div>

    <div className={classes['order__info--driver']}>
      <h4>Tài xế</h4>
      
      <div className={classes['order__info--driver-wrapper']}>
        {/* <div className={classes['order__info--driver-img']}>
          <img src={contentRender.driver.image} />
        </div> */}

        <div className={classes['order__info--driver-content']}>
          <div className={classes['order__info--driver-content-left']}>
            <p>{contentRender.nameDriver}</p>
            <span>{contentRender.phoneDriver}</span>
          </div>

          <div className={classes['order__info--driver-content-right']}>
            <p>Biển số</p>
            <span>{contentRender.licensePlate}</span>
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
          <p>{contentRender.tax}</p>
        </div>
      </div>

      <div className={classes['order__info--common-line']}></div>

      <div className={classes['order__info--common-total']}>
        <p>Tổng cộng</p>
        <span>{handleTotal(contentRender.price, contentRender.sale, contentRender.tax)}</span>
      </div>
    </div>

    <div className={classes['order__info--time']}>
      <h4>Thời gian</h4>

      <div className={classes['order__info--time-wrapper']}>
        <div className={classes['order__info--time-wrapper-left']}>
          <div></div>
        </div>

        <div className={classes['order__info--time-wrapper-right']}>
          {contentRender.time!== undefined && contentRender.time.map((item, idx) => <p key={+idx}>{item}</p>)}
        </div>
      </div>
    </div>

    <div className={classes['order__info--feedback']}>
      <h4>Feedback</h4>

      <div className={classes['order__info--feedback-wrapper']}>
        <div className={classes['order__info--feedback-wrapper-square']}>
          <h5>Khách hàng</h5>

          <div className={classes['order__info--feedback-wrapper-square-star']}>
            {Array.from({ length: contentRender.star }).map((index) => <FontAwesomeIcon icon={faStar} key={+index} className={classes['order__info--feedback-wrapper-square-star-ic']}/>)}
          </div>

          <div className={classes['order__info--feedback-wrapper-square-content']}>
            <p>{star > 3 ? 'Tốt' : "Tệ"}</p>
          </div>
        </div>

        {/* <div className={classes['order__info--feedback-wrapper-square']}>
          <h5>Tài xế</h5>

          <div className={classes['order__info--feedback-wrapper-square-star']}>
            {Array.from({ length: contentRender.star }).map(index => <FontAwesomeIcon icon={faStar} key={+index} className={classes['order__info--feedback-wrapper-square-star-ic']}/>)}
          </div>
          
          <div className={classes['order__info--feedback-wrapper-square-content']}>
            {contentRender.driver.feedback.content.map((item, index) => <p key={+index}>{item}</p>)}
          </div>
        </div> */}
      </div>
    </div>

    {contentRender.status === 0 && (
      <div className={classes['order__info--destroy']} onClick={() => handleCancelOrder(contentRender.id)}>
        <p>Hủy đơn</p>
      </div>
    )}

  </div>
  );
};

export default OrderInfo;
