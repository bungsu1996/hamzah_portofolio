/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MUHAMMAD HAMZAH</a>
      <ul>
        <li className="permalinks">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portopolio">Portopolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; HAMZAH PORTOFOLIO. All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer