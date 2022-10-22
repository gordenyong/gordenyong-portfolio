import React from 'react'
import './about.css'
import Cv from '../../assets/gorden_cv.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
      <div className='about__title-section'>
        <h2 className="section__title about__title">About Me</h2>
        <a href={Cv} target="_blank" className="btn download-cv">My Resume</a>
      </div>

      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I'm Gorden Yong, a junior full-stack software engineer based in Malaysia with a passion for building delightful digital 
            experiences.
            </p>
            <p className="about__description">
            After completing my bachelors degree in Electrical and Electronics Engineering, I decided to pursue my passion in software engineering. In early 2022, I completed the 12-week Software Engineering Immersive Bootcamp at General Assembly, Sydney.</p>
            <p className="about__description">
            My experience studying as an Engineering student for 4 years has given me a unique, wholistic perspective on projects and project teams which led me to possess 3 core beliefs while working in a team: 
            </p>
            
            <p className="about__description">1. Willingness to learn</p>
            <p className="about__description beliefs">2. Being a team player and helping my team mates wherever I can</p>
            <p className="about__description beliefs">3. Creativity and adaptability</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
