import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css';
import arrow from '../../assets/arrow.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.contact}>
          <p>Ready to connect with me?</p>
          <Link to="/contact">Feel free to reach out <img src={arrow} alt="" /></Link>
        </div>
        <div className={styles.bottom}>
          <div>
              <a href="/">Dribble</a>
              <a href="/">Linkedin</a>
              <a href="/">Twitter</a>
          </div>
          <p>&copy; Christianah 2021</p>
        </div>
    </div>
  )
}

export default Footer