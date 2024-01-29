import React, { useState } from 'react';
import { Services } from '../constants';
import styles from '../style';

const FeatureCard = ({ icon, title, content, index }) => {
  const handleClick = () => {
    const titleString = typeof title === 'object' ? title.name : title;
    const url = `${window.origin}/${titleString}`;

    // Replace 'https://bing.com' with the actual URL you want to navigate to
    window.open(url, '_blank');
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={handleClick}
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ${styles.flipContainer}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#3e070d' : 'transparent',
        
        

      }}
    >
      <div className={`${styles.flipper} ${hovered ? styles.flipped : ''}`}>
        <div className={`${styles.front}`}>
          <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
          </div>
          <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
              {title}
            </h4>
            <p style={{ color: 'rgb(75, 82, 128)' }} className='font-poppins font-normal text-[16px] leading-[24px]'>
              {content}
            </p>
          </div>
        </div>
        <div className={`${styles.back}`}>
          {/* Content for the back side (if needed) */}
        </div>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id='Services' className='sm:py-16 py-6 undefined flex-col relative'>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {Services.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
