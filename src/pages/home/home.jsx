import React from 'react'
import Nav from '../../components/nav';
import doubleArrowIcon from '../../assets/DoubleDown.svg'
import projectImg from '../../assets/p-img.png';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import ProjectCard from '../../components/project-card/project-card';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <div className={styles.container}>
        <Nav />
        <div className={styles.sectionOne}>
            <h1>Hi, I'm Christianah.</h1>
            <p> I approach design and leadership with a focus on people,
                 establishing empathy for both the people who make and the people who use the products I help bring to life. My design practice combines design thinking, user research
                 and experience strategy, all with a relentless focus on the user.
            </p>
            <Link to="/about">More about me <img src={doubleArrowIcon} alt="" /></Link>
        </div>
        <div className={styles.sectionTwo}>
            <h1>Featured projects</h1>
            <div className={styles.projects}>
                <ProjectCard 
                    heading="INDICINA"
                    tools={["User Research", "UI Design", "UX Design"]}
                    imgSrc={projectImg}
                    body="Indicina offers solutions aimed at enabling and enhancing commerce within the automotive sector. "
                    link="/"
                />
                 <ProjectCard 
                    heading="INDICINA"
                    tools={["User Research", "UI Design", "UX Design"]}
                    imgSrc={projectImg}
                    body="Indicina offers solutions aimed at enabling and enhancing commerce within the automotive sector. "
                    link="/"
                />
                <ProjectCard 
                    heading="INDICINA"
                    tools={["User Research", "UI Design", "UX Design"]}
                    imgSrc={projectImg}
                    body="Indicina offers solutions aimed at enabling and enhancing commerce within the automotive sector. "
                    link="/"
                />
                 <ProjectCard 
                    heading="INDICINA"
                    tools={["User Research", "UI Design", "UX Design"]}
                    imgSrc={projectImg}
                    body="Indicina offers solutions aimed at enabling and enhancing commerce within the automotive sector. "
                    link="/"
                />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home;