import React, { useEffect } from 'react';
import styles from './Profile.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser, getUser } from '../../../../redux/reducers/authSlice';
import Header from '../../../../components/common/header/Header';

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => navigate('/login'));
  };

  const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;

  if (!user) return <p className={styles.error}>Istifadəçi tapılmadı.</p>;

  return (
    <>
    <Header/>
    <div className={styles.profileContainer}>
      <div className={styles.card}>
      <img
  src={user.avatar ? `http://localhost:5000${user.avatar}` : defaultAvatar}
  alt="User"
  className={styles.avatar}
/>

        <h2>{user.name || 'Ad yoxdur'}</h2>
        <p><strong>Email:</strong> {user.email || '—'}</p>
        <p><strong>Telefon:</strong> {user.phone || '—'}</p>

        <div className={styles.buttons}>
          <button onClick={() => navigate('/edit-profile')} className={styles.editBtn}>
            Məlumatları dəyiş
          </button>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Çıxış et
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;