import styles from './SectionHeading.module.css';

const SectionHeading: React.FC = () => {
  return (
    <div className={styles.box}>
      <span className={styles.dot}></span>
      <h3 className={styles.heading}>To Do</h3>
    </div>
  );
};

export default SectionHeading;
