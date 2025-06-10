import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom' // Import Link for navigation
import ProductCard from '../../../../components/card/productCard/ProductCard'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'
import styles from "./ProductSec.module.scss"
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice'

const ProductSec = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)
    const wishlist = useSelector(state => state.wishlist.wishlist);

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])

  const AddBasket = (item) => {
    dispatch(postBasketThunk(item))
  }

  const AddWishlist = (item) => {
    const existingProduct = wishlist.find(product => product._id === item._id); // Wishlist-də mövcud olub olmadığını yoxlayırıq
    if (!existingProduct) {
        dispatch(postWishlistThunk(item)); // Əgər məhsul mövcud deyilsə, əlavə et
    }
};


  // Pagination logic
  const [page, setPage] = useState(1)
  const [productsPage, setProductsPage] = useState(8)

  const lastProductIndex = page * productsPage
  const firstProductIndex = lastProductIndex - productsPage
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)

  let dummy = []

  for (let i = 1; i <= Math.ceil(products.length / productsPage); i++) {
    dummy.push(i)
  }

  if (loading) return <p>Yüklenir....</p>
  if (error) return <p>Xeta bas verdi....</p>

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>BEST SELLER</h1>
      </div>

      <div className={styles.products}>
  {currentProducts && currentProducts.map(item => (
    <div key={item._id} className={styles.productWrapper}>
      <Link to={`/product/${item._id}`} className={styles.productLink}>
        <ProductCard 
          item={item} 
          AddBasket={AddBasket} 
          AddWishlist={AddWishlist} 
        />
      </Link>
    </div>
  ))}
</div>

<div className={styles.paginationDots}>
  {dummy.map((item) => (
    <span
      key={item}
      className={`${styles.dot} ${page === item ? styles.active : ''}`}
      onClick={() => setPage(item)}
    ></span>
  ))}
</div>


    </div>
  )
}

export default ProductSec
