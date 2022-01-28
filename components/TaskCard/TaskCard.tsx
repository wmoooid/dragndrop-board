import { NextPage } from 'next';
import { ReactNode } from 'react';
import styles from '../../styles/TaskCard.module.css';

interface ICardProps {
  children: ReactNode;
}

const TaskCard: NextPage<ICardProps> = ({ children }) => {
  return <li className={styles.box}>{children}</li>;
};

export default TaskCard;
