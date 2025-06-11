import React from 'react';
import style from './WishlistCard.module.scss';
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = ({ item, DeleteWishlist }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <img src={item.image} alt={item.title} />
          <button onClick={DeleteWishlist} className={style.deleteBtn}>
            <RiDeleteBin6Line />
          </button>
        </div>
        <div className={style.content}>
          <h3>{item.title}</h3>
          <p>{item.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
