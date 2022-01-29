import styles from './TaskList.module.css';
import Breaker from '../Breaker';
import TaskCard, { ITaskCardProps } from '../TaskCard/TaskCard';
import NewTask from '../NewTask/NewTask';
import React from 'react';

type TTaskListProps = ITaskCardProps[];

interface ITaskContextProps {
  taskList: TTaskListProps;
  addTask: ({}: ITaskCardProps) => void;
}

export const TaskContext = React.createContext<ITaskContextProps>({} as ITaskContextProps);

const TaskList: React.FC = () => {
  const [taskList, setTaskList] = React.useState<TTaskListProps>([]);

  function addTask({ id, title, text }: ITaskCardProps) {
    const newTask = { id: id, title: title, text: text };
    const newList = [...taskList, newTask] as TTaskListProps;
    console.log(newList);
    setTaskList(newList);
  }

  return (
    <TaskContext.Provider value={{ taskList, addTask }}>
      <ul className={styles.box}>
        {taskList.map(({ id, title, text }) => (
          <TaskCard key={id} title={title} text={text} />
        ))}
        <Breaker />
        <NewTask />
      </ul>
    </TaskContext.Provider>
  );
};

export default TaskList;
