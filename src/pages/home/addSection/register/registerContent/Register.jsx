import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from'./Register.module.scss';
import { registerUser } from '../../../../../redux/reducers/authSlice';

const Register = () => {

        const goToLogin = () => {
            navigate('/login')
        }
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerUser({ name, surname, email, password}));
    
        if (!result.error) {
            navigate('/login');
        }
    };
    

    return (
        <div className={styles['register-container']}>
    <form className={styles['register-form']} onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        {error && <p className={styles['error-message']}>{error.message || 'An error occurred'}</p>}
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
 
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
  
        <button className={styles['button']} type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <div className={styles['login']}>
            <p>Do you have an account?</p>
            <button onClick={goToLogin}>Login in</button>
        </div>
    </form>
</div>

    );
};

export default Register;
