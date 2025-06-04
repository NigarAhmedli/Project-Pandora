import React from 'react'
import styles from './Footer.module.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
      <div className={styles.container}>
<div className={styles.cards}>
  <div className={styles.card}>
<p>SHOP</p>
<a href="">Charms</a>
<a href="">Bracelets</a>
<a href="">Rings</a>
<a href="">Necklaces & Pendants</a>
<a href="">Earrings</a>
<a href="">Lab-Grown Diamonds</a>
  </div>
  <div className={styles.card}>
<p>SERVICES</p>
<a href="">My Pandora</a>
<a href="">Basket</a>
<a href="">Wishlist</a>
<a href="">Login</a>
<a href="">Engraving</a>
<a href="">Pandora Cares</a>
  </div>
  <div className={styles.card}>
<p>ABOUT US</p>
<a href="">About Pandora</a>
<a href="">News & Investor Relations</a>
<a href="">Sustainability</a>
<a href="">Craftsmanship</a>
<a href="">Careers</a>
<a href="">Store Finder</a>
  </div>

</div>

       <div className={styles.threediv}>
                <div className={styles.three}>
                    <div>
                        <p>© ALL RIGHTS RESERVED. 2025 Pandora</p>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}><FaFacebook /></div>
                        <div className={styles.icon}><FaInstagram /></div>
                        <div className={styles.icon}><FaTwitter /></div>
                        <div className={styles.icon}><FaYoutube /></div>
                        <div className={styles.icon}><FaPinterest /></div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Footer