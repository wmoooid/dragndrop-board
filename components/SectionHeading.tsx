import type { NextPage } from 'next';
import styles from '../styles/SectionHeading.module.css';

const SectionHeading: NextPage = () => {
  return (
    <div className={styles.box}>
      <span className={styles.dot}></span>
      <h3 className={styles.heading}>To Do</h3>
    </div>
  );
};

export default SectionHeading;
