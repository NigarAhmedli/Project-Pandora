import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "./Category.module.scss";
import { postBasketThunk } from '../../../../../../redux/reducers/basketSlice';
import { postWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice';
import { getCollectionThunk } from '../../../../../../redux/reducers/collectionSlice';
import CollectionCard from '../../../../../../components/card/collectionCard/CollectionCard';

const Category = () => {
    const dispatch = useDispatch();

    const collection = useSelector(state => state.collection.collection);
    const loading = useSelector(state => state.collection.loading);
    const error = useSelector(state => state.collection.error);
    const wishlist = useSelector(state => state.wishlist.wishlist);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("price");

    useEffect(() => {
        dispatch(getCollectionThunk());
    }, [dispatch]);

    const AddBasket = (item) => {
        dispatch(postBasketThunk(item));
    };

    const AddWishlist = (item) => {
        const existingCollection = wishlist.find(collection => collection._id === item._id);
        if (!existingCollection) {
            dispatch(postWishlistThunk(item));
        }
    };

    // Filter + Sort
const filteredCollection = collection
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
    const collectionPage = 4;
    const lastCollectionIndex = page * collectionPage;
    const firstCollectionIndex = lastCollectionIndex - collectionPage;
    const currentCollection = filteredCollection.slice(firstCollectionIndex, lastCollectionIndex);

    const totalPages = Math.ceil(filteredCollection.length / collectionPage);
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
                <h1>COLLECTION</h1>
            </div>

            {/* Control Panel */}
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

            {/* Product List */}
            <div className={styles.collection}>
                {currentCollection.map(item => (
                    <div key={item._id} className={styles.collectionWrapper}>
                        <Link to={`/collection/${item._id}`} className={styles.collectionLink}>
                            <CollectionCard
                             item={item}
                                AddBasket={AddBasket}
                                AddWishlist={AddWishlist}
                            />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
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

export default Category;
