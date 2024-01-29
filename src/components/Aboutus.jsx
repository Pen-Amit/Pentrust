import React, { useState } from 'react';
import { aboutUsContent } from '../constants';
import styles from '../style';

const AboutUs = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (sectionId) => {
    setHoveredSection(sectionId);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <section id='aboutUs' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='flex flex-wrap sm:justify-start justify-center w-full about-us-container relative z-[1]'>
        {aboutUsContent.map((section) => (
          <div
            key={section.id}
            className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ${styles.flipContainer}`}
            onMouseEnter={() => handleMouseEnter(section.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              background: hoveredSection === section.id ? '#3e070d' : 'transparent',
            }}
          >
            <div className={`${styles.flipper} ${hoveredSection === section.id ? styles.flipped : ''}`}>
              <div className={`${styles.front}`}>
                <h2 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{section.title}</h2>
                <p className={`${styles.paragraph} text-white max-w-[600px]`}>{section.content}</p>
              </div>
              <div className={`${styles.back}`}>
                {/* Content for the back side (if needed) */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
