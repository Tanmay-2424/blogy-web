import React from 'react'
import styles from './Hero.module.css'

function Hero () {
  return (
    <div className={styles.Container}>
      <div className={styles.mainPart}>
      <div className={styles.article}>
        <strong>Hey, we're Blogy.</strong> See <br />our thoughts, stories and <br /> ideas.
      </div>
      
    <div className={styles.input}>
      <div className={styles.text}>
        <input type="email" name="email" placeholder="Your email address" />

        <button className={styles.button}>Subscribe</button>
      </div>

      <div className={styles.h4}>
        Get the email newsLetter and unlock access to
        <br />
        members-only content and updates.
      </div>
    </div>
    </div>
    <div className={styles.imageContainer}>
      <img src="./back_image.jpg" 
      alt="Bloggy content" className={styles.heroImage} />

    </div>
    <div>
    <div className={styles.bottomLine}></div>
    </div>
    </div>
  );
}

export default Hero;
