import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import { axiosClient } from '../../api/axios';
import auth from '../../utils/auth';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(loginType);
        try {
            axios
            .post(`http://192.168.1.5:3000/auth/login?role=admin`, {
              phone: username,
              password: password,
              loginType: "phone",
            })
            .then(async (response) => {
              // console.log(response.data);
              if (
                response.data.status == "success" &&
                response.data.data.role == "admin"
              ) {
                // console.log(response.data);
                auth.login(response);
                navigate('/home');
              }
            })
            .catch((error) => {
              // Alert.alert("Tài khoản không tồn tại! Vui lòng kiểm tra lại");
            });
        } catch (error) {
            // Xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi cho người dùng.
            console.error('Đăng nhập thất bại:', error);
        }

        setLoading(false);
    };

    

    

    return (
        <div className="login">
            <div className="login__content">
                {/* <img className="login__img" height={50} width={'auto'} src={Logo} alt="" /> */}

                <h2 className="login__title">Đăng nhập</h2>

                <input
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="login__input"
                    type="text"
                    placeholder="Nhập username"
                />
                <input
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="login__input"
                    type="password"
                    placeholder="Nhập password"
                />

                <ButtonCT loading={isLoading} onClick={handleLogin} large primary className="login__btn">
                    Đăng nhập
                </ButtonCT>
            </div>
        </div>
    );
};

export default Login;

