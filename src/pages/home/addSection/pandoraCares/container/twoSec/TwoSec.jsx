import React from 'react'
import styles from './TwoSec.module.scss'

const TwoSec = () => {
  return (
    <div className={styles.cards}>
<div className={styles.card}>
  <img src="https://cdn.media.amplience.net/i/pandora/Assurant%20Care_Ecomm_1000x1000_1?fmt=auto&qlt=80&" alt="" />
  <div className={styles.text}>
<h3>Jewelry Replacement</h3>
<p>Pandora Cares offers a one-time replacement for eligible jewelry items (under $200 excluding any discounts or taxes) in the event of breakdown** or damage.***</p>
<button>Find A Store</button>
  </div>
</div>
<div className={styles.card}>
  <img src="https://cdn.media.amplience.net/i/pandora/aAssurant%20Care_Ecomm_1000x1000_2?fmt=auto&qlt=80&" alt="" />
  <div className={styles.text}>
<h3>Jewelry Repair</h3>
<p>Pandora Cares offers a one-time replacement for eligible jewelry items (under $200 excluding any discounts or taxes) in the event of breakdown** or damage.***</p>
<button>Find A Store</button>
  </div>
</div>
<div className={styles.card}>
  <img src="https://cdn.media.amplience.net/i/pandora/Assurant%20Care_Ecomm_1000x1000_3?fmt=auto&qlt=80&" alt="" />
  <div className={styles.text}>
<h3>Manage My Account</h3>
<p>Pandora Cares offers a one-time replacement for eligible jewelry items (under $200 excluding any discounts or taxes) in the event of breakdown** or damage.***</p>
<button>Manage</button>
  </div>
</div>
    </div>
  )
}

export default TwoSec