import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './NecklacesDetail.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postBasketThunk } from '../../../../../redux/reducers/basketSlice';

const NecklacesDetail = () => {

const dispatch = useDispatch();

const handleAddToBasket = () => {
  dispatch(postBasketThunk(necklace));
};


  const { id } = useParams();
  const [necklace, setNecklace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNecklace = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/necklaces/${id}`);
        setNecklace(res.data);
      } catch (err) {
        setError('Xəta baş verdi');
      } finally {
        setLoading(false);
      }
    };

    fetchNecklace();
  }, [id]);

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!necklace) return <p className={styles.notFound}>Boyunbağı tapılmadı.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={necklace.image} alt={necklace.title} />
      </div>
      <div className={styles.info}>
        <h2>{necklace.title}</h2>
        <p className={styles.price}>{necklace.price}$</p>
        <p className={styles.description}>
          {necklace.description || "Təsviri yoxdur."}
        </p>
        <button className={styles.button} onClick={handleAddToBasket}>
  Səbətə əlavə et
</button>

      </div>
    </div>
  );
};

export default NecklacesDetail;
