import React from 'react';
import DataTable from '../../components/DataTable/DataTable';
import "./Users.css";
// import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Users Details</h2>
        </div>

     <div className='about-img'>
            {/* <img src = {aboutImg} alt = "" /> */}



            <DataTable/>
          </div>
         
      
      </div>
    </section>
  )
}

export default About
