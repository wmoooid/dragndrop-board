import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState, updateNewText } from '../../pages/_app';
import styles from './NewTask.module.css';

const NewText: React.FC = () => {
  const dispatch = useDispatch();

  const text = useSelector<TRootState, string>((state) => state.newTaskText);
  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateNewText(event.target.value));
  }

  return (
    <textarea
      value={text}
      className={styles.inputText}
      onChange={handleTextChange}
      name='description'
      id='description'
      placeholder='Take a note...'></textarea>
  );
};

export default NewText;
