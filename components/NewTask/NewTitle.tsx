import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateNewTitle } from '../../pages/_app';
import styles from './NewTask.module.css';

const NewTitle: React.FC = () => {
  const dispatch = useDispatch();

  const title = useSelector<TRootState, string>((state) => state.newTaskTitle);
  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(updateNewTitle(event.target.value));
  }

  return <input value={title} className={styles.inputTitle} onChange={handleTitleChange} type='text' placeholder='Title' />;
};

export default NewTitle;
