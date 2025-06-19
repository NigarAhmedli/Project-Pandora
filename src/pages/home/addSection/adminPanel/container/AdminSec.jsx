import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFormikThunk, deleteProductThunk, getProductsThunk } from '../../../../../redux/reducers/productSlice';
import styles from './AdminSec.module.scss';
import { useFormik } from 'formik';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { deleteCharmsThunk, getCharmsThunk, postCharmsThunk } from '../../../../../redux/reducers/charmsSlice';
import { getBraceletThunk, postBraceletThunk, deleteBraceletThunk } from '../../../../../redux/reducers/braceletSlice';
import { deleteNecklacesThunk, getNecklacesThunk, postNecklacesThunk } from '../../../../../redux/reducers/necklacesSlice';
import { deleteCollectionThunk, getCollectionThunk, postCollectionThunk } from '../../../../../redux/reducers/collectionSlice';
import { deleteRingsThunk, getRingsThunk, postRingsThunk } from '../../../../../redux/reducers/ringsSlice';


const AdminSec = () => {
  const dispatch = useDispatch();

  const bracelet = useSelector((state) => state.bracelet.bracelet);
  const charms = useSelector((state) => state.charms.charms);
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const necklaces = useSelector((state) => state.necklaces.necklaces);
const collection = useSelector((state) => state.collection.collection);
const rings = useSelector((state) => state.rings.rings);


  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('price');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const deleteProducts = (id) => {
    dispatch(deleteProductThunk(id));
  };

  const deleteCharms = (id) => {
    dispatch(deleteCharmsThunk(id));
  };

  const filteredProducts = products
    ?.filter((item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
    ?.sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (sortBy === 'title') {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      return 0;
    });

const filteredBracelets = bracelet
  ?.filter((item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
  ?.sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });



  const filteredCharms = charms
    ?.filter((item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
    ?.sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (sortBy === 'title') {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      return 0;
    });


    const filteredNecklaces = necklaces
  ?.filter((item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
  ?.sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });

const filteredCollection = collection
  ?.filter((item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
  ?.sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });

const filteredRings = rings
  ?.filter((item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
  ?.sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });




  const getSortButtonLabel = () => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? 'Ən ucuzdan bahaya' : 'Ən bahadan ucuza';
    } else if (sortBy === 'title') {
      return sortOrder === 'asc' ? 'A-dan Z-yə' : 'Z-dən A-ya';
    }
    return 'Sırala';
  };

const formik = useFormik({
  initialValues: {
    image: '',
    title: '',
    price: '',
    category: '',
  },
onSubmit: async (values, { resetForm }) => {
  try {
    if (values.category === 'products') {
      await dispatch(addFormikThunk(values));
    } else if (values.category === 'charms') {
      await dispatch(postCharmsThunk(values));
    } else if (values.category === 'bracelet') {
      await dispatch(postBraceletThunk(values)); // <-- bracelet üçün ayrıca
    }
    else if (values.category === 'necklaces') {
  await dispatch(postNecklacesThunk(values));
} else if (values.category === 'collection') {
  await dispatch(postCollectionThunk(values));
} else if (values.category === 'rings') {
  await dispatch(postRingsThunk(values));
}

    resetForm();
    setIsFormVisible(false);
  } catch (error) {
    console.error('Məhsul əlavə edilərkən xəta baş verdi:', error);
  }
},

});


  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCharmsThunk());
    dispatch(getBraceletThunk());
      dispatch(getNecklacesThunk());
  dispatch(getCollectionThunk());
  dispatch(getRingsThunk());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Yüklənir....</p>;
  if (error) return <p className={styles.error}>Xəta baş verdi......</p>;

  return (
    <div className={styles.admin}>
      <div className={styles.addSection}>
        <button className={styles.addButton} onClick={toggleFormVisibility}>
          Add new product {isFormVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isFormVisible && (
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <label htmlFor="image">Image</label>
            <input id="image" name="image" type="text" onChange={formik.handleChange} value={formik.values.image} placeholder="Enter image URL" />
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} placeholder="Enter the product title" />
            <label htmlFor="price">Price</label>
            <input id="price" name="price" type="number" onChange={formik.handleChange} value={formik.values.price} placeholder="Enter the price" />
            <label htmlFor="category">Category</label>
<select
  id="category"
  name="category"
  onChange={formik.handleChange}
  value={formik.values.category}
  className={styles.select}
>
  <option value="">Choose category</option>
  <option value="products">Products</option>
  <option value="charms">Charms</option>
  <option value="bracelet">Bracelet</option> 
  <option value="necklaces">Necklaces</option>
<option value="collection">Collection</option>
<option value="rings">Rings</option>

</select>



            <button type="submit" className={styles.submitButton}>ADD</button>
          </form>
        )}
      </div>

      <div className={styles.controlPanel}>
        <h1>Admin Panel</h1>
        <input className={styles.searchInput} type="text" placeholder="Məhsul axtar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select className={styles.sortSelect} onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="price">Qiymətə görə</option>
          <option value="title">Başlığa görə</option>
        </select>
        <button className={styles.sortButton} onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          {getSortButtonLabel()}
        </button>
      </div>



<h2>Bracelets</h2>
<table className={styles.productTable}>
  <thead>
    <tr>
      <th>Şəkil</th>
      <th>Başlıq</th>
      <th>Qiymət</th>
      <th>Funksiya</th>
    </tr>
  </thead>
  <tbody>
    {filteredBracelets?.map((item) => (
      <tr key={item._id}>
        <td>
          <img className={styles.productImage} src={item.image} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.price}$</td>
        <td>
          <button className={styles.deleteButton} onClick={() => dispatch(deleteBraceletThunk(item._id))}>Sil</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



      <h2>Charms</h2>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Şəkil</th>
            <th>Başlıq</th>
            <th>Qiymət</th>
            <th>Funksiya</th>
          </tr>
        </thead>
        <tbody>
          {filteredCharms &&
            filteredCharms.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className={styles.box}>
                    <img className={styles.productImage} src={item.image} alt={item.title} />
                  </div>
                </td>
                <td>
                  <div className={styles.box}>{item.title}</div>
                </td>
                <td>
                  <div className={styles.box}>{item.price}$</div>
                </td>
                <td>
                  <div className={styles.box}>
                    <button className={styles.deleteButton} onClick={() => deleteCharms(item._id)}>Sil</button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>


<h2>Necklaces</h2>
<table className={styles.productTable}>
  <thead>
    <tr>
      <th>Şəkil</th>
      <th>Başlıq</th>
      <th>Qiymət</th>
      <th>Funksiya</th>
    </tr>
  </thead>
  <tbody>
    {filteredNecklaces?.map((item) => (
      <tr key={item._id}>
        <td>
          <img className={styles.productImage} src={item.image} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.price}$</td>
        <td>
          <button className={styles.deleteButton} onClick={() => dispatch(deleteNecklacesThunk(item._id))}>Sil</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



<h2>Collection</h2>
<table className={styles.productTable}>
  <thead>
    <tr>
      <th>Şəkil</th>
      <th>Başlıq</th>
      <th>Qiymət</th>
      <th>Funksiya</th>
    </tr>
  </thead>
  <tbody>
    {filteredCollection?.map((item) => (
      <tr key={item._id}>
        <td>
          <img className={styles.productImage} src={item.image} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.price}$</td>
        <td>
          <button className={styles.deleteButton} onClick={() => dispatch(deleteCollectionThunk(item._id))}>Sil</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



<h2>Rings</h2>
<table className={styles.productTable}>
  <thead>
    <tr>
      <th>Şəkil</th>
      <th>Başlıq</th>
      <th>Qiymət</th>
      <th>Funksiya</th>
    </tr>
  </thead>
  <tbody>
    {filteredRings?.map((item) => (
      <tr key={item._id}>
        <td>
          <img className={styles.productImage} src={item.image} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.price}$</td>
        <td>
          <button className={styles.deleteButton} onClick={() => dispatch(deleteRingsThunk(item._id))}>Sil</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>






      <h2>Products</h2>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Şəkil</th>
            <th>Başlıq</th>
            <th>Qiymət</th>
            <th>Funksiya</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts &&
            filteredProducts.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className={styles.box}>
                    <img className={styles.productImage} src={item.image} alt={item.title} />
                  </div>
                </td>
                <td>
                  <div className={styles.box}>{item.title}</div>
                </td>
                <td>
                  <div className={styles.box}>{item.price}$</div>
                </td>
                <td>
                  <div className={styles.box}>
                    <button className={styles.deleteButton} onClick={() => deleteProducts(item._id)}>Sil</button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSec;