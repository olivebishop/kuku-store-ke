import React, { useState } from 'react';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import './css/Footer.css';
import logo from '../assets/logo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email === '') {
      // Show error toast notification
      toast.error('Email is required!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Perform your subscription logic here

      // Show success toast notification
      toast.success('Successfully subscribed!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset the email input field
      setEmail('');
    }
  };

  return (
    <footer className="footer bg-black text-white py-5">
      <ToastContainer />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-12">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="col-md-4 col-sm-12">
            <p className="mb-3 mb-md-0">Subscribe to our newsletter:</p>
            <form onSubmit={handleSubscribe}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="col-md-4 col-sm-12">
            
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <ul className="social-icons d-flex justify-content-center">
              <li><a href="https://www.linkedin.com/in/epoultry"><AiOutlineLinkedin /></a></li>
              <li><a href="https://www.twitter.com/epoultry"><AiOutlineTwitter /></a></li>
              <li><a href="https://www.facebook.com/epoultry"><AiOutlineFacebook /></a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center mb-0">
              &copy; 2023 All rights reserved - ePoultry | Page designed by <a href="https://olivebishop.vercel.app/" style={{ textDecoration: 'none', color: 'red' }}>OliveBishop 💕</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
