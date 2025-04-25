import React from 'react';
import './TestimonialsSection.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Ali . B",
    role: "CEO - StartupTech",
    text: "Logitechnica a révolutionné notre site web. Équipe professionnelle et résultats impressionnants.",
  },
  {
    name: "Sonia . K",
    role: "Responsable marketing",
    text: "Travail rapide, efficace et très à l’écoute. Je recommande à 100% les services de Logitechnica.",
  },
  {
    name: "Youssef . M",
    role: "Fondateur - WebSmart",
    text: "Une expertise technique irréprochable avec une vraie vision business pour notre entreprise.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-carousel">
      <h2 className="carousel-title">Témoignages de nos clients</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="carousel-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <FaQuoteLeft className="carousel-quote" />
              <p className="carousel-text">"{item.text}"</p>
              <div className="carousel-author">
                <strong>{item.name}</strong><br />
                <span>{item.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
