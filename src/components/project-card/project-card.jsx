import React from 'react'
import { Link } from 'react-router-dom'
import doubleArrowIcon from '../../assets/DoubleDown.svg'
import styles from './style.module.css';

const ProjectCard = ({ imgSrc, tools, heading, body, link }) => {
  return (
    <div className={styles.container}>
        <img src={imgSrc} alt='' className={styles.containerImg}/>
        <div className={styles.details}>
            <div className={styles.tools}>
                {
                  tools.map((val, i) => (
                    <span key={i}>{val}</span>
                  ))
                }
            </div>
            <h2>{heading}</h2>
            <p>{body}</p>
            <Link to={link}>Read case study <img src={doubleArrowIcon} alt="" /></Link>
        </div>
    </div>
  )
}

export default ProjectCard