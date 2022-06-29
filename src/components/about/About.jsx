/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './About.css';
// import ME from './../../assets/me-about.jpg';
import ME1 from './../../assets/1_1.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME1} alt="About Images" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
            <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
            <VscFolderLibrary className="about__icons" />
              <h5>Project</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur illo 
            dolorum, odio obcaecati nostrum perferendis voluptatem voluptates nisi sequi veniam 
            sapiente blanditiis quidem necessitatibus quod eum! Temporibus, eveniet hic!
          </p>
          <a href="#" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About