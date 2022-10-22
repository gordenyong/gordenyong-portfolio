import React from 'react'
import './skills.css'


const Skills = () => {
  return (
    <section className="skills container section" id="skills">

      <div className="skills-header">
            <h2 className="section__title my-skills">My Skills</h2>
            <h4 className='so-far'>(so far)</h4>
      </div>

    <div className="skills__container grid">
        <div className="skills__data grid">
          <div className="skills__info">
            <div className='devicon'>
              <i class="devicon-react-original colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-javascript-plain colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-html5-plain-wordmark colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-css3-plain-wordmark colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-ruby-plain colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-nodejs-plain-wordmark colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-postgresql-plain-wordmark colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-github-original colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-visualstudio-plain colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-python-plain colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-c-plain-wordmark colored devicons"></i>
            </div>
            <div className='devicon'>
              <i class="devicon-arduino-plain colored devicons"></i>
            </div>

          </div>
      </div>

    </div>
    </section>
  )
}

export default Skills