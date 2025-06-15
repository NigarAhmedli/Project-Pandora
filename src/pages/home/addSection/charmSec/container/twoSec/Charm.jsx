// Charm.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "./Charm.module.scss";
import CharmsCard from '../../../../../../components/card/charmsCard/CharmsCard';
import { getCharmsThunk } from '../../../../../../redux/reducers/charmsSlice';
import { getWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice';
import { postBasketThunk } from '../../../../../../redux/reducers/basketSlice';

const Charm = () => {
    const dispatch = useDispatch();

    const charms = useSelector(state => state.charms.charms);
    const loading = useSelector(state => state.charms.loading);
    const error = useSelector(state => state.charms.error);
    const wishlist = useSelector(state => state.wishlist.wishlist);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("price");

    useEffect(() => {
        dispatch(getCharmsThunk());
        dispatch(getWishlistThunk());
    }, [dispatch]);

    const AddBasket = (item) => {
        dispatch(postBasketThunk(item));
    };

    // Filter + Sort
    const filteredCharms = charms
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
    const charmsPage = 8;
    const lastCharmsIndex = page * charmsPage;
    const firstCharmsIndex = lastCharmsIndex - charmsPage;
    const currentCharms = filteredCharms.slice(firstCharmsIndex, lastCharmsIndex);
    const totalPages = Math.ceil(filteredCharms.length / charmsPage);
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
                <h1>CHARMS</h1>
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
            <div className={styles.charms}>
                {currentCharms.map(item => (
                    <div key={item._id} className={styles.charmsWrapper}>
                        <Link to={`/charms/${item._id}`} className={styles.charmsLink}>
                            <CharmsCard 
                                item={item}
                                AddBasket={AddBasket}
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

export default Charm;
