import { Link } from "react-router-dom";
import styles from './NotFound.module.scss';
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Oops!</h1>
                <h2 className={styles.subheading}>404-Səhifə tapılmadı</h2>
                <p className={styles.text}>
                    Axtardığınız səhifə mövcud deyil və ya silinmiş ola bilər.
                </p>
                <Link to="/" className={styles.button}>
                    <FaArrowLeft /> Əsas səhifəyə qayıt
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
