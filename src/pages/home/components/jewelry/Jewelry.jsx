import React from 'react'
import styles from './Jewelry.module.scss'

const Jewelry = () => {
  return (
        <div className={styles.container}>
        <div className={styles.content}>
<div className={styles.text}>
<h1>JEWELRY</h1>
<p>Pandora brings the best in design and craftsmanship to its selection of jewelry - our charms, earrings , bracelets, necklaces , rings and much more are made to celebrate and display the confidence, loves and passions of the people who wear them.</p>
</div>

<div className={styles.cards}>
<div className={styles.card}>
<div className={styles.imgs}>
<img src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwc2fbd5b8/productimages/singlepackshot/793924C01_RGB.jpg?sw=200&sh=200&sm=fit&sfrm=png&bgcolor=F5F5F5" alt="" />
</div>
<a href="">JEWELRY</a>
</div>
<div className={styles.card}>
<div className={styles.imgs}>
<img src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw5055c19b/productimages/singlepackshot/793439C00_RGB.jpg?sw=200&sh=200&sm=fit&sfrm=png&bgcolor=F5F5F5" alt="" />
</div>
<a href="">MINI CHARMS</a>
</div>
<div className={styles.card}>
<div className={styles.imgs}>
<img src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw499480b5/productimages/singlepackshot/590719_RGB.jpg?sw=200&sh=200&sm=fit&sfrm=png&bgcolor=F5F5F5" alt="" />
</div>
<a href="">BRACELETS</a>
</div>
<div className={styles.card}>
<div className={styles.imgs}>
<img src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw0e0ed0aa/productimages/singlepackshot/363883C01_RGB.jpg?sw=200&sh=200&sm=fit&sfrm=png&bgcolor=F5F5F5" alt="" />
</div>
<a href="">NECKLACES</a>
</div>
<div className={styles.card}>
<div className={styles.imgs}>
<img src="https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwdc7a1576/productimages/singlepackshot/193828C01_RGB.jpg?sw=200&sh=200&sm=fit&sfrm=png&bgcolor=F5F5F5" alt="" />
</div>
<a href="">RINGS</a>
</div>

</div>



        </div>


    </div>
  )
}

export default Jewelry