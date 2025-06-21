// ProductSec.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../components/card/productCard/ProductCard';
import { getProductsThunk } from '../../../../redux/reducers/productSlice';
import styles from "./ProductSec.module.scss";
import { getBasketThunk, postBasketThunk } from '../../../../redux/reducers/basketSlice';
import { getWishlistThunk } from '../../../../redux/reducers/wishlistSlice';

const ProductSec = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const wishlist = useSelector(state => state.wishlist.wishlist);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("price");

    useEffect(() => {
        dispatch(getProductsThunk());
        dispatch(getWishlistThunk()); 
    }, [dispatch]);

    const AddBasket = async (item) => {
  await dispatch(postBasketThunk(item));  // məhsulu əlavə et
  dispatch(getBasketThunk());             // səbəti yenilə
};

    // Filter + Sort
    const filteredProducts = products
        ?.filter(item =>
            item?.title &&
            item.title.toLowerCase().includes(searchTerm?.toLowerCase() || "")
        )
        .sort((a, b) => {
            if (sortBy === "price") {
                return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
            } else if (sortBy === "title") {
                return sortOrder === "asc"
                    ? a.title.localeCompare(b.title)
                    : b.title.localeCompare(a.title);
            }
            return 0;
        });

    // Pagination
    const [page, setPage] = useState(1);
    const productsPage = 8;
    const lastProductIndex = page * productsPage;
    const firstProductIndex = lastProductIndex - productsPage;
    const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);
    const totalPages = Math.ceil(filteredProducts.length / productsPage);
    const dummy = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (loading) return <p>Yüklənir....</p>;
    if (error) return <p>Xəta baş verdi....</p>;

    const getSortButtonLabel = () => {
        if (sortBy === "price") {
            return sortOrder === "asc" ? "Ən ucuzdan bahaya" : "Ən bahadan ucuza";
        } else if (sortBy === "title") {
            return sortOrder === "asc" ? "A - Z" : "Z - A";
        }
        return "Sırala";
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h1>BEST SELLER</h1>
            </div>

            <div className={styles.controlPanel}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Məhsul axtar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className={styles.sortSelect}
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="price">Qiymətə görə</option>
                    <option value="title">Başlığa görə</option>
                </select>
                <button
                    className={styles.sortButton}
                    onClick={() =>
                        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                    }
                >
                    {getSortButtonLabel()}
                </button>
            </div>

            <div className={styles.products}>
                {currentProducts.map(item => (
                    <div key={item._id} className={styles.productWrapper}>
  <ProductCard
    item={item}
    AddBasket={AddBasket}
  />
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
    );
};

export default ProductSec;