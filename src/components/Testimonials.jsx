  import React from 'react'
  import { feedback } from '../constants'
  import styles from '../style'
  import Feedback from './Feedback'

  const Testimonials = () => {
    return (
      <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
        
        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
          {feedback.map((card) => (
            <Feedback key={card.id} {...card}/>        
          ))}
        </div>      
      </section>
    )
  }

  export default Testimonials
