import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../../../../../redux/reducers/authSlice';
import styles from './Register.module.scss';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Refresh zamanı input-ları sıfırla
  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(registerUser({ name, email, password }));

    if (!result.error) {
      await dispatch(loginUser({ email, password }));
      navigate('/profile');
    } else {
      alert(result.payload.message || "Qeydiyyat zamanı xəta baş verdi");
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles['register-container']}>
      <form className={styles['register-form']} onSubmit={handleSubmit} autoComplete="off">
        <h2>Create an Account</h2>

        {error && (
          <p className={styles['error-message']}>
            {typeof error === 'string' ? error : error.message || 'An error occurred'}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <div className={styles['login']}>
          <p>Do you have an account?</p>
          <button type="button" onClick={goToLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
