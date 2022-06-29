import React from 'react'
import './Testimonials.css'
import AVA1 from './../../assets/avatar1.jpg';
import AVA2 from './../../assets/avatar2.jpg';
import AVA3 from './../../assets/avatar3.jpg';
import AVA4 from './../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: 'Jajin Al Ghozali',
      avatar: AVA1,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorum autem adipisci incidunt ipsa consectetur explicabo quasi fuga soluta aperiam. Quibusdam ad doloribus, nemo ipsum eum mollitia laborum porro dolorem!'
    },
    {
      id: 2,
      name: 'Dharma Budaya',
      avatar: AVA2,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorum autem adipisci incidunt ipsa consectetur explicabo quasi fuga soluta aperiam. Quibusdam ad doloribus, nemo ipsum eum mollitia laborum porro dolorem!'
    },
    {
      id: 3,
      name: 'Doktrin Racun',
      avatar: AVA3,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorum autem adipisci incidunt ipsa consectetur explicabo quasi fuga soluta aperiam. Quibusdam ad doloribus, nemo ipsum eum mollitia laborum porro dolorem!'
    },
    {
      id: 4,
      name: 'Sahabat Jaya',
      avatar: AVA4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorum autem adipisci incidunt ipsa consectetur explicabo quasi fuga soluta aperiam. Quibusdam ad doloribus, nemo ipsum eum mollitia laborum porro dolorem!'
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, name, avatar, review}, index) => {
            return (
              <SwiperSlide key={id} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}
                  </small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials