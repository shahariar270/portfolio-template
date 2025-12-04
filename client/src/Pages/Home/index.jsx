import React, { useState, useEffect } from 'react';
import profile from '../../assets/images/home.jpg';

const Home = () => {
  const roles = ["Shahariar", "React Developer", "MERN Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setAnimate(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="st-portfolio--home">
      <div className="background-shapes">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="st-portfolio--home__content">
        <div className="hero-text">
          <h1>
            Hello, I’m{' '}
            <span className={`highlight ${animate ? 'slide-up' : 'slide-down'}`}>
              {roles[currentRole]}
            </span>
          </h1>
          <p>
            I build dynamic web applications and interactive experiences using modern web technologies
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Shahariar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
