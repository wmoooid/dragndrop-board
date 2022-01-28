import type { NextPage } from 'next';
import styles from '../styles/TaskList.module.css';
import Breaker from './Breaker';
import CreationDate from './TaskCard/CreationDate';
import Description from './TaskCard/Description';
import Heading from './TaskCard/Heading';
import MenuButton from './TaskCard/MenuButton';
import Preview from './TaskCard/Preview';
import Tags from './TaskCard/Tags';
import TaskCard from './TaskCard/TaskCard';

const TaskList: NextPage = () => {
  return (
    <ul className={styles.box}>
      <TaskCard>
        <Heading />
        <Breaker />
        <MenuButton />
        <Preview />
        <Breaker />
        <Tags />
        <Breaker />
        <Description />
        <Breaker />
        <CreationDate />
      </TaskCard>
    </ul>
  );
};

export default TaskList;
