import React from 'react';
import styles from "./CollectionCard.module.scss";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const CollectionCard = ({ item, AddBasket, AddWishlist, isWished }) => {
  const handleAddToBasket = (event) => {
    event.preventDefault();
    event.stopPropagation();
    AddBasket(item);
  };

  const handleToggleWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();
    AddWishlist(item); // Bu artıq həm əlavə edir, həm də silir (toggle işləyir)
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={item.image} alt="collection" />
          <div className={styles.buttons}>
            <button onClick={handleToggleWishlist}>
              {isWished ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
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

export default CollectionCard;
