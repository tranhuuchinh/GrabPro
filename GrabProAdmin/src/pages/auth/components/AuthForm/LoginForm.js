import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './AuthForm.module.scss';
import { validatePassword, validatePhone } from './handler';
import auth from '../../../../utils/auth';
// import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useMergeState from '../../../../hooks/useMergeState';
// import { init } from '../../../../store/reducers/cartSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const axiosPrivate = useAxiosPrivate();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useMergeState({
    error: '',
    loading: false
  });

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   if (phone !== '' && password !== '' && phone.length >= 10) {
  //     setState({
  //       loading: true,
  //       error: ''
  //     });
  //     const object = {
  //       phone,
  //       password,
  //     };
  //     axiosPrivate.post(
  //       '/auth/login',
  //       object
  //     ).then(res => {
  //       auth.login(res.data);
  //       axiosPrivate.get(`/carts?idUser=${res.data.data.user._id}`)
  //         .then(res => {
  //           dispatch(init(res.data.data));
  //           if (auth.role() === 'user') {
  //             navigate('/');
  //           } else {
  //             // navigate('/dashboard');
  //             window.location.replace('http://localhost:3001/dashboard');
  //           }
  //         })
  //         .catch(e => {
  //           navigate('/');
  //         });
  //     }).catch(err => {
  //       console.log(err);
  //       setState({
  //         loading: false,
  //         error: 'Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!'
  //       });
  //     });
  //   }
  // };

  return (
    <form className={classes['auth-form']}>
      <div
        className={classes['auth-form__form']}
        onClick={() => { }}
      >
        <h3>Đăng nhập</h3>

        <InputCT
          placeholder="Nhập số điện thoại"
          type="tel"
          setValue={setPhone}
          validation={validatePhone}
          maxLength="10"
          required
        />
        <InputCT
          placeholder="Nhập mật khẩu"
          type="password"
          message={state.error}
          setValue={setPassword}
          validation={validatePassword}
          required
        />
        <Link
          to="/forgot"
          className={classes.forgot}
        >
          Quên mật khẩu
        </Link>

        <ButtonCT
          primary
          borderRadius
          medium
          loading={state.loading}
          className={classes.btn}
        >
          Đăng nhập
        </ButtonCT>

      </div>
    </form>
  );
};

export default LoginForm;
