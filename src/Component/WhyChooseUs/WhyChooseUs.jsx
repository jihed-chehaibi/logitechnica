import React from 'react';
import './WhyChooseUs.css';
import {
  FcAlarmClock,
  FcApproval,
  FcLike,
  FcBullish,
} from 'react-icons/fc';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import teamImage from '../../assets/team.jpg';

const stats = [
  {
    icon: <FcAlarmClock className="fc-icon" />,
    number: 9,
    suffix: '+',
    label: "Ans d’expériences",
  },
  {
    icon: <FcApproval className="fc-icon" />,
    number: 35,
    suffix: '+',
    label: 'Projets terminé',
  },
  {
    icon: <FcLike className="fc-icon" />,
    number: 25,
    suffix: '+',
    label: 'Clients satisfaits',
  },
  {
    icon: <FcBullish className="fc-icon" />,
    number: 90,
    suffix: '%',
    label: 'Résultats garantis',
  },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="whyChoose-section">
      <h2 className="whyChoose-title">Pourquoi nous choisir ?</h2>
      <div className="whyChoose-container">
        <div className="whyChoose-wrapper">
          {/* Left side: cards */}
          <div className="whyChoose-left" ref={ref}>
            {stats.map((item, index) => (
              <div className="whyChoose-card" key={index}>
                <div className="icon">{item.icon}</div>
                <div className="number">
                  {inView ? <CountUp end={item.number} duration={2} /> : 0}
                  {item.suffix}
                </div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Right side: image card */}
          <div className="whyChoose-image-card">
            <img src={teamImage} alt="Équipe" />
            <div className="image-overlay">
              <h3>
                +30 <br /> collaborateurs
                dans<br /> 5 pays
                en Europe et Asie.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
