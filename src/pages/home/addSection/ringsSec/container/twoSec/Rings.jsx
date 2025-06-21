import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "./Rings.module.scss";
import { getBasketThunk, postBasketThunk } from '../../../../../../redux/reducers/basketSlice';
import { getRingsThunk } from '../../../../../../redux/reducers/ringsSlice';
import RingsCard from '../../../../../../components/card/ringsCard/RingsCard';
import { getWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice';

const Rings = () => {
    const dispatch = useDispatch();

    const rings = useSelector(state => state.rings.rings);
    const loading = useSelector(state => state.rings.loading);
    const error = useSelector(state => state.rings.error);
    const wishlist = useSelector(state => state.wishlist.wishlist);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("price");

    useEffect(() => {
        dispatch(getRingsThunk());
        dispatch(getWishlistThunk());
    }, [dispatch]);

     const AddBasket = async (item) => {
     await dispatch(postBasketThunk(item));   // məhsulu əlavə et
     dispatch(getBasketThunk());              // səbəti yenilə
   };

    const filteredRings = rings
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

    const [page, setPage] = useState(1);
    const ringsPage = 4;
    const lastRingsIndex = page * ringsPage;
    const firstRingsIndex = lastRingsIndex - ringsPage;
    const currentRings = filteredRings.slice(firstRingsIndex, lastRingsIndex);
    const totalPages = Math.ceil(filteredRings.length / ringsPage);
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
                <h1>RINGS</h1>
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

            <div className={styles.rings}>
                {currentRings.map(item => (
                    <div key={item._id} className={styles.ringsWrapper}>
                        <Link to={`/rings/${item._id}`} className={styles.ringsLink}>
                            <RingsCard
                                item={item}
                                AddBasket={AddBasket}
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
    );
};

export default Rings;