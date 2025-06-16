import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.scss';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error(err);
        setError('Xəta baş verdi');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!product) return <p className={styles.notFound}>Məhsul tapılmadı.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p className={styles.price}>{product.price} AZN</p>
        <p className={styles.description}>{product.description || "Təsviri yoxdur."}</p>
        <button className={styles.btn}>Səbətə əlavə et</button>
      </div>
    </div>
  );
};

export default Detail;
