import React, { useEffect, useState } from 'react'
import style from './Wishlist.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlistThunk, getWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice'
import WishlistCard from '../../../../../../components/card/wishlistCard/WishlistCard'

const Wishlist = () => {
  const dispatch=useDispatch()
  const wishlist=useSelector(state=>state.wishlist.wishlist)
  const loading=useSelector(state=>state.wishlist.loading)
  const error=useSelector(state=>state.wishlist.error)
  

  const [page,setPage]=useState(1)
  const itemsPage=4;

  useEffect(()=>{
    dispatch(getWishlistThunk())
  },[dispatch]);



  const handledeleteWishlist=(id)=>{
    dispatch(deleteWishlistThunk(id)).then(()=>{
      dispatch(getWishlistThunk())
    })
  }

  useEffect(()=>{
    const totalPages=Math.ceil(wishlist.length / itemsPage)
    if (wishlist.length>0 && page > totalPages) {
      setPage(totalPages || 1)
    }
  },[wishlist,page])


  const lastWishlist=page * itemsPage;
  const firstWishlist=lastWishlist-itemsPage;
  const currentWishlist=wishlist.slice(firstWishlist,lastWishlist);

 let arrays = [];
const totalPages = Math.ceil(wishlist.length / itemsPage);
for (let i = 1; i <= totalPages; i++) {
  arrays.push(i);
}


  if(loading) return <p>Yüklənir...</p>
  if(error) return <p>Xəta baş verdi...</p>



  return (
    <div className={style.container}>
<div className={style.header}>
<h1>Sevimlilər</h1>
</div>

<div className={style.products}>
{currentWishlist.length > 0 ? (
  currentWishlist.map(item=>(
    <WishlistCard
    key={item._id}
    item={item}
DeleteWishlist={()=>handledeleteWishlist(item._id)}


    />
  ))
) : (
  <p>Siyahınız boşdur!</p>
)}
</div>

{wishlist.length > itemsPage && (
  <div className={style.paginationDots}>
    {arrays.map((pageNumber) => (
      <span
        key={pageNumber}
        className={`${style.dot} ${page === pageNumber ? style.activeDot : ''}`}
        onClick={() => setPage(pageNumber)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setPage(pageNumber);
        }}
        aria-label={`Go to page ${pageNumber}`}
      />
    ))}
  </div>
)}


    </div>
  )
}

export default Wishlist