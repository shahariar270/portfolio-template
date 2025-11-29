import React from 'react'
import profile from '../../assets/images/profile.jpg'

const Home = () => {
  return (
    <div className="st-portfolio--home">
      <div className="st-portfolio--home__content">
        <h1>Hello i This Shahariar</h1>
        <p>I build dynamic web applications and interactive experiences using modern web technologies</p>
      </div>
      <div className="">
        <img src={profile} alt="" />
      </div>
    </div>
  )
}

export default Home;