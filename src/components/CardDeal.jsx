import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Emulate APTs<br className='sm:block hidden'/>to stay ahead of them</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Emulate APTs to fortify cybersecurity defenses and proactively safeguarding organizations against sophisticated cyber adversaries
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
