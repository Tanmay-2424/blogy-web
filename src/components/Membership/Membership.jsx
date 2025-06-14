import React from 'react';
import styles from './Membership.module.css';

const Membership = () => {
  return (
    <div className={styles.membershipContainer}>
      <h2 className={styles.heading}>Development on Demand.</h2>
      <p className={styles.subheading}>Bring your solution to life.</p>

      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.basic}`}>
          <div className={styles.tag}>Basic</div>
          <h3>Optimized for budget</h3>
          <ul>
            <li>2 weeks / sprint</li>
            <li>Developer</li>
            <li>UI/UX Designer</li>
            <li>Project Manager</li>
            <li>Bi-weekly development meeting</li>
            <li>Unlimited tasks & revisions</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>

        <div className={`${styles.card} ${styles.growth}`}>
          <div className={styles.tag}>Growth</div>
          <h3>Optimized for large projects</h3>
          <ul>
            <li>1 week / sprint</li>
            <li>Developer</li>
            <li>UI/UX Designer</li>
            <li>Project Manager</li>
            <li>Weekly development meeting</li>
            <li>Unlimited tasks & revisions</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>

        <div className={`${styles.card} ${styles.enterprise}`}>
          <div className={styles.tag}>Enterprise</div>
          <h3>Optimized for your needs</h3>
          <ul>
            <li>Custom sprint</li>
            <li>2 Developers</li>
            <li>UI/UX Designer</li>
            <li>Project Manager</li>
            <li>Custom development meeting</li>
            <li>Unlimited tasks & revisions</li>
            <li>Pause or cancel anytime</li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
      </div>

      <p className={styles.guarantee}>
        <strong>1st-Month Guarantee –</strong> If you are not 100% satisfied after the first month of working with us, you don't pay!
      </p>
    </div>
  );
};

export default Membership;
