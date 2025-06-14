import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <header className={styles.header}>
    <div className={styles.navbar}>
      <img src="/logo.svg" alt="Logo"  className={styles.logo}/>
      <ul className={styles.navList}>
        <li>
        <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
        <Link to="/recentpost" className={styles.link}>Recent Post</Link>
        </li>
        <li>
        <Link to="/membership" className={styles.link}>Membership</Link>
        </li>
        <li className={styles.search}>
        <RiSearchLine />
        </li>
      </ul>
    </div>
    </header>
  )
}

export default Navbar
