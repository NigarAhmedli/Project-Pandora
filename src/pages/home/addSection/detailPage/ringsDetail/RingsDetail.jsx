import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RingsDetail.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postBasketThunk } from '../../../../../redux/reducers/basketSlice';

const RingsDetail = () => {

const dispatch = useDispatch();

const handleAddToBasket = () => {
  dispatch(postBasketThunk(ring));
};


  const { id } = useParams();
  const [ring, setRing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRing = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/rings/${id}`);
        setRing(res.data);
      } catch (err) {
        setError('Xəta baş verdi');
      } finally {
        setLoading(false);
      }
    };

    fetchRing();
  }, [id]);

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!ring) return <p className={styles.notFound}>Üzük tapılmadı.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={ring.image} alt={ring.title} />
      </div>
      <div className={styles.info}>
        <h2>{ring.title}</h2>
        <p className={styles.price}>{ring.price}$</p>
        <p className={styles.description}>{ring.description || "Təsviri yoxdur."}</p>
       <button className={styles.button} onClick={handleAddToBasket}>
  Səbətə əlavə et
</button>

      </div>
    </div>
  );
};

export default RingsDetail;
