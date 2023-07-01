import React from 'react';
import Login from '../../components/Login/Login';
import Navbar from '../../components/Navbar/Navbar';

// import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
      
<Navbar/>
     <div className='about-img'>
            {/* <img src = {aboutImg} alt = "" /> */}


<Login/>
          </div>
         
      
      </div>
    </section>
  )
}

export default About
