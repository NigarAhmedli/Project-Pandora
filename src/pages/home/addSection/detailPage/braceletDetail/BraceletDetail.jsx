import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BraceletDetail.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postBasketThunk } from '../../../../../redux/reducers/basketSlice';

const BraceletDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [bracelet, setBracelet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleAddToBasket = () => {
  dispatch(postBasketThunk(bracelet));
};


  useEffect(() => {
    const fetchBracelet = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/bracelet/${id}`);
        setBracelet(res.data);
      } catch (err) {
        setError('Xəta baş verdi');
      } finally {
        setLoading(false);
      }
    };

    fetchBracelet();
  }, [id]);

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!bracelet) return <p className={styles.notFound}>Biləklik tapılmadı.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={bracelet.image} alt={bracelet.title} />
      </div>
      <div className={styles.info}>
        <h2>{bracelet.title}</h2>
        <p className={styles.price}>{bracelet.price}$</p>
        <p className={styles.description}>{bracelet.description || "Təsviri yoxdur."}</p>
  <button className={styles.button} onClick={handleAddToBasket}>
  Səbətə əlavə et
</button>
      </div>
    </div>
  );
};

export default BraceletDetail;
