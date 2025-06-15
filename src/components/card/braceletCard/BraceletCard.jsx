import React, { useEffect, useState } from 'react';
import styles from "./BraceletCard.module.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishlistThunk, postWishlistThunk } from '../../../redux/reducers/wishlistSlice';


const BraceletCard = ({ item, AddBasket }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  const isInWishlist = wishlist.some(product => product._id === item._id);
  const [liked, setLiked] = useState(isInWishlist);

  useEffect(() => {
    setLiked(isInWishlist);
  }, [wishlist, isInWishlist]);

  const handleAddToBasket = (event) => {
    event.preventDefault();
    event.stopPropagation();
    AddBasket(item);
  };

  const handleWishlistClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (liked) {
      dispatch(deleteWishlistThunk(item._id));
    } else {
      dispatch(postWishlistThunk(item));
    }

    setLiked(!liked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={item.image} alt="bracelet" />
          <div className={styles.buttons}>
            <button onClick={handleWishlistClick}>
              {liked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
            </button>
            <button onClick={handleAddToBasket}>
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
        <div className={styles.text}>
          <h3>{item.title}</h3>
          <p>{item.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default BraceletCard;
