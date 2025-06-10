import React from 'react'
import style from './WishlistCard.module.scss'
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = ({item,DeleteWishlist}) => {
  return (
    <div className={style.container}>
<div className={style.card}>
  <div className={style.imgs}>
    <img src={item.image} alt="" />
    <div className={style.function}>
      <div className={style.buttons}>
        <button onClick={DeleteWishlist} ><RiDeleteBin6Line /></button>

      </div>
    </div>

  </div>

</div>
    </div>
  )
}

export default WishlistCard