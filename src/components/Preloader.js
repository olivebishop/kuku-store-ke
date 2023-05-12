import React from 'react';
import '../components/css/Preloader.css'
import loader from '../assets/loader.gif'

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt='Loading spinner' />
    </div>
  );
};

export default Preloader;