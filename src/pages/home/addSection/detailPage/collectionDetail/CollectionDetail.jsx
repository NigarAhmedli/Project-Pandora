import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CollectionDetail.module.scss';
import axios from 'axios';

const CollectionDetail = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/collection/${id}`);
        setCollection(res.data);
      } catch (err) {
        setError('Xəta baş verdi');
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [id]);

  if (loading) return <p className={styles.loading}>Yüklənir...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!collection) return <p className={styles.notFound}>Məhsul tapılmadı.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={collection.image} alt={collection.title} />
      </div>
      <div className={styles.info}>
        <h2>{collection.title}</h2>
        <p className={styles.price}>{collection.price}$</p>
        <p className={styles.description}>{collection.description || "Təsviri yoxdur."}</p>
        <button className={styles.button}>Səbətə əlavə et</button>
      </div>
    </div>
  );
};

export default CollectionDetail;
