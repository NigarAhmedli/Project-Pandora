import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Basket.module.scss';
import {
  getBasketThunk,
  updateBasketThunk,
  deleteBasketThunk
} from '../../../../../redux/reducers/basketSlice';

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.basket);
  const loading = useSelector(state => state.basket.loading);
  const error = useSelector(state => state.basket.error);

  const [page, setPage] = useState(1);
  const itemsPage = 3;

  useEffect(() => {
    dispatch(getBasketThunk());
  }, [dispatch]);

  useEffect(() => {
    const totalPage = Math.ceil(basket.length / itemsPage);
    if (basket.length > 0 && page > totalPage) {
      setPage(totalPage || 1);
    }
  }, [basket, page]);

 const getTotalAmount = () => {
  return basket.reduce((total, item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity);
    return total + price * quantity;
  }, 0);
};


  const handleIncrease = (item) => {
    dispatch(updateBasketThunk({ ...item, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateBasketThunk({ ...item, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteBasketThunk(id));
  };

  const handleCheckout = async () => {
    const totalAmount = getTotalAmount();
    if (basket.length === 0) {
      alert("Səbət boşdur!");
      return;
    }
    alert(`Sifarişiniz qəbul edildi. Məbləğ: $${totalAmount.toFixed(2)}`);
  };

  return (
    <div className={styles.container}>
      <h2>Basket</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {basket.length === 0 && !loading ? (
        <p>Səbət boşdur.</p>
      ) : (
        <>
          {basket
            .slice((page - 1) * itemsPage, page * itemsPage)
            .map(item => (
              <div key={item._id} className={styles.basketItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.info}>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <div className={styles.quantityControl}>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <p>Total: ${(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</p>
                </div>
                <div className={styles.actions}>
                  <button onClick={() => handleDelete(item._id)}>Sil</button>
                </div>
              </div>
            ))}

          <div className={styles.summary}>
            <h3>Total Amount: ${getTotalAmount().toFixed(2)}</h3>
            <button onClick={handleCheckout}>Checkout</button>
          </div>

          <div className={styles.pagination}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <span>Page {page}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page * itemsPage >= basket.length}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
