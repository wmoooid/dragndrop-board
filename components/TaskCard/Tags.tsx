import type { NextPage } from 'next';
import styles from '../../styles/TaskCard.module.css';

const Tags: NextPage = () => {
  return (
    <ul className={styles.tagsBox}>
      <li className={styles.tagsRed}>Design</li>
      <li className={styles.tagsGreen}>Templates</li>
      <li className={styles.tagsBlue}>Dashboard</li>
    </ul>
  );
};

export default Tags;
