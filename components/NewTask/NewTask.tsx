import React, { ChangeEvent, FormEvent } from 'react';
import { generateRandomString } from '../../utils/generateRandomIndex';
import Breaker from '../Breaker';
import { TaskContext } from '../TaskList/TaskList';
import styles from './NewTask.module.css';

const NewTask: React.FC = () => {
  const { addTask } = React.useContext(TaskContext);

  const [title, setTitle] = React.useState('');
  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const [text, setText] = React.useState('');
  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addTask({ id: generateRandomString(), title: title, text: text });
    setTitle('');
    setText('');
  }

  return (
    <form className='box' onSubmit={handleSubmit}>
      <input className={styles.inputTitle} onChange={handleTitleChange} type='text' placeholder='Title' />
      <Breaker />
      <textarea className={styles.inputText} onChange={handleTextChange} name='description' id='description' placeholder='Take a note...'></textarea>
      <Breaker />
      <div className={styles.propsBox}>
        <ul className='tagsBox'>
          <li className='tagsRed'>Design</li>
          <li className='tagsGreen'>Templates</li>
          <li className='tagsBlue'>Dashboard</li>
        </ul>
        <span>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9 6.75C8.30964 6.75 7.75 7.30964 7.75 8C7.75 8.69036 8.30964 9.25 9 9.25C9.69036 9.25 10.25 8.69036 10.25 8C10.25 7.30964 9.69036 6.75 9 6.75ZM6.25 8C6.25 6.48122 7.48122 5.25 9 5.25C10.5188 5.25 11.75 6.48122 11.75 8C11.75 9.51878 10.5188 10.75 9 10.75C7.48122 10.75 6.25 9.51878 6.25 8Z'
              fill='#595959'
            />
            <path
              d='M19.25 2.25C19.25 1.83579 18.9142 1.5 18.5 1.5C18.0858 1.5 17.75 1.83579 17.75 2.25V4.25H15.75C15.3358 4.25 15 4.58579 15 5C15 5.41421 15.3358 5.75 15.75 5.75H17.75V7.75C17.75 8.16421 18.0858 8.5 18.5 8.5C18.9142 8.5 19.25 8.16421 19.25 7.75V5.75H21.25C21.6642 5.75 22 5.41421 22 5C22 4.58579 21.6642 4.25 21.25 4.25H19.25V2.25Z'
              fill='#595959'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9 1.25C6.42603 1.25 4.42914 1.7602 3.09467 3.09467C1.7602 4.42914 1.25 6.42603 1.25 9V15C1.25 17.574 1.7602 19.5709 3.09467 20.9053C4.42914 22.2398 6.42603 22.75 9 22.75H15C17.574 22.75 19.5709 22.2398 20.9053 20.9053C22.2398 19.5709 22.75 17.574 22.75 15V13.9047C22.75 13.9018 22.75 13.8988 22.75 13.8958V10C22.75 9.58579 22.4142 9.25 22 9.25C21.5858 9.25 21.25 9.58579 21.25 10V12.2671L20.8587 11.931C19.7977 11.0197 18.1224 11.0198 17.0613 11.931L12.9013 15.501C12.4033 15.9288 11.5608 15.9296 11.0615 15.5034L10.7351 15.2165L10.7288 15.2111C9.75679 14.376 8.24502 14.3041 7.18194 15.0173L3.05325 17.7893C2.85315 17.0323 2.75 16.1133 2.75 15V9C2.75 6.57397 3.2398 5.07086 4.15533 4.15533C5.07086 3.2398 6.57397 2.75 9 2.75H13C13.4142 2.75 13.75 2.41421 13.75 2C13.75 1.58579 13.4142 1.25 13 1.25H9ZM3.64342 19.1998C3.79555 19.4417 3.96637 19.6557 4.15533 19.8447C5.07086 20.7602 6.57397 21.25 9 21.25H15C17.426 21.25 18.9291 20.7602 19.8447 19.8447C20.7602 18.9291 21.25 17.426 21.25 15V14.2444L19.8813 13.0689C19.3824 12.6403 18.5376 12.6403 18.0387 13.0689L13.8787 16.6389C12.8176 17.5501 11.1423 17.5502 10.0813 16.6389L10.0749 16.6334L9.74844 16.3464C9.30001 15.9637 8.53368 15.9167 8.01784 16.2628L3.64342 19.1998Z'
              fill='#595959'
            />
          </svg>
        </span>
      </div>
      <Breaker />
      <input className={styles.buttonAdd} type='submit' value='Add new task' />
    </form>
  );
};

export default NewTask;
