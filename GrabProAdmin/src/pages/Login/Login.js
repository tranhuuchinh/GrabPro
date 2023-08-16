import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import { axiosClient } from '../../api/axios';
import auth from '../../utils/auth';

const Login = () => {
    const [passwordusername, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(loginType);
        try {
            const response = await axiosClient.post('/auth/login', {
                phone: passwordusername,
                password: password,
                loginType: 'phone',
            });

            auth.login(response);

            // Xử lý logic sau khi đăng nhập thành công, ví dụ chuyển hướng trang.
            // Nếu API trả về thông tin user hoặc token, bạn có thể lưu vào state hoặc localStorage.
            navigate('/'); // Ví dụ chuyển hướng đến trang dashboard sau khi đăng nhập thành công.
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

