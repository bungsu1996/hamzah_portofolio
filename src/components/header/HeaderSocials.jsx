import React from 'react';
import {BsLinkedin,BsFacebook} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
