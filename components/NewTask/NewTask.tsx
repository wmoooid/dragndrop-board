import React, { FormEvent } from 'react';
import NewTitle from './NewTitle';
import NewText from './NewText';
import UploadImage from './UploadImage';
import SetTags from './SetTags';
import Breaker from '../../assets/Breaker';
import styles from './NewTask.module.css';
import { generateRandomString } from '../../utils/generateRandomIndex';
import { TaskContext } from '../TaskList/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateNewImage, updateNewText, updateNewTitle } from '../../pages/_app';

const NewTask: React.FC = () => {
  const { addTask } = React.useContext(TaskContext);
  const dispatch = useDispatch();
  const title = useSelector<TRootState, string>((state) => state.newTaskTitle);
  const text = useSelector<TRootState, string>((state) => state.newTaskText);
  const image = useSelector<TRootState, string>((state) => state.newTaskImage);

  // Submit
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const currentDate = new Date();
    addTask({ id: generateRandomString(), title: title, text: text, image: image, date: currentDate });
    dispatch(updateNewTitle(''));
    dispatch(updateNewText(''));
    dispatch(updateNewImage(''));
  }

  function validateInput() {
    if (title.length < 1 && text.length < 1 && !image) {
      return false;
    } else {
      return true;
    }
  }

  const isInputEmpty = !validateInput();

  return (
    <form className='box' onSubmit={handleSubmit}>
      <NewTitle />
      <Breaker />
      <NewText />
      <Breaker />
      <UploadImage />
      <SetTags />
      <Breaker />
      <input className={styles.buttonAdd} type='submit' value='Add new task' disabled={isInputEmpty} />
    </form>
  );
};

export default NewTask;
