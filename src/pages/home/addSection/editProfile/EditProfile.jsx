import React, { useState, useEffect } from 'react';
import styles from './EditProfile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../../redux/reducers/authSlice';

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
    }
  }, [user]);

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form göndərildi"); // ➕ Əlavə et

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  if (avatar) {
    formData.append('avatar', avatar);
  }

  const result = await dispatch(updateUser(formData));
  console.log("Yenilənmə nəticəsi:", result); // ➕ Əlavə et

  if (!result.error) {
    navigate('/profile');
  } else {
    alert("Xəta baş verdi: " + (result.payload?.message || "Bilinməyən xəta"));
  }
};




  return (
    <div className={styles.editContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Profil Məlumatlarını Dəyiş</h2>

<div className={styles.uploadBox}>
  <img
    src={
      avatar
        ? URL.createObjectURL(avatar)
        : user?.avatar
        ? `http://localhost:5000${user.avatar}`
        : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    }
    alt="Preview"
    className={styles.avatarPreview}
  />

  <label className={styles.uploadLabel}>
    📸 Şəkil əlavə et
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setAvatar(e.target.files[0])}
    />
  </label>
</div>



        <input
          type="text"
          placeholder="Ad"
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
          type="tel"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Yadda saxla</button>
      </form>
    </div>
  );
};

export default EditProfile;
