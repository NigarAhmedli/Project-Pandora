import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.scss';

const Detail = () => {
  const { id } = useParams(); // URL-dən id-ni alırıq
  const [product, setProduct] = useState(null); // Məhsulu state-ə yığırıq

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`) // Backend-dən məhsulu alırıq
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className={styles.loading}>Yüklənir...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p className={styles.price}>{product.price} AZN</p>
        <button className={styles.btn}>Səbətə əlavə et</button>
      </div>
    </div>
  );
};

export default Detail;
