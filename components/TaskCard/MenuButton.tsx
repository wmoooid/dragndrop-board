import type { NextPage } from 'next';
import styles from '../../styles/TaskCard.module.css';

const MenuButton: NextPage = () => {
  return (
    <span className={styles.menuButton}>
      <svg width='24' height='7' viewBox='0 0 24 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='3' cy='3.5' r='3' fill='#D9D9D9' />
        <circle cx='12' cy='3.5' r='3' fill='#D9D9D9' />
        <circle cx='21' cy='3.5' r='3' fill='#D9D9D9' />
      </svg>
    </span>
  );
};

export default MenuButton;
