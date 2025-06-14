import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../../redux/reducers/authSlice';
import styless from './Login.module.scss'; 

const Login = () => {


    const goToRegister = () => {
        navigate('/register')
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser({ email, password }));
        navigate('/profile');
    };

    return (
        <div className={styless['login-container']}>
            <form className={styless['login-form']} onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className={styless['error-message']}>{error.message || 'Xəta baş verdi'}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className={styless['buttons']}>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                </div>
            <div className={styless['login']}>
            <p> "No account yet? Sign up now!"</p>
            <button onClick={goToRegister}>Sign Up</button>
        </div>
            </form>

        </div>
    );
};

export default Login;
