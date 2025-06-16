import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CharmsDetail.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postBasketThunk } from '../../../../../redux/reducers/basketSlice';

const CharmsDetail = () => {
const dispatch = useDispatch();


const handleAddToBasket = () => {
  dispatch(postBasketThunk(charm));
};


  const { id } = useParams();
  const [charm, setCharm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharm = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/charms/${id}`);
        setCharm(res.data);
      } catch (err) {
        setError('Xəta baş verdi');
      } finally {
        setLoading(false);
      }
    };

    fetchCharm();
  }, [id]);

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!charm) return <p className={styles.notFound}>Charm tapılmadı.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={charm.image} alt={charm.title} />
      </div>
      <div className={styles.info}>
        <h2>{charm.title}</h2>
        <p className={styles.price}>{charm.price}$</p>
        <p className={styles.description}>{charm.description || "Təsviri yoxdur."}</p>
        <button className={styles.button} onClick={handleAddToBasket}>
  Səbətə əlavə et
</button>

      </div>
    </div>
  );
};

export default CharmsDetail;
