import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../../../redux/reducers/authSlice';
import styless from './Login.module.scss'; 

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Refresh zamanı input-ları sıfırla
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ email, password }));
    navigate('/profile');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styless['login-container']}>
      <form
        className={styless['login-form']}
        onSubmit={handleSubmit}
        name="loginForm"
        autoComplete="off"
      >
        <h2>Login</h2>

        {error && (
          <p className={styless['error-message']}>
            {error.message || 'Xəta baş verdi'}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
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
          <p>"No account yet? Sign up now!"</p>
          <button onClick={goToRegister}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
