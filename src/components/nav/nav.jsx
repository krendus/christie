import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css';

const Nav = () => {
  return (
    <div className={styles.container}>
        <Link to="/" className={styles.logo} >C.</Link>
        <div>
            <Link to="Work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/about">Contact</Link>
        </div>
    </div>
  )
}

export default Nav