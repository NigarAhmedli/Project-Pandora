import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Category.module.scss"
import CategoryCard from '../../../../../../components/card/categoryCard/CategoryCard';
import { getCategoryThunk } from '../../../../../../redux/reducers/categorySlice';


const Category = () => {
    const dispatch = useDispatch();

    const category = useSelector(state => state.category.category);
    const loading = useSelector(state => state.category.loading);
    const error = useSelector(state => state.category.error);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("price");
    const [currentGroup, setCurrentGroup] = useState(0);

    useEffect(() => {
        dispatch(getCategoryThunk());
    }, [dispatch]);

    if (loading) return <p>Yüklənir....</p>;
    if (error) return <p>Xəta baş verdi......</p>;

    const charmsCategory = category.filter(item => item.category === "collection");

    const filteredProducts = charmsCategory
        .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "price") {
                return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
            } else if (sortBy === "title") {
                return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            }
            return 0;
        });

    const groupedProducts = [];
    for (let i = 0; i < filteredProducts.length; i += 3) {
        groupedProducts.push(filteredProducts.slice(i, i + 3));
    }

    const getSortButtonLabel = () => {
        if (sortBy === "price") {
            return sortOrder === "asc" ? "Ən ucuzdan bahaya" : "Ən bahadan ucuza";
        } else if (sortBy === "title") {
            return sortOrder === "asc" ? "A - Z" : "Z - A";
        }
        return "Sırala";
    };

    const nextGroup = () => {
        setCurrentGroup(prev => (prev < groupedProducts.length - 1 ? prev + 1 : 0));
    };

    const prevGroup = () => {
        setCurrentGroup(prev => (prev > 0 ? prev - 1 : groupedProducts.length - 1));
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2>Complete your look..</h2>
            </div>
            <div className={styles.controlPanel}>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    placeholder="Məhsul axtar..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select className={styles.sortSelect} onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="price">Qiymətə görə</option>
                    <option value="title">Başlığa görə</option>
                </select>
                <button className={styles.sortButton} onClick={() => setSortOrder(prev => (prev === "asc" ? "desc" : "asc"))}> 
                    {getSortButtonLabel()}
                </button>
            </div>

            <div className={styles.products}>
                {groupedProducts.length > 0 ? (
                    <div className={styles.productGroup}>
                        {groupedProducts[currentGroup]?.map(item => (
                            <CategoryCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <p>Charms kateqoriyasına aid məhsul tapılmadı.</p>
                )}
            </div>

<div className={styles.btns}>
            {groupedProducts.length > 1 && (
                <div className={styles.navigation}>
                    <button className={styles.prevButton} onClick={prevGroup} disabled={groupedProducts.length <= 1}>‹</button>
                    <button className={styles.nextButton} onClick={nextGroup} disabled={groupedProducts.length <= 1}>›</button>
                </div>
            )}

</div>
        </div>
   
    );
};

export default Category;