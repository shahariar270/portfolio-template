import React from 'react'
import profile from '../../assets/images/profile.jpg'

const Home = () => {
  return (
    <section className="st-portfolio--home">
      <div className="background-shapes">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="st-portfolio--home__content">
        <h1>Hello, I’m <span className="highlight">Shahariar</span></h1>
        <p>
          I build dynamic web applications and interactive experiences using modern web technologies
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Home;