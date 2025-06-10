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
          <a href="/charms">Charms</a>
          <a href="/bracelet">Bracelets</a>
          <a href="/rings">Rings</a>
          <a href="/necklaces">Necklaces & Pendants</a>
          <a href="/adminpanel">Earrings</a>
          <a href="">Lab-Grown Diamonds</a>
        </div>
        <div className={styles.card}>
          <p>SERVICES</p>
          <a href="/about">My Pandora</a>
          <a href="/basket">Basket</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/login">Login</a>
          <a href="/cares">Pandora Cares</a>
          <a href="">Engraving</a>
        </div>
        <div className={styles.card}>
          <p>ABOUT US</p>
          <a href="/about">About Pandora</a>
          <a href="/termscon">Terms Conditions</a>
          <a href="/cares">Cares</a>
          <a href="">Cookie Policy</a>
          <a href="">Craftsmanship</a>
          <a href="">Store Finder</a>
        </div>
      </div>

      <div className={styles.threediv}>
        <div className={styles.three}>
          <div>
            <p>© ALL RIGHTS RESERVED. 2025 Pandora</p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <a href="https://www.facebook.com/pandora/" target="_blank">
                <FaFacebook />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.instagram.com/theofficialpandora/" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://twitter.com/Pandora_NA" target="_blank">
                <FaTwitter />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.youtube.com/user/PandoraVideos" target="_blank">
                <FaYoutube />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.pinterest.com/pandora/" target="_blank">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
